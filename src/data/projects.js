import { TECH } from "./techIcons";


export const PROJECTS = [
  {
    name: 'FluxIntelAI',
    description: '**FluxIntelAI** is an AI-powered YouTube video Q&A platform that delivers source-grounded answers with direct video timestamps. Its **RAG pipeline** combines adaptive chunking, MMR retrieval, Voyage AI reranking, and **Pinecone vector search** to retrieve relevant transcript chunks for each question. Built with **React 19, Express, FastAPI, LangChain, and OpenAI**, it features Google OAuth, private per-user chat history, token-aware conversation summarization, shareable chats, and automatic recovery from failed video processing, helping users extract insights from long videos without watching them end to end.',
    image: 'images/projects/fluxintelai.webp',
    live: 'https://fluxintelai.vercel.app',
    code: 'https://github.com/vaibhavchavhan45/FluxIntelAI',
    tech: [TECH.python, TECH.langchain, TECH.pinecone, TECH.fastapi, TECH.react, TECH.node, TECH.express, TECH.google, TECH.postgres, TECH.sqlalchemy, TECH.jwt,],
  },
  {
    name: 'BlogNest',
    description:
      '**BlogNest** is a serverless blogging REST API that enables authors to register, publish, and manage posts while readers browse paginated feeds and access individual articles. It enforces secure access through bcrypt password hashing, duplicate-account prevention, JWT authentication, and Zod validation, with **ownership checks** ensuring authors can modify only their own posts. Built with **Hono, TypeScript, Prisma Accelerate, PostgreSQL, and Cloudflare Workers**, it combines type-safe data access with **edge deployment** to provide a scalable lightweight backend for frontend applications.',
    image: 'images/projects/blognest.webp',
    live: 'https://blog-app-backend.vaibhavchavhan45.workers.dev/',
    code: 'https://github.com/vaibhavchavhan45/blog-app-hono-cf-workers',
    tech: [TECH.typescript, TECH.hono, TECH.prisma, TECH.postgres, TECH.cloudflare],
  },
  {
    name: 'Payment App Backend',
    description:
      '**PayFlow** is a digital payments REST API that lets users manage accounts and transfer funds between one another. Users can register, sign in, update or delete profiles, search for other users by name, and check balances, with an account created automatically at sign-up. Every transfer runs inside a **session-based MongoDB multi-document transaction** with atomic balance updates that commit together, and the transaction aborts and rolls back automatically on failures such as insufficient funds or a missing receiver. Built with **Node.js, Express.js, MongoDB, Mongoose**, JWT, and Zod, with Bearer-token authentication and schema-based validation guarding every request, it ensures each **payment either completes fully or leaves both accounts untouched.**',
    image: 'images/projects/payflow.webp',
    live: 'https://excalidraw.com/#json=GzuoTCB4lKjgrCWZECx7i,gpHyt2AbHAye6nboiXHqmw',
    liveLabel: 'View Architecture',
    code: 'https://github.com/vaibhavchavhan45/Demo-Payment',
    tech: [TECH.node, TECH.express, TECH.mongodb, TECH.mongoose, TECH.jwt, TECH.zod],
  },
];