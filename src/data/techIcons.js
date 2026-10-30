import { FaAws, FaDatabase, FaJava } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';
import { FcGoogle } from 'react-icons/fc';
import { ChromaLogo, FaissLogo, GroqLogo, PineconeLogo } from '../components/ui/CustomLogos';
import {
  SiCloudflare, SiCplusplus, SiBrevo, SiJsonwebtokens, SiZod, SiCss, SiDocker,
  SiExpress, SiFastapi, SiGit, SiGithub, SiHono, SiHtml5, SiJavascript, SiLangchain,
  SiLanggraph, SiMongodb, SiMongoose, SiNodedotjs, SiPostgresql, SiPrisma, SiPython,
  SiReact, SiRecoil, SiSqlalchemy, SiTailwindcss, SiTypescript, SiVite
} from 'react-icons/si';


// Each entry: name, Icon, color, docs (official docs links)
export const TECH = {
  // Languages
  python: { name: 'Python', Icon: SiPython, color: '#4B8BBE', docs: 'https://docs.python.org/3/' },
  java: { name: 'Java', Icon: FaJava, color: '#EA2D2E', docs: 'https://docs.oracle.com/en/java/' },
  javascript: { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E', docs: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  typescript: { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6', docs: 'https://www.typescriptlang.org/docs/' },
  cpp: { name: 'C++', Icon: SiCplusplus, color: '#659AD2', docs: 'https://en.cppreference.com/w/' },

  // Frontend
  react: { name: 'React', Icon: SiReact, color: '#61DAFB', docs: 'https://react.dev/learn' },
  vite: { name: 'Vite', Icon: SiVite, color: '#8E7CFF', docs: 'https://vite.dev/guide/' },
  recoil: { name: 'Recoil', Icon: SiRecoil, color: '#3578E5', docs: 'https://recoiljs.org/docs/introduction/getting-started' },
  html: { name: 'HTML', Icon: SiHtml5, color: '#E34F26', docs: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  css: { name: 'CSS', Icon: SiCss, color: '#2965F1', docs: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  tailwind: { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06B6D4', docs: 'https://tailwindcss.com/docs' },

  // Backend
  node: { name: 'Node.js', Icon: SiNodedotjs, color: '#5FA04E', docs: 'https://nodejs.org/docs/latest/api/' },
  express: { name: 'Express.js', Icon: SiExpress, color: '#FFFFFF', docs: 'https://expressjs.com/' },
  fastapi: { name: 'FastAPI', Icon: SiFastapi, color: '#009688', docs: 'https://fastapi.tiangolo.com/' },
  hono: { name: 'Hono', Icon: SiHono, color: '#E36002', docs: 'https://hono.dev/docs' },

  // GenAI
  langchain: { name: 'LangChain', Icon: SiLangchain, color: '#9FE0C8', docs: 'https://docs.langchain.com/' },
  langgraph: { name: 'LangGraph', Icon: SiLanggraph, color: '#9FE0C8', docs: 'https://langchain-ai.github.io/langgraph/' },
  pinecone: { name: 'Pinecone', Icon: PineconeLogo, color: '#FFFFFF', docs: 'https://docs.pinecone.io/' },
  faiss: { name: 'FAISS', Icon: FaissLogo, color: '#0668E1', docs: 'https://faiss.ai/' },
  chromadb: { name: 'ChromaDB', Icon: ChromaLogo, color: '#FFDE2D', docs: 'https://docs.trychroma.com/' },
  groq: { name: 'Groq Cloud', Icon: GroqLogo, color: '#F55036', docs: 'https://console.groq.com/docs' },

  // Databases & ORM
  postgres: { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1', docs: 'https://www.postgresql.org/docs/' },
  mongodb: { name: 'MongoDB', Icon: SiMongodb, color: '#47A248', docs: 'https://www.mongodb.com/docs/' },
  mongoose: { name: 'Mongoose', Icon: SiMongoose, color: '#E04B4B', docs: 'https://mongoosejs.com/docs/' },
  prisma: { name: 'Prisma', Icon: SiPrisma, color: '#E5E7EB', docs: 'https://www.prisma.io/docs' },
  sqlalchemy: { name: 'SQLAlchemy', Icon: SiSqlalchemy, color: '#D71F00', docs: 'https://docs.sqlalchemy.org/' },
  sql: { name: 'SQL', Icon: FaDatabase, color: '#4A90E2', docs: 'https://www.postgresql.org/docs/current/sql.html' },

  // Developer Tools
  git: { name: 'Git', Icon: SiGit, color: '#F05032', docs: 'https://git-scm.com/doc' },
  github: { name: 'GitHub', Icon: SiGithub, color: '#FFFFFF', docs: 'https://docs.github.com/' },
  docker: { name: 'Docker', Icon: SiDocker, color: '#2496ED', docs: 'https://docs.docker.com/' },
  aws: { name: 'AWS', Icon: FaAws, color: '#FF9900', docs: 'https://docs.aws.amazon.com/' },
  cloudflare: { name: 'Cloudflare', Icon: SiCloudflare, color: '#F38020', docs: 'https://developers.cloudflare.com/' },
  vscode: { name: 'VS Code', Icon: VscVscode, color: '#23A9F2', docs: 'https://code.visualstudio.com/docs' },

  // Experience
  jwt: { name: 'JWT', Icon: SiJsonwebtokens, color: '#FFFFFF', docs: 'https://jwt.io/introduction' },
  google: { name: 'Google OAuth', Icon: FcGoogle, color: '#FFFFFF', docs: 'https://developers.google.com/identity/protocols/oauth2' },
  zod: { name: 'Zod', Icon: SiZod, color: '#408AFF', docs: 'https://zod.dev/' },
  brevo: { name: 'Brevo API', Icon: SiBrevo, color: '#0B996E', docs: 'https://developers.brevo.com/' },
};