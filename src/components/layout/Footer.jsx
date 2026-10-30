import { FiArrowUp } from 'react-icons/fi';


export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#05060f] px-4 py-8">
      <div className="mx-auto grid max-w-6xl items-center gap-4 text-center text-sm text-white/45 md:grid-cols-3">
        <a
          href="#home"
          className="text-lg font-semibold tracking-tight text-white md:justify-self-start"
        >
          {'</ '}vaibhav.<span className="text-orange-400">dev</span>
          {'>'}
        </a>

        <p>© Vaibhav Chavhan. All rights reserved.</p>

        <a
          href="#home"
          className="inline-flex items-center justify-center gap-1.5 transition hover:text-white md:justify-self-end"
        >
          Back to top <FiArrowUp />
        </a>
      </div>
    </footer>
  );
}