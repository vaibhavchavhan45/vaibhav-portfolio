import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import ZoomImage from '../ui/ZoomImage';
import { ENTRIES } from '../../data/exp';
import { TechLogo } from '../ui/TechLogo';
import { RichText } from "../ui/RichText"


export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#05060f] px-4 pb-4 pt-24 md:pb-16"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bg/exp-bg.webp')" }}
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-linear-to-b from-black/60 to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <h2 className="text-center text-4xl font-extrabold tracking-tight md:text-5xl">
          <span className="bg-linear-to-r from-white from-40% to-orange-400 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>

        <div className="mt-16 space-y-24">
          {ENTRIES.map((e) => (
            <article
              key={e.role}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <figure>
                <ZoomImage src={e.image} alt={e.imageAlt} />
                {e.note && (
                  <figcaption className="mt-3 text-center text-xs italic text-white/40">
                    {e.note}
                  </figcaption>
                )}
              </figure>

              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <h3 className="text-2xl font-bold text-white">{e.role}</h3>
                  <span className="text-sm text-white/60">{e.dates}</span>
                </div>
                <p className="mt-1 text-base text-white/70">
                  {[e.company, e.location].filter(Boolean).join(' • ')}
                </p>

                <p className="mt-5 text-base leading-7 text-white/70">
                  <RichText text={e.description} />
                </p>

                {(e.live || e.code) && (
                  <div className="mt-8 flex items-center gap-8">
                    {e.live && (
                      <a
                        href={e.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2.5 text-lg font-semibold text-blue-400"
                      >
                        <FiExternalLink size={20} />
                        <span className="underline-offset-4 group-hover:underline">Live</span>
                      </a>
                    )}
                    {e.code && (
                      <a
                        href={e.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2.5 text-lg font-semibold text-white"
                      >
                        <FaGithub size={20} />
                        <span className="underline-offset-4 group-hover:underline">Code</span>
                      </a>
                    )}
                  </div>
                )}

                <div className="mt-8 flex flex-nowrap gap-1 md:flex-wrap md:gap-x-2 md:gap-y-4">
                  {e.tech.map((t) => (
                    <TechLogo key={t.name} {...t} />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}