import ProjectCard from '../../src/components/projectCard';

const projects = [
  {
    title: "Personal Portfolio Website",
    description: "A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features dynamic blog system, responsive design, and optimized performance.",
    image: "/images/portfolio-preview.jpg",
    imageAlt: "Portfolio website screenshot",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    githubUrl: "https://github.com/jeronperey/portfolio",
    liveUrl: "https://jeronperey.dev"
  },
  {
    title: "Amazon FBA Analytics Dashboard",
    description: "Custom analytics system for tracking Amazon FBA performance, ROI analysis, and inventory management. Built with Excel/Google Sheets with advanced formulas and data visualization.",
    image: "/images/amazon-analytics.jpg",
    imageAlt: "Analytics dashboard screenshot",
    technologies: ["Excel", "Google Sheets", "Data Analysis", "ROI Optimization"],
    githubUrl: "https://github.com/jeronperey/amazon-analytics"
  },
  {
    title: "Binary Search Learning Tool",
    description: "Interactive visualization tool for understanding binary search algorithms. Helps students and developers grasp the concept through step-by-step visual demonstrations.",
    image: "/images/binary-search-tool.jpg",
    imageAlt: "Binary search visualization tool",
    technologies: ["JavaScript", "HTML5 Canvas", "Algorithms", "Education"],
    githubUrl: "https://github.com/jeronperey/binary-search-tool",
    liveUrl: "https://binary-search-demo.vercel.app"
  }
];

export default function PortfolioPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Portfolio</h1>
      <p className="text-lg text-gray-600 mb-8">
        A collection of my projects and technical work
      </p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </main>
  );
}
