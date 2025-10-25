import Image from "next/image";
import Link from "next/link";
import BlogPreview from '../src/components/blogPreview';
import blogs from '../src/app/blogData';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="hero py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="hero-text">
              <h1 className="text-5xl font-bold mb-6">
                <span className="text-blue-600">Hi, I'm</span> Jeron Perey
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                Computer Science Student at Cal Poly SLO
              </p>
              <p className="text-lg text-gray-700 mb-6 italic">
                "Turning ideas into optimized systems and meaningful impact."
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                I'm a Computer Science major at Cal Poly San Luis Obispo,
                passionate about software engineering, systems optimization, and
                entrepreneurship. I'm driven by building efficient, data-driven
                systems that simplify complex processes.
              </p>
              <div className="flex gap-4">
                <Link 
                  href="/resume" 
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Learn More
                </Link>
                <Link 
                  href="/portfolio" 
                  className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  View Projects
                </Link>
              </div>
            </div>
            <div className="hero-image">
              <Image
                src="/profile.jpg"
                alt="Jeron Perey Profile Photo"
                width={400}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Latest Blog Posts</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {blogs.slice(0, 2).map((blog) => (
              <BlogPreview key={blog.slug} {...blog} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link 
              href="/blog" 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              View All Posts
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
