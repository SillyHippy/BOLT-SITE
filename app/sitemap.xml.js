// This file disables the dynamic sitemap route for Next.js static export compatibility.
export const revalidate = 0;
export const dynamic = "force-static";

export default function Sitemap() {
  // This route is intentionally left blank to prevent build errors.
  return null;
}
