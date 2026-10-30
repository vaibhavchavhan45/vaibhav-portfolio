import { useState } from 'react';
import { EMAIL, WEB3FORMS_KEY, WEB3FORMS_URL } from '../../../data/config';


const field =
  'w-full rounded-md border border-[#2a2a2a] bg-black/40 px-4 py-3 text-sm text-white placeholder-white/35 outline-none';


export default function ContactForm() {
  // idle | sending | success | error
  const [status, setStatus] = useState('idle');

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus('sending');
    try {
      const res = await fetch(WEB3FORMS_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New portfolio message from ${data.get('name')}`,
          from_name: 'Portfolio Contact Form',
          name: data.get('name'),
          email: data.get('email'),
          message: data.get('message'),
          botcheck: data.get('botcheck') ?? '',
        }),
      });
      const json = await res.json();
      if (json.success) {
        form.reset();
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
    setTimeout(() => setStatus('idle'), 10000);
  };

  const sending = status === 'sending';

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-lg border border-[#2a2a2a] bg-white/[0.04] p-6 sm:p-8"
    >
      {/* Honeypot */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="space-y-5">
        <div>
          <label htmlFor="c-name" className="mb-1.5 block text-sm text-white/65">
            Name
          </label>
          <input
            id="c-name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            autoComplete="name"
            className={field}
          />
        </div>

        <div>
          <label htmlFor="c-email" className="mb-1.5 block text-sm text-white/65">
            Email
          </label>
          <input
            id="c-email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            autoComplete="email"
            className={field}
          />
        </div>

        <div>
          <label htmlFor="c-message" className="mb-1.5 block text-sm text-white/65">
            Message
          </label>
          <textarea
            id="c-message"
            name="message"
            required
            rows={5}
            placeholder="Write your message"
            className={`${field} resize-none`}
          />
        </div>

        <button
          type="submit"
          disabled={sending}
          className="h-11 w-full rounded-md bg-orange-400 text-[15px] font-semibold text-black disabled:cursor-not-allowed disabled:opacity-70 cursor-pointer"
        >
          {sending ? 'Sending…' : 'Send'}
        </button>

        <p
          role="status"
          aria-live="polite"
          className={`min-h-5 text-sm ${status === 'success' ? 'text-green-300' : 'text-red-300'
            }`}
        >
          {status === 'success' &&
            "Thanks for reaching out! I've received your message and will get back to you soon."}
          {status === 'error' &&
            `Something went wrong. Please try again or email me at ${EMAIL}.`}
        </p>
      </div>
    </form>
  );
}