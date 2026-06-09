import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { sql } from '@/lib/db';
import { notFound } from 'next/navigation';

export const revalidate = 3600; // Revalidate every hour

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  const rows = await sql`SELECT * FROM blogs WHERE slug = ${slug} AND published = 1`;
  const blog = rows[0];

  if (!blog) {
    return {
      title: 'Blog Not Found | YMS Education Consultancy',
    };
  }

  return {
    title: `${blog.title} | YMS Education Consultancy`,
    description: blog.excerpt || blog.title,
    openGraph: {
      title: blog.title,
      description: blog.excerpt || blog.title,
      url: `https://yms.edu.np/blogs/${blog.slug}`,
      type: 'article',
      publishedTime: blog.created_at,
      authors: [blog.author],
      images: blog.thumbnail ? [{ url: blog.thumbnail }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.excerpt || blog.title,
      images: blog.thumbnail ? [blog.thumbnail] : [],
    },
  };
}

export default async function BlogDetail({ params }: Props) {
  const { slug } = params;
  const rows = await sql`SELECT * FROM blogs WHERE slug = ${slug} AND published = 1`;
  const blog = rows[0];

  if (!blog) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-white pt-20">
      <div className="max-w-[800px] mx-auto w-full px-4 py-8">
        <Link href="/blogs" className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-[#E8192C] transition-colors mb-8">
          <span className="material-symbols-outlined text-[18px]">arrow_back</span> Back to all blogs
        </Link>
        
        <div className="mb-8">
          <span className="inline-block px-3 py-1 bg-[#f0f4f8] text-[#1B2A6B] text-xs font-bold rounded-full mb-4">
            {blog.category}
          </span>
          <h1 className="font-nunito font-black text-3xl md:text-5xl text-[#1B2A6B] mb-6 leading-tight">
            {blog.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[18px]">person</span> {blog.author}
            </span>
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[18px]">calendar_today</span> 
              {new Date(blog.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
          </div>
        </div>
      </div>

      {blog.thumbnail && (
        <div className="w-full max-w-[1000px] mx-auto px-4 mb-12">
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-xl">
            <Image src={blog.thumbnail} alt={blog.title} fill className="object-cover" />
          </div>
        </div>
      )}

      <div className="max-w-[800px] mx-auto w-full px-4 pb-20">
        <div 
          className="prose prose-lg max-w-none prose-headings:font-nunito prose-headings:font-black prose-headings:text-[#1B2A6B] prose-a:text-[#E8192C]"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
        
        {/* Share & Author block */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#1B2A6B] text-white flex items-center justify-center font-bold text-xl">
                {blog.author.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-[#1B2A6B]">Written by {blog.author}</p>
                <p className="text-xs text-gray-500">YMS Education Consultancy</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full bg-[#f0f4f8] text-[#1B2A6B] flex items-center justify-center hover:bg-[#E8192C] hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[20px]">share</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
