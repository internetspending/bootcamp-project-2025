// src/app/blog/page.tsx
import connectDB from "@/database/db";
import Blog, { BlogDoc } from "@/database/blogSchema";
import Link from "next/link";
import Image from "next/image";

export const dynamic = 'force-dynamic';

async function getBlogs(): Promise<BlogDoc[] | null> {
  try {
    await connectDB();
    const blogs = await Blog.find().sort({ date: -1 }).lean() as unknown as BlogDoc[];
    return blogs;
  } catch {
    return null;
  }
}

export default async function BlogPage() {
  const blogs = await getBlogs();

  if (!blogs || blogs.length === 0) {
    return (
      <main className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Blog</h1>
        <p>No blogs found.</p>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-4xl font-bold mb-4">Blog</h1>
      <p className="text-lg text-gray-600 mb-8">
        Thoughts on software engineering, entrepreneurship, and technology
      </p>
      
      <ul className="space-y-6">
        {blogs.map((b) => (
          <li key={b.slug} className="border rounded-xl p-4 hover:shadow-lg transition-shadow">
            <Link 
              href={`/blog/${b.slug}`} 
              className="text-xl font-semibold underline text-blue-600 hover:text-blue-800"
            >
              {b.title}
            </Link>
            <p className="text-sm opacity-70 mt-2">
              {b.date ? new Date(b.date).toLocaleDateString() : ""}
            </p>
            <p className="mt-2 text-gray-700">{b.description}</p>
            {b.image && (
              <div className="mt-3">
                <Image 
                  src={b.image} 
                  alt={b.image_alt} 
                  width={600}
                  height={300}
                  className="rounded-lg w-full max-w-md" 
                />
              </div>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}
