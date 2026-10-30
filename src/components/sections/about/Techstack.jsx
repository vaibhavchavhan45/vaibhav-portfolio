import { GROUPS } from '../../../data/techStack';


function TechItem({ name, Icon, color, docs }) {
  return (
    <a
      href={docs}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${name} documentation`}
      title={`${name} docs`}
      className="flex w-24 flex-col items-center gap-1.5 rounded-lg p-1 text-center outline-none transition duration-200 hover:-translate-y-1 focus-visible:-translate-y-1 focus-visible:ring-2 focus-visible:ring-orange-400/70"
    >
      <Icon size={36} color={color} />
      <span
        className="text-[13px] font-semibold leading-tight tracking-tight"
        style={{ color }}
      >
        {name}
      </span>
    </a>
  );
}


export default function TechStack() {
  return (
    <div className="relative z-10 mx-auto mt-24 grid max-w-6xl gap-x-20 gap-y-20 md:grid-cols-2 md:gap-y-28 lg:grid-cols-3">
      {GROUPS.map(({ title, description, items }) => (
        <div key={title} className="flex flex-col items-center text-center">
          <h3 className="text-2xl font-medium tracking-tight text-white md:text-3xl">
            {title}
          </h3>

          <div className="mt-8 flex max-w-[19rem] flex-wrap justify-center gap-x-1 gap-y-6">
            {items.map((tech) => (
              <TechItem key={tech.name} {...tech} />
            ))}
          </div>

          <p className="mt-auto max-w-xs pt-8 text-[16px] leading-7 text-white/70">
            {description}
          </p>
        </div>
      ))}
    </div>
  );
}