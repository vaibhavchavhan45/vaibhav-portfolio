import { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { NAV_LINKS } from '../../data/config';


export default function Navbar() {
  const [active, setActive] = useState('#home');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    NAV_LINKS.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const linkClass = (href) =>
    `block rounded-full px-4 py-1.5 text-sm font-medium transition ${active === href
      ? 'bg-white/10 text-white'
      : 'text-white/70 hover:bg-white/5 hover:text-white'
    }`;

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className="mx-auto flex max-w-5xl items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl backdrop-saturate-150">
        <a href="#home" className="text-lg font-semibold tracking-tight">
          {'</ '}vaibhav.<span className="text-orange-400">dev</span>{'>'}
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className={linkClass(href)}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </nav>

      {open && (
        <ul className="mx-auto mt-2 flex max-w-5xl flex-col gap-1 rounded-3xl border border-white/10 bg-white/5 p-3 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl backdrop-saturate-150 md:hidden">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a href={href} onClick={() => setOpen(false)} className={linkClass(href)}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}