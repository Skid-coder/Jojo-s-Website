import { useLang } from '../i18n/LanguageContext.jsx';

export default function LanguageToggle({ className = '' }) {
  const { lang, setLang } = useLang();
  const isRu = lang === 'ru';

  return (
    <div
      role="group"
      aria-label="Language"
      className={`relative inline-flex items-center rounded-full bg-slate-100 p-1 ring-1 ring-slate-200 ${className}`}
    >
      <span
        aria-hidden="true"
        className={`absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full bg-white shadow-sm transition-transform duration-200 ${
          isRu ? 'translate-x-0' : 'translate-x-[calc(100%+4px)]'
        }`}
      />
      <button
        type="button"
        onClick={() => setLang('ru')}
        aria-pressed={isRu}
        className={`relative z-10 w-10 py-1 text-xs font-bold tracking-wide transition-colors ${
          isRu ? 'text-brand-700' : 'text-slate-500 hover:text-slate-700'
        }`}
      >
        RU
      </button>
      <button
        type="button"
        onClick={() => setLang('en')}
        aria-pressed={!isRu}
        className={`relative z-10 w-10 py-1 text-xs font-bold tracking-wide transition-colors ${
          !isRu ? 'text-brand-700' : 'text-slate-500 hover:text-slate-700'
        }`}
      >
        EN
      </button>
    </div>
  );
}
