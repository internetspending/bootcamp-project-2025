// app/blog/[slug]/page.tsx
import Comment from "@/components/Comment";
import CommentForm from "@/components/CommentForm";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import connectDB from "@/database/db";
import Blog, { BlogDoc } from "@/database/blogSchema";

export const dynamic = 'force-dynamic';

type Props = { params: Promise<{ slug: string }> };

export default async function BlogDetail({ params }: Props) {
  const { slug } = await params;
  await connectDB();
  const blog = await Blog.findOne({ slug }).lean() as unknown as BlogDoc | null;

  if (!blog) return notFound();

  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <article className="bg-white rounded-lg shadow-md p-8">
        <div className="mb-6">
          <Link 
            href="/blog" 
            className="text-blue-600 hover:text-blue-800 font-medium mb-4 inline-block"
          >
            ← Back to All Posts
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
        <p className="text-sm opacity-70 mb-8">
          {blog.date ? new Date(blog.date).toLocaleString() : ""}
        </p>
        {blog.image && (
          <div className="mb-8">
            <Image
              src={blog.image}
              alt={blog.image_alt}
              width={800}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
        )}
        <article className="prose max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {blog.description}
          </p>
          <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
            {blog.content}
          </div>
        </article>

        <section className="mt-8">
          <h2 className="text-xl font-semibold mb-3">
            Comments ({blog.comments?.length ?? 0})
          </h2>
          {blog.comments && blog.comments.length > 0 ? (
            blog.comments.map((comment: any, index: number) => (
              <Comment key={index} comment={comment} />
            ))
          ) : (
            <p className="text-gray-500 text-sm">
              No comments yet. Be the first to comment!
            </p>
          )}
          
          <CommentForm slug={slug} />
        </section>
      </article>
    </main>
  );
}
