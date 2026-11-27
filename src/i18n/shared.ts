// Data that isn't prose: links, technology names, project metadata. Text lives in en.ts.

export const person = {
  name: "Juan David Rodriguez Castelblanco",
  short: "Juan Castelblanco",
  email: "jdrcastel@gmail.com",
  linkedin: "https://www.linkedin.com/in/jdcastel/",
  github: "https://github.com/jdrcastel-dev",
  resume: "Resume_Juan_Castelblanco.pdf",
};

export type Skill = { name: string };

// Same groups and order as the resume's Skills section
export const skillChips: Record<string, { icon: string; skills: Skill[] }> = {
  frontend: {
    icon: "⚛️",
    skills: ["JavaScript", "TypeScript", "React", "Next.js", "Redux", "HTML", "CSS"].map((name) => ({ name })),
  },
  backend: {
    icon: "🧩",
    skills: ["Node.js", "Express", "NestJS", "REST APIs", "PostgreSQL", "Prisma", "SQL Server"].map((name) => ({ name })),
  },
  cloud: {
    icon: "☁️",
    skills: ["AWS (ECS, S3, DynamoDB, Cognito)", "Docker", "GitHub Actions", "Jest", "Git"].map((name) => ({ name })),
  },
  languages: {
    icon: "🗣️",
    skills: ["Spanish (native)", "English (professional)"].map((name) => ({ name })),
  },
};

export type ProjectMeta = {
  stack: Skill[];
  links: { key: "api" | "ui" | "code"; href: string }[];
  featured?: boolean;
};

const chips = (...names: string[]) => names.map((name) => ({ name }));

export const projectMeta: Record<string, ProjectMeta> = {
  kasshy: {
    featured: true,
    stack: chips("Next.js", "TypeScript", "NestJS", "PostgreSQL", "Prisma"),
    links: [],
  },
  fragments: {
    stack: chips("Node.js", "Express", "AWS", "Docker"),
    links: [
      { key: "api", href: "https://github.com/jdrcastel-dev/Microservice-fragments-Cloud-Computing" },
      { key: "ui", href: "https://github.com/jdrcastel-dev/Microservice-fragments-UI" },
    ],
  },
  incidenthub: {
    stack: chips("TypeScript", "NestJS", "PostgreSQL", "Prisma"),
    links: [],
  },
};
