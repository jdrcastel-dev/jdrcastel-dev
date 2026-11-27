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
      { value: "228 cases", label: "Closed at OpenText in six months" },
      { value: "Kasshy", label: "Personal finance app for newcomers in Canada" },
      { value: "Seneca", label: "President's Honour List, 2023" },
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
    lead: "Web apps and APIs I've built across the stack.",
    stackLabel: "Tech stack",
    diagram: {
      alt: "Fragments architecture: the web UI calls the Express API, which runs in Docker on Amazon ECS, checks Cognito tokens (JWT), stores fragment data in S3 and metadata in DynamoDB.",
      ui: "Web UI",
      api: "Express API",
    },
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
    ],
  },
  skills: {
    eyebrow: "Skills",
    title: "What I work with",
    groups: {
      frontend: "Front end",
      backend: "Back end & data",
      cloud: "Cloud & testing",
      languages: "Languages",
    },
  },
  experience: {
    eyebrow: "Experience",
    title: "Experience & education",
    lead: "Support work taught me how enterprise systems fail. Development work is where I build things that hold up.",
    more: "More details",
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
    footer: "Built with Astro, React and shadcn/ui",
  },
};

export default en;
export type Content = typeof en;
