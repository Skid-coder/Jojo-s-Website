import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CONFIG } from '../config.js';
import { useT } from '../i18n/LanguageContext.jsx';
import LanguageToggle from './LanguageToggle.jsx';
import { ArrowRightIcon } from './Icons.jsx';

export default function Header() {
  const t = useT();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#about', label: t.nav.about },
    { href: '#results', label: t.nav.results },
    { href: '#pricing', label: t.nav.pricing },
    { href: '#reviews', label: t.nav.reviews },
    { href: '#faq', label: t.nav.faq },
    { href: '#contact', label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 120);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-100'
            : 'bg-transparent'
        }`}
      >
        <div className="container-page flex h-16 sm:h-[72px] items-center justify-between gap-4">
          <a
            href="#top"
            aria-label="Learn English with Joan"
            className="flex items-center gap-2.5 font-display tracking-tight shrink-0"
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

          {/* Desktop nav, visible only when at top of page */}
          <nav
            aria-label="Primary"
            className={`hidden lg:flex items-center gap-1 transition-all duration-300 ${
              scrolled
                ? 'opacity-0 -translate-y-1 pointer-events-none'
                : 'opacity-100 translate-y-0'
            }`}
          >
            {links.slice(0, 5).map((l) => (
              <a key={l.href} href={l.href} className="btn-ghost">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <LanguageToggle
              className={`hidden md:inline-flex transition-all duration-300 ${
                scrolled
                  ? 'opacity-0 -translate-y-1 pointer-events-none'
                  : 'opacity-100 translate-y-0'
              }`}
            />

            <a
              href="#contact"
              className="btn-primary !px-5 !py-2.5 text-sm hidden sm:inline-flex"
            >
              {t.nav.book}
            </a>

            {/* Hamburger, always on mobile; on desktop only once scrolled */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label={t.nav.menu}
              aria-expanded={open}
              className={`relative h-11 w-12 sm:w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-lg ring-1 ring-brand-700/20 transition-all hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-300 inline-flex ${
                scrolled ? 'lg:inline-flex' : 'lg:hidden'
              }`}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <MenuOverlay
            links={links}
            firstName={CONFIG.teacher.firstName}
            onClose={() => setOpen(false)}
            t={t}
          />
        )}
      </AnimatePresence>
    </>
  );
}

function MenuOverlay({ links, firstName, onClose, t }) {
  return (
    <div className="fixed inset-0 z-50" aria-modal="true" role="dialog">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
      />

      <motion.aside
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="absolute right-0 top-0 h-full w-full sm:w-[420px] md:w-[460px] bg-gradient-to-br from-brand-600 via-brand-700 to-brand-900 shadow-2xl overflow-hidden"
      >
        <div className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-brand-400/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />

        <div className="relative h-full w-full overflow-y-auto">
          <div className="flex min-h-full flex-col px-7 sm:px-9 py-6 sm:py-8">
            <div className="flex items-start justify-between gap-4">
              <div className="font-display text-white">
                <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/70">
                  Learn English with
                </div>
                <div className="mt-1 text-4xl sm:text-5xl font-extrabold tracking-tight leading-none">
                  {firstName}
                  <span className="text-brand-200">.</span>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label={t.nav.close}
                className="shrink-0 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-white/20 backdrop-blur hover:bg-white/25 transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className="h-5 w-5"
                >
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>

            <motion.nav
              aria-label="Menu"
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.05, delayChildren: 0.2 } },
              }}
              className="mt-10 flex flex-col"
            >
              {links.map((l) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={onClose}
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    show: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex items-center justify-between gap-4 border-b border-white/10 py-4 text-2xl sm:text-3xl font-extrabold tracking-tight text-white/90 hover:text-white hover:pl-1 transition-all"
                >
                  <span className="font-display">{l.label}</span>
                  <ArrowRightIcon className="h-5 w-5 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                </motion.a>
              ))}
            </motion.nav>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ delay: 0.45, duration: 0.35 }}
              className="mt-auto pt-10 flex flex-col gap-5"
            >
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">
                  Language
                </span>
                <LanguageToggle />
              </div>
              <a
                href="#contact"
                onClick={onClose}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-brand-700 shadow-lg hover:-translate-y-0.5 hover:shadow-xl transition-all"
              >
                {t.nav.bookTrial}
                <ArrowRightIcon />
              </a>
            </motion.div>
          </div>
        </div>
      </motion.aside>
    </div>
  );
}
