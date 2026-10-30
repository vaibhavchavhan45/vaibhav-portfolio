import { useState } from 'react';
import { FiCheck, FiCopy } from 'react-icons/fi';
import { EMAIL, SOCIAL_LINKS } from '../../../data/config';

export default function CopyEmail() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard blocked: the email is still a visible, selectable link.
    }
  };

  return (
    <div className="mt-9">
      <p className="text-xs font-medium uppercase tracking-[0.12em] text-white/45">
        Email me at
      </p>
      <div className="mt-2 flex items-center justify-between gap-4 border-b border-white/20 pb-3">
        <a
          href={SOCIAL_LINKS.email}
          className="min-w-0 text-[15px] font-semibold text-white min-[420px]:text-lg sm:text-xl"
        >
          {EMAIL}
        </a>
        <button
          type="button"
          onClick={copy}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-white/30 px-3 py-1.5 text-xs font-medium text-white cursor-pointer"
        >
          {copied ? <FiCheck /> : <FiCopy />}
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
    </div>
  );
}