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

const chips = (...names: string[]) => names.map((name) => ({ name }));

// The resume's Skills section, plus the AI tools Juan uses every day
export const skillChips: Record<string, { icon: string; skills: Skill[] }> = {
  frontend: { icon: "⚛️", skills: chips("JavaScript", "TypeScript", "React", "Next.js", "Redux", "HTML", "CSS") },
  backend: { icon: "🧩", skills: chips("Node.js", "Express", "NestJS", "REST APIs", "PostgreSQL", "Prisma", "SQL Server") },
  cloud: { icon: "☁️", skills: chips("AWS (ECS, S3, DynamoDB, Cognito)", "Docker", "GitHub Actions", "Jest", "Git") },
  tools: { icon: "🛠️", skills: chips("Claude Code", "GitHub Copilot", "Linux") },
};

export const learningChips: Record<string, { icon: string; items: string[] }> = {
  agentic: { icon: "🤖", items: ["OpenAI Codex", "Agentic workflows", "Prompting for code", "Reviewing AI code"] },
  integrations: {
    icon: "🧠",
    items: ["LLM APIs (Claude, OpenAI)", "Prompt engineering", "Structured output (Zod)", "Tool calling", "MCP"],
  },
  java: { icon: "☕", items: ["Spring Boot", "Spring Data JPA", "JUnit"] },
};

export type ProjectMeta = {
  stack: Skill[];
  tags: ("web" | "backend" | "aws")[];
  links: { key: "api" | "ui" | "code"; href: string }[];
  featured?: boolean;
  group?: "extension"; // shown under "All" and the Extensions filter
};

export const projectMeta: Record<string, ProjectMeta> = {
  kasshy: {
    featured: true,
    stack: chips("Next.js", "TypeScript", "NestJS", "PostgreSQL", "Prisma"),
    tags: ["web", "backend"],
    links: [],
  },
  fragments: {
    stack: chips("Node.js", "Express", "AWS", "Docker"),
    tags: ["web", "backend", "aws"],
    links: [
      { key: "api", href: "https://github.com/jdrcastel-dev/Microservice-fragments-Cloud-Computing" },
      { key: "ui", href: "https://github.com/jdrcastel-dev/Microservice-fragments-UI" },
    ],
  },
  incidenthub: {
    stack: chips("TypeScript", "NestJS", "PostgreSQL", "Prisma"),
    tags: ["backend"],
    links: [],
  },
  timer: {
    group: "extension",
    stack: chips("JavaScript", "Manifest V3", "Service worker"),
    tags: ["web"],
    links: [],
  },
};
