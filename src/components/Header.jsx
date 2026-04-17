import { useEffect, useState } from 'react';
import { CONFIG } from '../config.js';
import { useT } from '../i18n/LanguageContext.jsx';
import LanguageToggle from './LanguageToggle.jsx';

export default function Header() {
  const t = useT();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#about', label: t.nav.about },
    { href: '#results', label: t.nav.results },
    { href: '#pricing', label: t.nav.pricing },
    { href: '#reviews', label: t.nav.reviews },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-100'
          : 'bg-transparent'
      }`}
    >
      <div className="container-page flex h-16 sm:h-[72px] items-center justify-between gap-3">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-extrabold tracking-tight">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-soft">
            J
          </span>
          <span className="text-slate-900">
            {CONFIG.teacher.firstName}
            <span className="text-brand-600">.</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="btn-ghost">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle className="hidden sm:inline-flex" />
          <a href="#contact" className="btn-primary !px-5 !py-2.5 text-sm hidden sm:inline-flex">
            {t.nav.book}
          </a>
          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700"
            aria-label={t.nav.menu}
            onClick={() => setOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-100 bg-white">
          <div className="container-page py-3 flex flex-col">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-slate-700 font-medium"
              >
                {l.label}
              </a>
            ))}
            <div className="flex items-center justify-between gap-3 py-3">
              <LanguageToggle />
            </div>
            <a href="#contact" onClick={() => setOpen(false)} className="btn-primary">
              {t.nav.bookTrial}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
