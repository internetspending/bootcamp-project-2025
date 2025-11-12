// src/app/portfolio/[slug]/page.tsx
import connectDB from "@/database/db";
import Project, { ProjectDoc } from "@/database/projectSchema";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export const dynamic = 'force-dynamic';

type Props = { params: Promise<{ slug: string }> };

export default async function ProjectDetail({ params }: Props) {
  const { slug } = await params;
  await connectDB();
  const project = await Project.findOne({ slug }).lean() as unknown as ProjectDoc | null;

  if (!project) return notFound();

  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <article className="bg-white rounded-lg shadow-md p-8">
        <div className="mb-6">
          <Link 
            href="/portfolio" 
            className="text-blue-600 hover:text-blue-800 font-medium mb-4 inline-block"
          >
            ← Back to Portfolio
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-sm opacity-70 mb-8">
          {project.date ? new Date(project.date).toLocaleString() : ""}
        </p>
        
        {project.image && (
          <div className="mb-8">
            <Image
              src={project.image}
              alt={project.image_alt || project.title}
              width={800}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
        )}

        <article className="prose max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {project.description}
          </p>
          
          {project.tech?.length ? (
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Technologies</h2>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech: string) => (
                  <span 
                    key={tech}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ) : null}

          {(project.github || project.demo) && (
            <div className="mb-6 flex gap-4">
              {project.github && (
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  View on GitHub
                </a>
              )}
              {project.demo && (
                <a 
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  Live Demo
                </a>
              )}
            </div>
          )}

          <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
            {project.content}
          </div>
        </article>
      </article>
    </main>
  );
}

