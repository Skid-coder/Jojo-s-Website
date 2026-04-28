import { CONFIG } from '../config.js';
import { useT } from '../i18n/LanguageContext.jsx';

export default function Footer() {
  const t = useT();
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="container-page py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white font-bold shadow-soft">
            J
          </span>
          <div className="text-sm text-slate-500">
            <div className="font-semibold text-slate-800">{t.footer.role}</div>
            <div>
              © {new Date().getFullYear()} · {t.footer.rights}
            </div>
          </div>
        </div>
        <nav className="flex flex-wrap items-center gap-5 text-sm text-slate-500">
          <a href="#about" className="hover:text-brand-700">{t.footer.about}</a>
          <a href="#pricing" className="hover:text-brand-700">{t.footer.pricing}</a>
          <a href="#reviews" className="hover:text-brand-700">{t.footer.reviews}</a>
          <a href="#contact" className="hover:text-brand-700">{t.footer.contact}</a>
          <a
            href={CONFIG.contacts.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 via-rose-500 to-amber-400 text-white hover:-translate-y-0.5 hover:shadow-md transition-all"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
            </svg>
          </a>
        </nav>
      </div>
    </footer>
  );
}
