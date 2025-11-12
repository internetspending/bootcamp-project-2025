// src/app/portfolio/page.tsx
import connectDB from "@/database/db";
import Project, { ProjectDoc } from "@/database/projectSchema";
import Link from "next/link";
import Image from "next/image";

export const dynamic = 'force-dynamic';

export default async function PortfolioPage() {
  await connectDB();
  const projects = await Project.find().sort({ date: -1 }).lean() as unknown as ProjectDoc[];

  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-4">Portfolio</h1>
      <p className="text-lg text-gray-600 mb-8">
        A collection of my projects and technical work
      </p>
      {(!projects || projects.length === 0) ? (
        <p>No projects yet.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Link 
              key={p.slug} 
              href={`/portfolio/${p.slug}`}
              className="border rounded-2xl p-4 hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold">{p.title}</h2>
              <p className="text-sm opacity-70 mt-2">
                {p.date ? new Date(p.date).toLocaleDateString() : ""}
              </p>
              <p className="mt-2 text-gray-700">{p.description}</p>
              {p.tech?.length ? (
                <div className="mt-2 text-sm opacity-80">Tech: {p.tech.join(", ")}</div>
              ) : null}
              {p.image && (
                <div className="mt-3">
                  <Image 
                    src={p.image} 
                    alt={p.image_alt || p.title} 
                    width={400}
                    height={200}
                    className="rounded-lg w-full" 
                  />
                </div>
              )}
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
