// app/projects/components/ProjectCard.tsx
import Link from "@/app/components/Link";
import { Project } from ".contentlayer/generated";
import Image from "next/image";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col rounded-lg border border-primary bg-secondary p-4 transition-colors hover:bg-tertiary"
    >
      {project.image && (
        <div className="relative aspect-video w-full overflow-hidden rounded-lg">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-col gap-2 pt-4">
        <h2 className="text-xl font-semibold">{project.title}</h2>
        <p className="text-secondary">{project.summary}</p>
        {project.tags && (
          <div className="mt-2 flex flex-wrap gap-2">
            {project.tags.map((tag: string) => (
              <span
                key={tag}
                className="rounded-full bg-primary px-3 py-1 text-xs text-secondary"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}

