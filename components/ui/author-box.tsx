import Image from 'next/image';
import Link from 'next/link';

interface AuthorBoxProps {
  name?: string;
  role?: string;
  title?: string;
  date?: string;
  readTime?: string;
  bio?: string;
  imageUrl?: string;
  authorUrl?: string;
}

export function AuthorBox({
  name = "Joseph Iannazzi",
  role,
  title,
  date,
  readTime,
  bio = "Joseph Iannazzi is a licensed Oklahoma process server with a deep understanding of civil process throughout all 77 counties. He founded Just Legal Solutions to bring transparency, speed, and professionalism to legal support services in Oklahoma. Joseph is a recognized expert in Oklahoma civil procedure and specialized service techniques.",
  imageUrl = "/contactlogo.webp",
  authorUrl = "/notary/joseph",
}: AuthorBoxProps) {
  const displayRole = role || title || "Founder & Lead Process Server";

  return (
    <div className="mt-12 p-6 md:p-8 bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-2xl flex flex-col md:flex-row gap-6 items-center md:items-start shadow-sm hover:shadow-md transition-shadow">
      <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 rounded-full overflow-hidden border-4 border-white shadow-md bg-white flex items-center justify-center p-2">
        <Image src={imageUrl} alt={name} width={120} height={120} className="object-contain w-full h-full" />
      </div>
      <div className="text-center md:text-left flex-1">
        <div className="inline-flex items-center gap-2 mb-2">
          <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">Author</span>
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">{name}</h3>
        <p className="text-sm md:text-base text-blue-600 font-semibold mb-3">{displayRole}</p>
        {(date || readTime) && (
          <p className="text-xs md:text-sm text-gray-500 mb-3">
            {[date, readTime].filter(Boolean).join(' | ')}
          </p>
        )}
        <p className="text-gray-700 leading-relaxed mb-5 text-sm md:text-base">
          {bio}
        </p>
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          <Link href={authorUrl} className="text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 px-5 py-2.5 rounded-lg transition-colors shadow-sm">
            Contact {name.split(' ')[0]}
          </Link>
          <Link href="/blog" className="text-sm font-semibold text-blue-700 bg-white hover:bg-blue-50 px-5 py-2.5 rounded-lg border border-blue-200 transition-colors shadow-sm">
            Read More Articles
          </Link>
        </div>
      </div>
    </div>
  );
}
