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

        <h1 className="text-4xl font-bold mb-4">From Ice Cream to Income: What Selling on Amazon Taught Me</h1>
        <p className="text-gray-600 mb-8">October 15, 2025</p>

        <div className="mb-8">
          <Image
            src="/images/amazon-fba.svg"
            alt="Boxes ready for shipment in a warehouse"
            width={800}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>

        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Two years scooping ice cream and a year flipping products on Amazon gave me the same lesson: consistency wins. Whether it's managing ROI spreadsheets or debugging TypeScript, success comes from iteration, not perfection.
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h2 className="text-2xl font-semibold mb-4">Key Lessons</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Consistency beats perfection every time</li>
              <li>Small improvements compound over time</li>
              <li>Data-driven decisions lead to better outcomes</li>
            </ul>
          </div>

          <p className="text-gray-700 leading-relaxed">
            From the ice cream shop to Amazon FBA, consistent effort and incremental improvements have always led to success. 
            This mindset of iteration over perfection is now applied to my coding. Ship the MVP, get feedback, iterate, 
            and compound those small wins for continuous growth.
          </p>
        </div>
      </article>
    </main>
  );
}
