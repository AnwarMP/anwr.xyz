// app/page.tsx
import Link from "@/app/components/Link";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import Gallery from "@/app/components/home/Gallery";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <IntroSection />
      <Gallery /> 
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
          Expected to graduate from San Jose State University in December 2024.
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
        <Link
          href="https://x.com/anwrmp"
          className="flex items-center rounded-lg bg-secondary px-4 py-2 text-primary transition-colors hover:bg-tertiary"
        >
          X/Twitter <ArrowUpRightIcon className="ml-2 h-4 w-4" />
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
      role: "Software Engineering and Machine Learning Intern",
      date: "April 2024 - November 2024",
      location: "Santa Clara, CA",
      highlights: [
        "Accelerated inference speed by 200% by optimizing Tensorflow model architectures for on-device blood pressure monitoring using Android NDK",
        "Reduced QA testing time by 60% by developing automated sensor validation pipeline using Python and C++ with 6-axis robotic arm",
        "Achieved 90% accuracy in gait reconstruction by implementing transformer model for accelerometer data analysis using Tensorflow and signal processing",
        "Reduced model deployment time by 75% by architecting end-to-end ML pipeline with on-device validation, AWS S3 for data ingestion, and SageMaker for continuous model training"
      ]
    },
    {
      company: "Google",
      role: "Software Engineer Intern",
      date: "May 2023 - August 2023",
      location: "Mountain View, CA",
      highlights: [
        "Engineered a comprehensive testing framework for iOS mobile client to backend integration, leveraging Java, Objective-C, and Swift for automation, reducing testing time by 50%",
        "Led cross-functional collaboration with over 4 teams to define requirements and solutions for iOS client-backend integration, enhancing team synergy and project outcomes",
        "Spearheaded integration of iOS Authentication for tests, utilizing SSO Tokens, iOS Identity Kit and Google's Identity services",
        "Authored comprehensive integration tests for Google Fi's Android client, employing gRPC, Espresso, and Kotlin for robust end to end testing for mobile apps"
      ]
    },
    {
      company: "Google",
      role: "Software Engineer Intern",
      date: "May 2022 - August 2022",
      location: "New York City, NY",
      highlights: [
        "Developed a multithreaded, high-throughput data processing pipeline in C++ for Google Ads, boosting performance and efficiency for large-scale data operations by 10%, impacting over $5 billion in spend",
        "Wrote a 12 page document detailing project design, integration with existing systems, and data validation process",
        "Utilized internal Google development process including design reviews, bug tracking, version control, code reviews, and validation and CI/CD",
        "Optimized SQL queries for data validation, streamlining data integrity checks and improving speeds by 50 ms"
      ]
    }
  ];

  return (
    <section className="flex flex-col gap-8">
      <h2 className="text-xl font-bold text-primary">Experience</h2>
      <div className="flex flex-col gap-12">
        {experiences.map((exp, index) => (
          <div key={index} className="group relative grid pb-1 transition-all md:grid-cols-8 md:gap-8">
            <header className="md:col-span-2">
              <h3 className="font-medium text-primary">{exp.company}</h3>
              <p className="text-tertiary">{exp.location}</p>
              <p className="text-secondary">{exp.date}</p>
            </header>
            <div className="md:col-span-6">
              <h4 className="font-medium text-primary">{exp.role}</h4>
              <ul className="mt-2 text-secondary">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="mb-2">• {highlight}</li>
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
    "Languages": ["C++", "Java", "Python", "JavaScript", "Kotlin", "Objective-C"],
    "ML/AI": ["TensorFlow", "PyTorch", "Keras", "LlamaIndex"],
    "Web & Mobile": ["React", "Node.js", "Flask", "Android Development", "iOS Development"],
    "Cloud & Tools": ["AWS", "Google Cloud", "MongoDB", "MySQL", "Git", "Docker"]
  };

  return (
    <section className="flex flex-col gap-8">
      <h2 className="text-xl font-bold text-primary">Skills</h2>
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