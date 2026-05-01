import { useCurrency } from '../CurrencyContext.jsx';

export default function CurrencyToggle({ className = '' }) {
  const { code, setCode, supported } = useCurrency();

  return (
    <div
      role="group"
      aria-label="Currency"
      className={`inline-flex items-center rounded-full bg-slate-100 p-1 ring-1 ring-slate-200 ${className}`}
    >
      {supported.map((c) => {
        const active = c === code;
        return (
          <button
            key={c}
            type="button"
            onClick={() => setCode(c)}
            aria-pressed={active}
            className={`px-3 py-1 rounded-full text-xs font-bold tracking-wide transition-colors ${
              active
                ? 'bg-white text-brand-700 shadow-sm'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            {c}
          </button>
        );
      })}
    </div>
  );
}
