import { useEffect, useRef, useState } from 'react';
import { PROFILE_IMG } from '../../../data/config';


export function AvatarPlaceholder() {
  return (
    <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden="true">
      <rect width="100" height="100" fill="#1e293b" />
      <circle cx="50" cy="38" r="16" fill="#64748b" />
      <path d="M16 100c0-20 15-34 34-34s34 14 34 34z" fill="#64748b" />
    </svg>
  );
}


export function ProfilePicture() {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth > 0) setLoaded(true);
  }, []);

  return (
    <div className="relative h-44 w-44 overflow-hidden rounded-full ring-1 ring-white/20 shadow-[0_0_50px_rgba(255,255,255,0.12)] md:h-[200px] md:w-[200px]">
      <AvatarPlaceholder />
      <img
        ref={imgRef}
        src={PROFILE_IMG}
        alt="Vaibhav Chavhan"
        onLoad={() => setLoaded(true)}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'
          }`}
      />
    </div>
  );
}