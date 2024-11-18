// app/projects/[slug]/page.tsx
import { allProjects } from ".contentlayer/generated";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "@/app/components/Link";
import Mdx from "@/app/blog/components/MdxWrapper";
import Image from "next/image";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = allProjects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return {
    title: `${project.title} | Anwar Mujeeb`,
    description: project.summary,
  };
}

export default function Project({ params }: Props) {
  const project = allProjects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <article className="flex flex-col gap-20">
      <header className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold tracking-tight">
            {project.title}
          </h1>
          <p className="text-secondary">{project.summary}</p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex flex-wrap gap-2">
            {project.tags?.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-secondary px-4 py-1.5 text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          
          {project.url && (
            <Link
              href={project.url}
              className="ml-auto rounded-full bg-[#0A84FF] hover:bg-[#0064D1] px-4 py-1.5 text-sm text-white transition-colors no-underline"
              >
              View Project →
            </Link>
          )}
        </div>



        {project.image && (
          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={630}
            className="rounded-lg border border-secondary bg-tertiary"
            priority
          />
        )}
      </header>

      <div className="prose prose-neutral">
        <Mdx code={project.body.code} />
      </div>
    </article>
  );
}