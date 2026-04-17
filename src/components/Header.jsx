import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CONFIG } from '../config.js';
import { useT } from '../i18n/LanguageContext.jsx';
import LanguageToggle from './LanguageToggle.jsx';
import { ArrowRightIcon } from './Icons.jsx';

export default function Header() {
  const t = useT();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  const links = [
    { href: '#about', label: t.nav.about },
    { href: '#results', label: t.nav.results },
    { href: '#pricing', label: t.nav.pricing },
    { href: '#reviews', label: t.nav.reviews },
    { href: '#faq', label: t.nav.faq },
    { href: '#contact', label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    const onClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-100'
          : 'bg-transparent'
      }`}
    >
      <div className="container-page flex h-16 sm:h-[72px] items-center justify-between gap-3">
        <a
          href="#top"
          aria-label="Learn English with Joan"
          className="flex items-center gap-2.5 font-display tracking-tight"
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white font-extrabold shadow-soft">
            J
          </span>
          <span className="leading-tight">
            <span className="hidden sm:block text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
              Learn English with
            </span>
            <span className="block text-lg sm:text-xl font-extrabold text-slate-900">
              {CONFIG.teacher.firstName}
              <span className="text-brand-600">.</span>
            </span>
          </span>
        </a>

        <div ref={menuRef} className="relative flex items-center gap-2 sm:gap-3">
          <a
            href="#contact"
            className="btn-primary !px-5 !py-2.5 text-sm hidden sm:inline-flex"
          >
            {t.nav.book}
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t.nav.close : t.nav.menu}
            aria-expanded={open}
            aria-haspopup="menu"
            className="relative inline-flex h-11 w-14 items-center justify-center rounded-full bg-orange-500 text-white shadow-lg ring-1 ring-orange-600/20 transition-all hover:bg-orange-600 hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-300"
          >
            <span className="sr-only">{t.nav.menu}</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="h-5 w-5"
              aria-hidden="true"
            >
              {open ? (
                <>
                  <path d="M6 6l12 12" />
                  <path d="M18 6L6 18" />
                </>
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>

          <AnimatePresence>
            {open && (
              <motion.div
                role="menu"
                initial={{ opacity: 0, y: -8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.98 }}
                transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                className="absolute right-0 top-[calc(100%+12px)] w-[min(88vw,340px)] rounded-2xl bg-white shadow-xl ring-1 ring-slate-100 p-3"
              >
                <ul className="flex flex-col">
                  {links.map((l) => (
                    <li key={l.href}>
                      <a
                        href={l.href}
                        onClick={() => setOpen(false)}
                        className="flex items-center justify-between gap-3 rounded-xl px-3 py-3 font-semibold text-slate-700 transition-colors hover:bg-brand-50 hover:text-brand-700"
                      >
                        <span>{l.label}</span>
                        <ArrowRightIcon className="h-4 w-4 text-brand-500 opacity-60" />
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="mt-2 flex items-center justify-between gap-3 border-t border-slate-100 pt-3">
                  <LanguageToggle />
                  <a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="btn-primary !px-4 !py-2.5 text-sm"
                  >
                    {t.nav.book}
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
