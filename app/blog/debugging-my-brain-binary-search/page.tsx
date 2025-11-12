import Image from 'next/image';
import Link from 'next/link';

export default function BlogPostPage() {
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

        <h1 className="text-4xl font-bold mb-4">Debugging My Brain: How Binary Search Changed How I Think</h1>
        <p className="text-gray-600 mb-8">October 14, 2025</p>

        <div className="mb-8">
          <Image
            src="/images/binary-search.svg"
            alt="Binary search visual diagram"
            width={800}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>

        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            I used to brute-force everything—both in code and in life. Learning binary search taught me to eliminate half of the noise every time. Now, when I study or make business decisions, I think in O(log n).
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h2 className="text-2xl font-semibold mb-4">Key Takeaways</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>This principle extends far beyond code and applies to life decisions</li>
              <li>Efficiency comes from asking better questions, not working harder</li>
              <li>Consistent elimination of possibilities leads to optimal solutions</li>
            </ul>
          </div>

          <p className="text-gray-700 leading-relaxed">
            By consistently eliminating half the possibilities, I've found that efficiency isn't just about speed, 
            but about thinking smarter and focusing on what truly matters. This mindset has transformed how I 
            approach both technical challenges and personal growth.
          </p>
        </div>
      </article>
    </main>
  );
}
