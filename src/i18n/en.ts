// All site text (the site is English only). It follows Juan's resume (public/Resume_Juan_Castelblanco.pdf).

export type ExperienceKind = "work" | "certification" | "internship" | "volunteer" | "education";

const en = {
  meta: {
    title: "Juan Castelblanco · Software Developer",
    description:
      "Juan David Rodriguez Castelblanco: software developer focused on React, TypeScript and Node.js, with a background in production support at OpenText.",
  },
  nav: {
    about: "About",
    projects: "Projects",
    skills: "Skills",
    experience: "Experience",
    contact: "Contact",
    resume: "Resume",
    menu: "Open menu",
    theme: "Toggle dark mode",
    mainLabel: "Main",
    mobileLabel: "Mobile menu",
    skip: "Skip to content",
  },
  hero: {
    status: "Open to Software Developer roles",
    hello: "Hi, I'm Juan.",
    role: "Software developer",
    ctaProjects: "See projects",
    techLabel: "Technologies I work with",
    pauseMotion: "Pause animations",
    stats: [
      { value: "AWS", label: "Certified Cloud Practitioner" },
      { value: "OpenText", label: "Debugging enterprise SaaS in production" },
      { value: "Kasshy", label: "Building a gamified personal-finance app" },
      { value: "GenAI · MCP", label: "Learning LLM APIs, agentic workflows and MCP" },
    ],
  },
  about: {
    eyebrow: "About",
    title: "A bit about me",
    paragraphs: [
      "I'm a software developer focused on React, TypeScript and Node.js, with a background in production support. I'm looking for a role where I can build useful web applications across the stack, contribute to a team and grow as an engineer.",
      "I started coding at 17, studied Computer Programming and Analysis at Seneca, and built prototypes during my internship at the Government of Ontario. Today I resolve production incidents for enterprise customers at OpenText, so I know how real systems fail and how to fix them.",
      "Outside of tech, you'll find me playing soccer, at the gym, playing drums or gaming with friends.",
    ],
  },
  projects: {
    eyebrow: "Projects",
    title: "Selected work",
    lead: "Web apps, APIs and tools I've built across the stack, and how each one works.",
    filters: { all: "All", web: "Web", backend: "Backend", aws: "AWS", extensions: "Extensions" },
    stackLabel: "Tech stack",
    whatTitle: "What it does",
    howTitle: "How it works",
    links: { api: "API code", ui: "UI code", code: "Code" },
    items: [
      {
        id: "kasshy",
        title: "Kasshy",
        summary: "A personal finance app for newcomers and young people in Canada.",
        bullets: [
          "Users can import bank transactions, sort spending by category and see how much is left in their monthly budget.",
          "Built the web interface with Next.js and connected it to a NestJS API that uses PostgreSQL to store transactions and budgets.",
        ],
      },
      {
        id: "fragments",
        title: "Fragments",
        summary: "A web interface and API for storing and converting text and images.",
        bullets: [
          "Users sign in with Amazon Cognito and can retrieve a saved fragment in another format, such as Markdown to HTML.",
          "Automated unit and integration tests with GitHub Actions and configured tagged releases to deploy to Amazon ECS.",
        ],
      },
      {
        id: "incidenthub",
        title: "IncidentHub",
        summary: "A ticket API that flags missed response deadlines.",
        bullets: [
          "An AI-assisted triage step summarizes each new ticket and suggests a priority for a support agent to review.",
        ],
      },
      {
        id: "timer",
        title: "Timer SaaS Team",
        summary: "A browser extension I built for the OpenText SaaS support team.",
        bullets: [
          "After an agent saves a 15-minute break or 1-hour lunch, it counts down and sets the agent back to Available automatically.",
          "Countdown, downloadable JSON logs, and timer recovery after a page refresh or browser restart.",
        ],
      },
    ],
    // "How it works" diagrams (light pulses travel along each connection)
    diagrams: {
      kasshy: {
        alt: "Kasshy architecture: bank transactions are imported in the Next.js web app, which calls a NestJS API that stores transactions and budgets in PostgreSQL.",
        nodes: { bank: "Bank transactions", web: "Web app", api: "API", db: "PostgreSQL" },
        captions: { web: "Next.js", api: "NestJS", db: "Budgets" },
      },
      fragments: {
        alt: "Fragments architecture: the web UI calls the Express API, which runs in Docker on Amazon ECS, checks Cognito tokens (JWT), stores fragment data in S3 and metadata in DynamoDB.",
        nodes: { ui: "Web UI", api: "Express API", auth: "Cognito", data: "S3", meta: "DynamoDB" },
        captions: { api: "Docker · ECS" },
      },
      incidenthub: {
        alt: "IncidentHub architecture: a new ticket reaches the NestJS API, which stores it in PostgreSQL and sends it to an LLM that summarizes it and suggests a priority for a support agent to review.",
        nodes: { ticket: "New ticket", api: "API", db: "PostgreSQL", llm: "AI triage", agent: "Agent review" },
        captions: { api: "NestJS", db: "Tickets", llm: "Suggests priority" },
      },
    },
  },
  skills: {
    eyebrow: "Skills",
    title: "What I use, and what I'm learning",
    lead: "The skills on my resume, plus what I'm learning now. Learning is kept separate on purpose: these are in progress.",
    tabSkills: "Skills",
    tabLearning: "Learning now",
    spokenLabel: "Languages",
    spoken: "Spanish (native) · English (professional)",
    groups: {
      frontend: "Front end",
      backend: "Back end & data",
      cloud: "Cloud & testing",
      tools: "Tools & AI",
    },
    applyingLabel: "Applying it in",
    learning: {
      agentic: {
        title: "Agentic AI for coding",
        summary: "Working with AI coding agents that read, plan, edit and test code, while I review every change.",
        applying: "Kasshy: I plan the work and build with agents, reviewing each diff.",
      },
      integrations: {
        title: "Generative AI & MCP",
        summary: "Bringing LLMs into real apps: prompt engineering, structured output, tool calling and MCP, while keeping keys and costs under control.",
        applying: "IncidentHub: AI triage that summarizes each ticket and suggests its priority.",
      },
      java: {
        title: "Java & Spring Boot",
        summary: "Going from college Java to REST APIs with a database and tests.",
        applying: "",
      },
    },
  },
  experience: {
    eyebrow: "Experience",
    title: "Experience & education",
    lead: "Support work taught me how enterprise systems fail. Development work is where I build things that hold up.",
    more: "More details",
    highlightsLabel: "Highlights",
    highlights: [
      { value: "228 cases", label: "Closed at OpenText in six months" },
      { value: "Very Good", label: "Work-term rating, Government of Ontario" },
      { value: "Correo Canadiense", label: "Featured for my volunteer work" },
      { value: "Honour List", label: "Seneca, Summer and Fall 2023" },
    ],
    kinds: { work: "Work", certification: "Certification", internship: "Internship", volunteer: "Volunteer", education: "Education" },
    items: [
      {
        kind: "work" as ExperienceKind,
        when: "Sep 2025 — Present · Waterloo, ON",
        role: "Technical Support Specialist",
        org: "OpenText",
        bullets: [
          "Resolve production incidents for global enterprise customers using LoadRunner and ALM. Troubleshoot SSO, OAuth and integration failures to help restore access to business-critical testing platforms.",
          "Closed 228 enterprise support cases over six months, from December 2025 through May 2026.",
          "Work with Operations, Engineering and R&D on escalated cases, providing reproduction steps and diagnostic evidence. Keep customers informed through troubleshooting, fixes and validation.",
          "Built Timer SaaS Team, a browser extension that returns agents to Available after breaks, with a countdown, logs and timer recovery.",
        ],
      },
      {
        kind: "internship" as ExperienceKind,
        when: "Sep 2022 — Apr 2023 · Toronto, ON",
        role: "Application Developer",
        org: "Government of Ontario",
        bullets: [
          "Contributed to prototypes in the Rapid Prototype Design Unit. Worked with designers and developers to add features and fix interface bugs on an internal React page.",
          "Earned a Very Good rating in my first work term. My supervisor highlighted how quickly I learned new tools and applied them to assigned prototypes.",
        ],
      },
      {
        kind: "volunteer" as ExperienceKind,
        when: "2022 — 2023 · Toronto, ON",
        role: "Technical Support Engineer",
        org: "Hispanotech",
        bullets: [
          "Organized workshops and networking events for Latin American tech professionals in Canada. Featured by Correo Canadiense for my volunteer work.",
        ],
      },
      {
        kind: "certification" as ExperienceKind,
        when: "Amazon Web Services",
        role: "AWS Certified Cloud Practitioner",
        org: "AWS",
        bullets: ["Core AWS services, global infrastructure, security and the shared responsibility model, pricing and support."],
      },
      {
        kind: "education" as ExperienceKind,
        when: "May 2021 — Apr 2024 · Toronto, ON",
        role: "Computer Programming and Analysis (Advanced Diploma)",
        org: "Seneca Polytechnic",
        bullets: ["President's Honour List, Summer and Fall 2023."],
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's build something",
    highlight: "useful.",
    lead: "I'm looking for a software developer role where I can build web applications across the stack and grow with a team. The fastest way to reach me is email.",
    email: "Email me",
    offClock: "Off the clock: soccer ⚽ · gym 🏋️ · drums 🥁 · video games 🎮",
    footer: "Built with Astro, React, shadcn/ui and Motion",
  },
};

export default en;
export type Content = typeof en;
