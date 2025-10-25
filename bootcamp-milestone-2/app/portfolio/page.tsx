import ProjectCard from '../../src/components/projectCard';

const projects = [
  {
    title: "Personal Portfolio Website",
    description: "A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features dynamic blog system, responsive design, and optimized performance.",
    image: "/images/portfolio.svg",
    imageAlt: "Portfolio website emoji",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"]
  },
  {
    title: "Amazon FBA Analytics Dashboard",
    description: "Custom analytics system for tracking Amazon FBA performance, ROI analysis, and inventory management. Built with Excel/Google Sheets with advanced formulas and data visualization.",
    image: "/images/analytics.svg",
    imageAlt: "Analytics dashboard emoji",
    technologies: ["Excel", "Google Sheets", "Data Analysis", "ROI Optimization"]
  },
  {
    title: "Binary Search Learning Tool",
    description: "Interactive visualization tool for understanding binary search algorithms. Helps students and developers grasp the concept through step-by-step visual demonstrations.",
    image: "/images/binary-search.svg",
    imageAlt: "Binary search visualization emoji",
    technologies: ["JavaScript", "HTML5 Canvas", "Algorithms", "Education"]
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
