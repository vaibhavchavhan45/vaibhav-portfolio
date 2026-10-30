import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { FiX } from 'react-icons/fi';


const DESKTOP = '(hover: hover) and (pointer: fine)';


export default function ZoomImage({ src, alt, className = '' }) {
  const [open, setOpen] = useState(false);

  const openImage = () => {
    if (!window.matchMedia(DESKTOP).matches) return;
    setOpen(true);
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (ev) => {
      if (ev.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        tabIndex={0}
        onDoubleClick={openImage}
        onKeyDown={(ev) => {
          if (ev.key === 'Enter') openImage();
        }}
        className={`w-full rounded outline-none transition-transform duration-300 focus-visible:ring-2 focus-visible:ring-orange-400/70 [@media(hover:hover)_and_(pointer:fine)]:cursor-zoom-in [@media(hover:hover)_and_(pointer:fine)]:hover:scale-[1.03] ${className}`}
      />

      {open &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
            onClick={() => setOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Enlarged image"
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-5 top-5 rounded-full p-2 text-white/80 transition hover:text-white"
            >
              <FiX size={28} />
            </button>
            <img src={src} alt={alt} className="h-full w-full object-contain" />
          </div>,
          document.body
        )}
    </>
  );
}