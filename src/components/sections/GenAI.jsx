import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import ZoomImage from '../ui/ZoomImage';
import { RichText } from '../ui/RichText';
import { GEN_AI_PROJECTS } from '../../data/genaiProjects';


export default function GenAI() {
  return (
    <section
      id="genai"
      className="relative overflow-hidden bg-[#05060f] px-4 pb-4 pt-24 md:pb-16"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bg/genai-bg.webp')" }}
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-linear-to-b from-black/60 to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <h2 className="text-center text-4xl font-extrabold tracking-tight md:text-5xl">
          <span className="bg-linear-to-r from-white from-40% to-orange-400 bg-clip-text text-transparent">
            GenAI
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base text-white/70 md:text-lg">
          Tool-calling, agents and LLM tooling: turning models into working systems.
        </p>

        <div className="mt-16 space-y-24">
          {GEN_AI_PROJECTS.map((p, i) => {
            const imageRight = i % 2 === 1; // 1st, 3rd, 5th: image on the left

            return (
              <article
                key={p.name}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <div className={imageRight ? 'lg:order-2' : ''}>
                  <ZoomImage src={p.image} alt={`Screenshot of ${p.name}`} />
                </div>

                <div className={imageRight ? 'lg:order-1' : ''}>
                  <h3 className="text-2xl font-bold text-white md:text-3xl">{p.name}</h3>
                  <p className="mt-4 text-base leading-7 text-white/70">
                    <RichText text={p.description} />
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  {(p.live || p.code) && (
                    <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
                      {p.live && (
                        <a
                          href={p.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-2.5 text-lg font-semibold text-blue-400"
                        >
                          <FiExternalLink size={20} />
                          <span className="underline-offset-4 group-hover:underline">
                            {p.liveLabel ?? 'Live Demo'}
                          </span>
                        </a>
                      )}
                      {p.code && (
                        <a
                          href={p.code}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-2.5 text-lg font-semibold text-white"
                        >
                          <FaGithub size={20} />
                          <span className="underline-offset-4 group-hover:underline">View Code</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}