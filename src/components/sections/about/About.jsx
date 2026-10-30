import TechStack from "./Techstack";


const B = ({ children }) => (
    <strong className="font-semibold text-white">{children}</strong>
);

export default function About() {
    return (
        <section
            id="about"
            className="relative overflow-hidden bg-[#05060f] px-4 pb-4 pt-24 md:pb-16"
        >
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/bg/about-bg.webp')" }}
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-linear-to-b from-black/60 to-transparent" />

            <div className="relative z-10 mx-auto max-w-2xl">
                <h2 className="text-center text-4xl font-extrabold tracking-tight md:text-5xl">
                    <span className="text-white">My</span>{' '}
                    <span className="text-orange-400">Story</span>
                </h2>

                <div className="mt-8 md:mt-12 space-y-6 text-[15px] leading-[2.1] tracking-wide text-white/75 [word-spacing:0.08em] md:text-base">
                    <p className="font-bold text-white">
                        I'm a Software Developer and AI Engineer with a background in
                        Electronics & Telecommunication Engineering, who transitioned into
                        Computer Science by building and shipping projects and solving
                        real-world problems.
                    </p>

                    <p>
                        I'm particularly focused on <B>Generative AI</B> and{' '}
                        <B>Full-Stack Development</B>. In Generative AI, I build{' '}
                        <B>RAG pipelines</B> with LangChain and FastAPI and develop{' '}
                        <B>AI agents</B>. On the full-stack side, I ship products with
                        React, Node.js, and PostgreSQL.
                    </p>

                    <p>
                        I've worked remotely as a Software Developer on an{' '}
                        <B>NDA GenAI application</B> and as a{' '}
                        <B>Freelance Full-Stack Developer</B>, where I built and deployed a{' '}
                        <B>live seat-booking platform</B>.
                    </p>

                    <p>
                        AI (RAG) and backend architecture are the areas where I do my
                        deepest work. <B>FluxIntelAI</B> is a live RAG app with retrieval,
                        re-ranking, and streaming that turns any YouTube video into a
                        searchable Q&A with timestamped answers. My{' '}
                        <B>serverless Blog Backend</B> runs on Cloudflare Workers with
                        Hono, Prisma Accelerate, JWT authentication, and ownership checks.
                    </p>

                    <p>
                        I've solved <B>170+ DSA problems</B> on LeetCode and GeeksforGeeks,
                        strengthening my problem-solving ability and helping me write
                        efficient, optimised, and scalable code.
                    </p>

                    <p>
                        I'm looking to join a team as a Software Engineer, Full-Stack
                        Developer, or Generative AI Engineer, building{' '}
                        <B>production-grade AI applications</B> that solve real problems at
                        scale.
                    </p>
                </div>
            </div>
            <TechStack />
        </section>
    );
}