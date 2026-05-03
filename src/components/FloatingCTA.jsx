import { useEffect, useState } from 'react';
import { CONFIG } from '../config.js';
import { WhatsAppIcon } from './Icons.jsx';

export default function FloatingCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href={CONFIG.contacts.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={`lg:hidden fixed bottom-5 right-5 z-30 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-green-600 text-white shadow-xl ring-4 ring-emerald-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <WhatsAppIcon className="h-7 w-7" />
      <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-emerald-300 animate-ping" />
      <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-emerald-400" />
    </a>
  );
}
