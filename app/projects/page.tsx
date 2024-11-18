// app/projects/page.tsx
import { Metadata } from "next";
import { allProjects } from ".contentlayer/generated";
import Image from "next/image";
import Link from "@/app/components/Link"; // Added this import

export const metadata: Metadata = {
  title: "Projects | Anwar Mujeeb",
  description: "Showcasing my software engineering projects in machine learning, full-stack development, and AI systems.",
};

export default function Projects() {
  const projects = allProjects.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div>
        <h1 className="animate-in text-3xl font-bold tracking-tight">Projects</h1>
        <p
          className="animate-in text-secondary"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          A collection of my work in machine learning, AI systems, and software development.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group relative flex flex-col space-y-4 rounded-lg border border-primary bg-secondary p-6 transition-colors hover:bg-tertiary"
          >
            <div>
              <h2 className="text-2xl font-bold">{project.title}</h2>
              <p className="mt-2 text-secondary">{project.summary}</p>
              
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-primary px-3 py-1 text-xs text-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <span className="text-sm text-secondary">
                Read more →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}