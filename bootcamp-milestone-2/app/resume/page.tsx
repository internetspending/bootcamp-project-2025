export default function ResumePage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Resume</h1>
      
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Jeron Perey</h2>
          <p className="text-lg text-gray-600">Computer Science Student</p>
          <p className="text-gray-500">Cal Poly San Luis Obispo</p>
        </div>

        <div className="space-y-8">
          <section>
            <h3 className="text-2xl font-semibold mb-4 text-blue-600 border-b-2 border-blue-200 pb-2">
              Education
            </h3>
            <div className="ml-4">
              <h4 className="text-lg font-medium">Bachelor of Science in Computer Science</h4>
              <p className="text-gray-600">Cal Poly San Luis Obispo</p>
              <p className="text-gray-500">Expected Graduation: 2026</p>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-semibold mb-4 text-blue-600 border-b-2 border-blue-200 pb-2">
              Experience
            </h3>
            <div className="ml-4 space-y-6">
              <div>
                <h4 className="text-lg font-medium">Amazon FBA Seller</h4>
                <p className="text-gray-600">2023 - Present</p>
                <ul className="list-disc list-inside text-gray-700 mt-2">
                  <li>Managed product research and sourcing</li>
                  <li>Optimized listing performance and ROI</li>
                  <li>Analyzed market trends and competition</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-medium">Ice Cream Shop Employee</h4>
                <p className="text-gray-600">2021 - 2023</p>
                <ul className="list-disc list-inside text-gray-700 mt-2">
                  <li>Provided excellent customer service</li>
                  <li>Managed inventory and cash handling</li>
                  <li>Maintained clean and organized workspace</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-semibold mb-4 text-blue-600 border-b-2 border-blue-200 pb-2">
              Skills
            </h3>
            <div className="ml-4 grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">Programming Languages</h4>
                <p className="text-gray-700">TypeScript, JavaScript, Python, Java</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Web Technologies</h4>
                <p className="text-gray-700">React, Next.js, HTML, CSS, Tailwind CSS</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Tools & Frameworks</h4>
                <p className="text-gray-700">Git, Node.js, npm, ESLint, Prettier</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Other</h4>
                <p className="text-gray-700">Data Analysis, E-commerce, Problem Solving</p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-semibold mb-4 text-blue-600 border-b-2 border-blue-200 pb-2">
              Projects
            </h3>
            <div className="ml-4 space-y-4">
              <div>
                <h4 className="text-lg font-medium">Personal Portfolio Website</h4>
                <p className="text-gray-700">Built with Next.js, TypeScript, and Tailwind CSS. Features dynamic blog system and responsive design.</p>
              </div>
              <div>
                <h4 className="text-lg font-medium">Amazon FBA Analytics Dashboard</h4>
                <p className="text-gray-700">Custom spreadsheet system for tracking product performance, ROI analysis, and inventory management.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
