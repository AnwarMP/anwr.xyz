// app/page.tsx
import Link from "@/app/components/Link";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <IntroSection />
      <FeaturedProjects />
      <ExperienceSection />
      <SkillsSection />
    </div>
  );
}

function IntroSection() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-4">
        <h1 className="animate-in text-3xl font-bold tracking-tight text-primary">
          Anwar Mujeeb
        </h1>
        <p className="animate-in text-lg text-secondary">
          Software Engineer specializing in machine learning and full-stack development.
          Currently at ST Microelectronics, previously at Google.
        </p>
      </div>
      <div className="flex animate-in gap-3 text-sm">
        <Link
          href="https://github.com/anwarmp"
          className="flex items-center rounded-lg bg-secondary px-4 py-2 text-primary transition-colors hover:bg-tertiary"
        >
          GitHub <ArrowUpRightIcon className="ml-2 h-4 w-4" />
        </Link>
        <Link
          href="https://linkedin.com/in/anwarmujeeb"
          className="flex items-center rounded-lg bg-secondary px-4 py-2 text-primary transition-colors hover:bg-tertiary"
        >
          LinkedIn <ArrowUpRightIcon className="ml-2 h-4 w-4" />
        </Link>
        <Link
          href="mailto:anwar.mujeebp@gmail.com"
          className="flex items-center rounded-lg bg-secondary px-4 py-2 text-primary transition-colors hover:bg-tertiary"
        >
          Email <ArrowUpRightIcon className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

function FeaturedProjects() {
  const projects = [
    {
      title: "ConveneAI",
      description: "Real-time meeting intelligence system using multi-agent architecture",
      tech: ["Python", "LlamaIndex", "Claude", "React"],
      link: "/projects/convene-ai"
    },
    {
      title: "Retain",
      description: "AI-powered learning platform with RAG for personalized content",
      tech: ["Python", "RAG", "Flask", "AWS"],
      link: "/projects/retain"
    }
  ];

  return (
    <section className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h2 className="text-secondary">Featured Projects</h2>
        <Link href="/projects" className="text-sm text-secondary hover:text-primary">
          View all →
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.title}
            href={project.link}
            className="group rounded-lg border border-primary bg-secondary p-4 transition-colors hover:bg-tertiary"
          >
            <h3 className="font-medium">{project.title}</h3>
            <p className="mt-1 text-secondary">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-primary px-3 py-1 text-xs text-secondary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function ExperienceSection() {
  const experiences = [
    {
      company: "ST Microelectronics",
      role: "Software Engineering and ML Intern",
      date: "Apr 2024 - Nov 2024",
      highlights: [
        "Accelerated inference speed by 200% through TensorFlow optimization",
        "Reduced QA testing time by 60% with automated validation pipeline",
        "Achieved 90% accuracy in gait reconstruction with transformer model"
      ]
    },
    {
      company: "Google",
      role: "Software Engineer Intern",
      date: "May 2023 - Aug 2023",
      highlights: [
        "Engineered iOS testing framework reducing testing time by 50%",
        "Led cross-functional collaboration with 4+ teams",
        "Spearheaded iOS Authentication integration"
      ]
    }
  ];

  return (
    <section className="flex flex-col gap-8">
      <h2 className="text-secondary">Experience</h2>
      <div className="flex flex-col gap-12">
        {experiences.map((exp) => (
          <div key={exp.date} className="group relative grid pb-1 transition-all md:grid-cols-8 md:gap-8">
            <header className="md:col-span-2">
              <h3 className="font-medium text-primary">{exp.company}</h3>
              <p className="text-secondary">{exp.date}</p>
            </header>
            <div className="md:col-span-6">
              <h4 className="font-medium text-primary">{exp.role}</h4>
              <ul className="mt-2 text-secondary">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="mb-1">• {highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SkillsSection() {
  const skills = {
    "Languages": ["Python", "C++", "Java", "JavaScript", "Kotlin", "Swift"],
    "ML/AI": ["TensorFlow", "PyTorch", "LlamaIndex", "RAG", "Transformers"],
    "Web & Mobile": ["React", "Node.js", "Flask", "Android", "iOS"],
    "Cloud & Tools": ["AWS", "Google Cloud", "Docker", "Git"]
  };

  return (
    <section className="flex flex-col gap-8">
      <h2 className="text-secondary">Skills</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category} className="rounded-lg border border-primary bg-secondary p-4">
            <h3 className="mb-2 font-medium text-primary">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {skillList.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-primary px-3 py-1 text-xs text-secondary"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}