import { TECH } from "./techIcons";


export const ENTRIES = [
  {
    role: 'GenAI Developer',
    company: 'Confidential Client',
    location: '',
    dates: 'Aug 2025 – Sep 2026',
    description: 'Contributed to a production-ready **RAG assistant** that lets employees ask questions about internal technical docs, deployment processes and company policies, and get accurate, source-grounded answers. **Developed RAG pipeline** using **LangChain, Pinecone and FastAPI**, within a platform featuring streaming responses, token-aware memory, secure authentication and admin-managed employee access.',
    image: 'images/exp/nda.webp',
    imageAlt: 'Illustrative preview of a document Q&A application on a laptop',
    note: 'Approximate, AI-generated preview. Actual screens are confidential under NDA.',
    live: '',
    code: '',
    tech: [TECH.langchain, TECH.pinecone, TECH.fastapi, TECH.postgres, TECH.react, TECH.node],
  },
  {
    role: 'Freelance Full-Stack Developer',
    company: 'Disha Library',
    location: 'Arni, MH',
    dates: 'July 2024 – June 2025',
    description:
      'Developed a full-stack **seat-management platform** for a study library, replacing manual register-based bookings. Students book seats through OTP-verified requests, protected by rate-limited resends and IP-based blocking. **JWT and OTP-secured admin dashboard** supports seat assignment, replacement and removal, fee and expiry tracking, waiting lists, inquiries and ex-student records. Built with **React 19, Express, PostgreSQL** and Zod, with Brevo email alerts, it minimizes manual administrative work, booking conflicts and student-record management errors.',
    image: 'images/exp/freelance.webp',
    imageAlt: 'Illustrative preview of a library seat-booking dashboard on a laptop',
    note: '',
    live: 'https://disha-study-library.vercel.app/',
    code: 'https://github.com/vaibhavchavhan45/disha-study-library',
    tech: [TECH.react, TECH.express, TECH.postgres, TECH.jwt, TECH.zod, TECH.brevo],
  },
];