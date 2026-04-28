import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ChevronRight,
  BookOpen,
  Scale,
  Briefcase,
  HelpCircle,
  Calendar,
  GitCompare,
  ArrowRight,
  FileSignature,
  DollarSign,
} from 'lucide-react';
import UnifiedSchema from '@/components/UnifiedSchema';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import LocalPromoBanner from '@/components/ui/local-promo-banner';
import { BLOG_CATEGORIES, getAllCategorySlugs, getCategoryBySlug } from '@/lib/blog-categories';

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllCategorySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) {
    return {
      title: 'Category Not Found | Just Legal Solutions Blog',
      description: 'The requested blog category does not exist.',
      robots: 'noindex, follow',
    };
  }

  const url = `https://justlegalsolutions.org/blog/category/${category.slug}`;
  const title = `${category.name} | Oklahoma Process Serving & Legal Blog`;
  const description = `${category.description}. ${category.posts.length} in-depth article${category.posts.length === 1 ? '' : 's'} covering Oklahoma process serving, court procedures, and practical legal guidance.`;

  return {
    title,
    description,
    keywords: `${category.name.toLowerCase()}, oklahoma legal blog, process serving oklahoma, ${category.posts
      .slice(0, 3)
      .map((p) => p.title.toLowerCase())
      .join(', ')}`,
    authors: [{ name: 'Just Legal Solutions' }],
    creator: 'Just Legal Solutions',
    publisher: 'Just Legal Solutions',
    robots: 'noindex, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
    openGraph: {
      title,
      description,
      url,
      siteName: 'Just Legal Solutions',
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: 'https://justlegalsolutions.org/image-pack/images/image-043-blog-hero.webp',
          width: 1200,
          height: 630,
          alt: `${category.name} \u2014 Just Legal Solutions Blog`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://justlegalsolutions.org/image-pack/images/image-043-blog-hero.webp'],
    },
    alternates: { canonical: url },
  };
}

const iconMap = {
  BookOpen,
  Scale,
  Briefcase,
  HelpCircle,
  Calendar,
  GitCompare,
  FileSignature,
  DollarSign,
} as const;

const colorMap = {
  blue: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-600', accent: 'bg-blue-600', hover: 'hover:border-blue-300' },
  indigo: { bg: 'bg-indigo-50', border: 'border-indigo-200', text: 'text-indigo-600', accent: 'bg-indigo-600', hover: 'hover:border-indigo-300' },
  emerald: { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-600', accent: 'bg-emerald-600', hover: 'hover:border-emerald-300' },
  amber: { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-600', accent: 'bg-amber-600', hover: 'hover:border-amber-300' },
  rose: { bg: 'bg-rose-50', border: 'border-rose-200', text: 'text-rose-600', accent: 'bg-rose-600', hover: 'hover:border-rose-300' },
  violet: { bg: 'bg-violet-50', border: 'border-violet-200', text: 'text-violet-600', accent: 'bg-violet-600', hover: 'hover:border-violet-300' },
  teal: { bg: 'bg-teal-50', border: 'border-teal-200', text: 'text-teal-600', accent: 'bg-teal-600', hover: 'hover:border-teal-300' },
  green: { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-600', accent: 'bg-green-600', hover: 'hover:border-green-300' },
} as const;

export default async function BlogCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const Icon = iconMap[category.icon];
  const colors = colorMap[category.color];
  const url = `https://justlegalsolutions.org/blog/category/${category.slug}`;

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${category.name} \u2014 Just Legal Solutions Blog`,
    description: category.description,
    url,
    numberOfItems: category.posts.length,
    itemListElement: category.posts.map((post, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      url: `https://justlegalsolutions.org/blog/${post.slug}`,
      name: post.title,
    })),
  };

  const otherCategories = BLOG_CATEGORIES.filter((c) => c.slug !== category.slug);

  return (
    <div className="min-h-screen bg-gray-50">
      <UnifiedSchema
        pageType="generic"
        url={url}
        title={`${category.name} | Just Legal Solutions Blog`}
        description={category.description}
        breadcrumbs={[
          { name: 'Home', url: 'https://justlegalsolutions.org/' },
          { name: 'Blog', url: 'https://justlegalsolutions.org/blog' },
          { name: category.name, url },
        ]}
      />
      <script
        type="application/ld+json"
         
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <Navbar />
      <LocalPromoBanner zips={[]} />

      <main>
        <section className={`${colors.bg} border-b ${colors.border}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-600">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href="/" className="hover:text-blue-700 underline">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">
                  <ChevronRight className="w-4 h-4" />
                </li>
                <li>
                  <Link href="/blog" className="hover:text-blue-700 underline">
                    Blog
                  </Link>
                </li>
                <li aria-hidden="true">
                  <ChevronRight className="w-4 h-4" />
                </li>
                <li className="font-medium text-gray-900" aria-current="page">
                  {category.name}
                </li>
              </ol>
            </nav>

            <div className="flex items-start gap-4">
              <div className={`flex-shrink-0 w-14 h-14 rounded-xl ${colors.accent} text-white flex items-center justify-center shadow-md`}>
                <Icon className="w-7 h-7" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
                  {category.name}
                </h1>
                <p className="text-lg text-gray-700 max-w-3xl">{category.description}.</p>
                <p className={`mt-2 text-sm font-medium ${colors.text}`}>
                  {category.posts.length} article{category.posts.length === 1 ? '' : 's'} in this
                  category
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {category.posts.map((post) => (
              <article
                key={post.slug}
                className={`bg-white rounded-xl shadow-sm border ${colors.border} ${colors.hover} p-6 transition hover:shadow-md flex flex-col`}
              >
                <time
                  dateTime={post.date}
                  className="text-xs font-medium text-gray-500 uppercase tracking-wide"
                >
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <h2 className="mt-2 text-xl font-bold text-gray-900 leading-snug">
                  <Link href={`/blog/${post.slug}`} className="hover:text-blue-700">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 text-gray-700 text-sm leading-relaxed flex-1">
                  {post.description}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className={`mt-4 inline-flex items-center gap-1 text-sm font-semibold ${colors.text} hover:underline`}
                >
                  Read article <ArrowRight className="w-4 h-4" />
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Browse other categories</h2>
            <p className="text-gray-600 mb-8">
              Explore the rest of the Just Legal Solutions blog.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {otherCategories.map((c) => {
                const CIcon = iconMap[c.icon];
                const cColors = colorMap[c.color];
                return (
                  <Link
                    key={c.slug}
                    href={`/blog/category/${c.slug}`}
                    className={`group flex items-start gap-3 p-4 rounded-lg border ${cColors.border} ${cColors.hover} hover:shadow-sm transition bg-white`}
                  >
                    <div
                      className={`flex-shrink-0 w-10 h-10 rounded-lg ${cColors.accent} text-white flex items-center justify-center`}
                    >
                      <CIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-blue-700">
                        {c.name}
                      </h3>
                      <p className="text-sm text-gray-600 mt-0.5">
                        {c.posts.length} article{c.posts.length === 1 ? '' : 's'}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
              >
                View all blog categories <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
