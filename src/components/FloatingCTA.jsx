import { useEffect, useState } from 'react';
import { CONFIG } from '../config.js';
import { useT } from '../i18n/LanguageContext.jsx';
import { WhatsAppIcon, TelegramIcon } from './Icons.jsx';

export default function FloatingCTA() {
  const t = useT();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-5 z-30 flex items-center gap-3 transition-all duration-300 ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'
      }`}
    >
      <a
        href={CONFIG.contacts.telegram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Telegram"
        className="inline-flex h-12 w-12 sm:h-13 sm:w-13 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-blue-600 text-white shadow-xl ring-4 ring-sky-500/20 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:ring-sky-400/30 active:scale-95"
      >
        <TelegramIcon className="h-6 w-6" />
      </a>

      <a
        href={CONFIG.contacts.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.nav.bookTrial}
        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 text-white font-semibold shadow-xl ring-4 ring-emerald-500/20 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:ring-emerald-400/30 active:scale-95 px-4 py-3 sm:px-5 sm:py-3.5"
      >
        <span className="relative inline-flex">
          <WhatsAppIcon className="h-5 w-5 sm:h-6 sm:w-6" />
          <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-emerald-300 animate-ping" />
          <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </span>
        <span className="text-sm sm:text-base whitespace-nowrap">{t.nav.book}</span>
      </a>
    </div>
  );
}
