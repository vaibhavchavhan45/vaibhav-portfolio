import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import ZoomImage from '../ui/ZoomImage';
import { TechLogo } from '../ui/TechLogo';
import { PROJECTS } from '../../data/projects';
import { RichText } from '../ui/RichText';


export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#05060f] px-4 pb-4 pt-24 md:pb-16"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bg/project-bg.webp')" }}
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-linear-to-b from-black/60 to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <h2 className="text-center text-4xl font-extrabold tracking-tight md:text-5xl">
          <span className="text-white">Featured</span>{' '}
          <span className="text-orange-400">Projects</span>
        </h2>

        <div className="mt-16 space-y-24">
          {PROJECTS.map((p, i) => {
            const imageRight = i % 2 === 0; // 1st and 3rd: image on the right

            return (
              <article
                key={p.name}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <div className={imageRight ? 'lg:order-2' : ''}>
                  <ZoomImage src={p.image} alt={`Screenshot of ${p.name}`} />
                </div>

                <div className={imageRight ? 'lg:order-1' : ''}>
                  <h3 className="text-3xl font-bold text-white">{p.name}</h3>
                  <p className="mt-4 text-base leading-7 text-white/70">
                    <RichText text={p.description} />
                  </p>

                  <div
                    className={`mt-6 ${p.tech.length > 6
                        ? 'grid grid-cols-6 gap-x-1 gap-y-4 md:flex md:flex-wrap md:gap-x-2'
                        : 'flex flex-wrap gap-x-2 gap-y-4'
                      }`}
                  >
                    {p.tech.map((t) => (
                      <TechLogo key={t.name} {...t} />
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