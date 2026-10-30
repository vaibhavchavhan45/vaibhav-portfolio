import { FiDownload } from 'react-icons/fi';
import { RESUME_FILENAME, RESUME_PATH } from '../../../data/config';
import SocialIcons from '../../ui/SocialIcons';
import ContactForm from './ContactForm';
import CopyEmail from './CopyEmail';


export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#05060f] px-4 pb-16 pt-24 md:pb-24"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-linear-to-b from-black/60 to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <h2 className="text-center text-4xl font-extrabold tracking-tight md:text-5xl">
          <span className="bg-linear-to-r from-white from-40% to-orange-400 bg-clip-text text-transparent">
            Contact
          </span>
        </h2>

        <div className="mt-14 grid items-start gap-12 lg:mt-16 lg:grid-cols-2 lg:gap-16">
          {/* Left: intro + direct contact */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-green-400/35 bg-green-500/10 px-3.5 py-1.5 text-sm text-green-300">
              <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_10px_#4ade80]" />
              Open to work
            </span>

            <h3 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              I build full-stack and GenAI products.{' '}
              <span className="text-orange-400">Let&apos;s work together.</span>
            </h3>

            <p className="mt-4 text-base leading-8 text-white/70 md:text-lg">
              I&apos;m open to Software Engineer, Full-Stack, and GenAI Engineer
              roles. Feel free to reach out.
            </p>

            <CopyEmail />

            <SocialIcons
              exclude={['LeetCode', 'GeeksforGeeks']}
              size={30}
              className="mt-8 justify-start gap-7"
            />
            <a
              href={RESUME_PATH}
              download={RESUME_FILENAME}
              className="mt-12 inline-flex h-11 items-center gap-2 rounded-md border border-white/40 px-5 text-sm font-medium text-white"
            >
              <FiDownload /> Download Resume
            </a>
          </div>

          {/* Right: form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}