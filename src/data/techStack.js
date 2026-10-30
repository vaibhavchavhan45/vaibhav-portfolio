import { TECH } from "./techIcons";


export const GROUPS = [
  {
    title: 'Languages',
    description: 'Languages I use to build efficient, scalable and maintainable software.',
    items: [TECH.python, TECH.java, TECH.javascript, TECH.typescript, TECH.cpp],
  },
  {
    title: 'Frontend',
    description: 'Technologies I use to build responsive, interactive and modern interfaces.',
    items: [TECH.react, TECH.vite, TECH.recoil, TECH.html, TECH.css, TECH.tailwind],
  },
  {
    title: 'Backend',
    description: 'Frameworks I use to design APIs and build scalable backend services.',
    items: [TECH.node, TECH.express, TECH.fastapi, TECH.hono],
  },
  {
    title: 'GenAI',
    description: 'Tools I use to build RAG pipelines, AI agents and LLM-powered applications.',
    items: [TECH.langchain, TECH.langgraph, TECH.pinecone, TECH.faiss, TECH.chromadb, TECH.groq],
  },
  {
    title: 'Databases & ORM',
    description: 'Technologies I use to store, manage and query application data.',
    items: [TECH.postgres, TECH.mongodb, TECH.mongoose, TECH.prisma, TECH.sqlalchemy, TECH.sql],
  },
  {
    title: 'Developer Tools',
    description: 'Tools and platforms I rely on for development, deployment and productivity.',
    items: [TECH.git, TECH.github, TECH.docker, TECH.aws, TECH.cloudflare, TECH.vscode],
  },
];