import { ProfilePicture } from './Profile';
import ResumeButtons from '../../ui/ResumeButtons';
import SocialIcons from '../../ui/SocialIcons';


export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center overflow-hidden bg-[#05060f] px-4 pb-4 pt-28 text-center md:min-h-dvh md:justify-start md:pb-16 md:pt-[90px]"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bg/hero-bg.webp')" }}
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-black/60 to-transparent" />

      <div className="relative z-10 flex flex-col items-center">
        <ProfilePicture />
        <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Vaibhav Chavhan
        </h1>
        <p className="mt-1 bg-linear-to-r from-amber-300 to-orange-400 bg-clip-text text-xl font-bold text-transparent md:text-3xl">
          Full-Stack Developer & GenAI Engineer
        </p>
        <p className="mt-9 max-w-2xl text-base leading-relaxed text-white/70 md:text-xl">
          Software Engineer experienced in Full-Stack Web Development and GenAI
        </p>
        <SocialIcons />
        <ResumeButtons />
      </div>
    </section>
  );
}