#!/bin/bash
set -e

page_created="false"
# The list now ONLY contains our test town.
locations=(
  "fart-town,77777"
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
