#!/bin/bash
set -e

page_created="false"
locations=(
  "fart-town,77777" # This is the test town
  "broken-arrow,74012" "bixby,74008" "jenks,74037" "owasso,74055"
  "sand-springs,74063" "sapulpa,74066" "glenpool,74033" "catoosa,74015"
  "collinsville,74021" "skiatook,74070" "coweta,74429" "claremore,74017"
  "bartlesville,74003" "nowata,74048" "vinita,74301" "pryor-creek,74361"
  "tahlequah,74464" "muskogee,74401" "wagoner,74467" "stilwell,74960"
  "sallisaw,74955" "okmulgee,74447" "henryetta,74437" "eufaula,74432"
  "mcalester,74501" "durant,74701" "ada,74820" "ardmore,73401"
  "stillwater,74074" "ponca-city,74601" "cushing,74023" "bristow,74010"
  "drumright,74030" "perry,73077" "oklahoma-city,73102" "edmond,73013"
  "norman,73069" "moore,73160" "midwest-city,73110" "del-city,73115"
  "yukon,73099" "mustang,73064" "choctaw,73020" "guthrie,73044"
  "enid,73701" "woodward,73801" "lawton,73501" "duncan,73533"
  "chickasha,73018" "weatherford,73096" "elk-city,73644" "guymon,73942"
)

for item in "${locations[@]}"; do
  IFS=',' read -r location zip <<< "$item"
  city_name=$(echo "$location" | sed 's/-/ /g' | sed -e "s/\b\(.\)/\u\1/g")
  file_path="app/(main)/seo/process-server-$location/page.tsx"

  if [ -f "$file_path" ]; then
    echo "✅ SKIPPING: Page for $city_name already exists."
  else
    echo "🚀 CREATING: New page for $city_name."
    mkdir -p "$(dirname "$file_path")"
    
    cat > "$file_path" <<EOF
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: '$city_name Process Server - Just Legal Solutions',
  description: 'Professional process server in $city_name, Oklahoma. Licensed, bonded, and insured for reliable legal document delivery.',
};
export default function ProcessServer${city_name// /}Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6">Process Server in $city_name, Oklahoma</h1>
        <p className="text-xl mb-8">Fast, Reliable, and Professional Service in $city_name.</p>
        <div className="bg-gray-100 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Serving the $city_name Area (ZIP: $zip)</h2>
          <p className="mb-4">Our experienced process servers are familiar with $city_name and provide legally compliant service for all document types.</p>
          <a href="tel:5393676832" className="bg-blue-600 text-white px-6 py-3 rounded-lg inline-block font-bold">
            Call for a Quote: (539) 367-6832
          </a>
        </div>
      </div>
    </div>
  );
}
EOF
    current_time=$(date '+%Y-%m-%d')
    sitemap_entry="  <url>\n    <loc>https://justlegalsolutions.org/seo/process-server-$location/</loc>\n    <lastmod>$current_time</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>"
    
    sitemap_content=$(cat public/sitemap.xml | sed '$d')
    echo -e "$sitemap_content\n$sitemap_entry\n</urlset>" > public/sitemap.xml

    echo "🗺️ Sitemap updated for $city_name."
    page_created="true"
    break
  fi
done

if [ "$page_created" = "false" ]; then
  echo "👍 All location pages already exist. No new pages created."
fi

echo "page_created=$page_created" >> "$GITHUB_OUTPUT"
