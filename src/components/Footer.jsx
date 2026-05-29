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
        <nav className="flex flex-wrap gap-5 text-sm text-slate-500">
          <a href="#about" className="transition-colors duration-200 hover:text-brand-600">{t.footer.about}</a>
          <a href="#pricing" className="transition-colors duration-200 hover:text-brand-600">{t.footer.pricing}</a>
          <a href="#reviews" className="transition-colors duration-200 hover:text-brand-600">{t.footer.reviews}</a>
          <a href="#contact" className="transition-colors duration-200 hover:text-brand-600">{t.footer.contact}</a>
        </nav>
      </div>
    </footer>
  );
}
