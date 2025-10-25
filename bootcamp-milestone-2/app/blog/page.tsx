import BlogPreview from '../../src/components/blogPreview';
import blogs from '../../src/app/blogData';

export default function BlogPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Blog</h1>
      <p className="text-lg text-gray-600 mb-8">
        Thoughts on software engineering, entrepreneurship, and technology
      </p>
      
      <div className="space-y-6">
        {blogs.map((blog) => (
          <BlogPreview key={blog.slug} {...blog} />
        ))}
      </div>
    </main>
  );
}
