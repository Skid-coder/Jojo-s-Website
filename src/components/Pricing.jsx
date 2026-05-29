import SectionReveal from './SectionReveal.jsx';
import { CONFIG } from '../config.js';
import { useT } from '../i18n/LanguageContext.jsx';
import { useCurrency } from '../CurrencyContext.jsx';
import { CheckIcon, SparkleIcon } from './Icons.jsx';
import CurrencyToggle from './CurrencyToggle.jsx';

const PRICES = [
  CONFIG.pricing.trial,
  CONFIG.pricing.thirty,
  CONFIG.pricing.fortyFive,
  CONFIG.pricing.sixty,
];

export default function Pricing() {
  const t = useT();
  const { format, code } = useCurrency();
  return (
    <section id="pricing" className="section bg-white">
      <div className="container-page">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <SectionReveal className="max-w-2xl">
            <span className="eyebrow">{t.pricing.eyebrow}</span>
            <h2 className="section-title mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900">
              {t.pricing.title}
            </h2>
            <p className="mt-4 text-slate-600 text-lg">{t.pricing.sub}</p>
          </SectionReveal>

          <SectionReveal delay={0.05} className="shrink-0">
            <CurrencyToggle />
          </SectionReveal>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.pricing.plans.map((plan, i) => (
            <SectionReveal key={plan.name} delay={i * 0.07}>
              <PlanCard
                plan={plan}
                price={format(PRICES[i])}
                perLesson={t.pricing.perLesson}
                popularLabel={t.pricing.popular}
                featured={i === 2}
              />
            </SectionReveal>
          ))}
        </div>

        <p className="mt-4 text-center text-xs text-slate-400">
          {code !== 'RUB' && (t.pricing.fxNote || 'Approximate conversion. Lessons are charged in ₽.')}
        </p>
        <p className="mt-2 text-center text-sm text-slate-500">{t.pricing.note}</p>
      </div>
    </section>
  );
}

function PlanCard({ plan, price, perLesson, popularLabel, featured }) {
  return (
    <div
      className={`group relative h-full rounded-2xl p-6 sm:p-7 transition-all duration-300 ease-out flex flex-col ${
        featured
          ? 'bg-gradient-to-br from-brand-600 via-brand-600 to-brand-800 text-white shadow-glow ring-1 ring-brand-400/50 scale-[1.02]'
          : 'bg-white ring-1 ring-slate-200/60 shadow-card hover:-translate-y-1.5 hover:shadow-card-hover hover:ring-brand-200/40'
      }`}
    >
      {featured && (
        <>
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-brand-900/20 to-transparent" />
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-yellow-300 to-amber-300 text-brand-900 px-4 py-1.5 text-xs font-bold shadow-lg ring-1 ring-yellow-400/30">
              <SparkleIcon className="h-3.5 w-3.5 animate-pulse-soft" />
              {popularLabel}
            </span>
          </div>
        </>
      )}

      <div className="relative">
        <h3 className={`text-xl font-bold ${featured ? 'text-white' : 'text-slate-900'}`}>
          {plan.name}
        </h3>
        <p className={`mt-1 text-sm ${featured ? 'text-brand-200' : 'text-slate-500'}`}>
          {plan.duration}
        </p>
      </div>

      <div className="relative mt-5 flex items-baseline gap-1.5">
        <span className={`text-4xl font-extrabold tracking-tight ${featured ? 'text-white' : 'text-slate-900'}`}>
          {price}
        </span>
        <span className={`text-sm ${featured ? 'text-brand-200' : 'text-slate-500'}`}>
          {perLesson}
        </span>
      </div>

      <ul className="relative mt-6 space-y-2.5 flex-1">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5">
            <span
              className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${
                featured ? 'bg-white/20 text-white' : 'bg-brand-50 text-brand-600'
              }`}
            >
              <CheckIcon className="h-3.5 w-3.5" />
            </span>
            <span className={`text-sm ${featured ? 'text-brand-100' : 'text-slate-600'}`}>{f}</span>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className={`relative mt-7 inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold transition-all duration-300 ease-out overflow-hidden ${
          featured
            ? 'bg-white text-brand-700 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:bg-brand-50 active:scale-[0.98]'
            : 'bg-gradient-to-r from-brand-600 to-brand-700 text-white shadow-btn hover:shadow-btn-hover hover:-translate-y-0.5 hover:from-brand-500 hover:to-brand-600 active:scale-[0.98]'
        }`}
      >
        {plan.cta}
      </a>
    </div>
  );
}
