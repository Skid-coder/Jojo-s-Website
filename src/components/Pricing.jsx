import SectionReveal from './SectionReveal.jsx';
import { CONFIG } from '../config.js';
import { useT } from '../i18n/LanguageContext.jsx';
import { CheckIcon, SparkleIcon } from './Icons.jsx';

const PRICES = [
  CONFIG.pricing.trial,
  CONFIG.pricing.thirty,
  CONFIG.pricing.fortyFive,
  CONFIG.pricing.sixty,
];

export default function Pricing() {
  const t = useT();
  return (
    <section id="pricing" className="section bg-white">
      <div className="container-page">
        <SectionReveal className="max-w-2xl">
          <span className="eyebrow">{t.pricing.eyebrow}</span>
          <h2 className="section-title mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900">
            {t.pricing.title}
          </h2>
          <p className="mt-4 text-slate-600 text-lg">{t.pricing.sub}</p>
        </SectionReveal>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.pricing.plans.map((plan, i) => (
            <SectionReveal key={plan.name} delay={i * 0.07}>
              <PlanCard
                plan={plan}
                price={PRICES[i]}
                perLesson={t.pricing.perLesson}
                popularLabel={t.pricing.popular}
                featured={i === 2}
              />
            </SectionReveal>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">{t.pricing.note}</p>
      </div>
    </section>
  );
}

function PlanCard({ plan, price, perLesson, popularLabel, featured }) {
  return (
    <div
      className={`relative h-full rounded-2xl p-6 sm:p-7 transition-all duration-200 flex flex-col ${
        featured
          ? 'bg-gradient-to-br from-brand-600 to-brand-700 text-white shadow-soft ring-1 ring-brand-500 scale-[1.02]'
          : 'bg-white ring-1 ring-slate-100 shadow-card hover:-translate-y-1 hover:shadow-lg'
      }`}
    >
      {featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-yellow-300 text-brand-900 px-3 py-1 text-xs font-bold shadow">
            <SparkleIcon className="h-3.5 w-3.5" />
            {popularLabel}
          </span>
        </div>
      )}

      <div>
        <h3 className={`text-xl font-bold ${featured ? 'text-white' : 'text-slate-900'}`}>
          {plan.name}
        </h3>
        <p className={`mt-1 text-sm ${featured ? 'text-brand-100' : 'text-slate-500'}`}>
          {plan.duration}
        </p>
      </div>

      <div className="mt-5 flex items-baseline gap-1.5">
        <span className={`text-4xl font-extrabold ${featured ? 'text-white' : 'text-slate-900'}`}>
          {price}₽
        </span>
        <span className={`text-sm ${featured ? 'text-brand-100' : 'text-slate-500'}`}>
          {perLesson}
        </span>
      </div>

      <ul className="mt-6 space-y-2.5 flex-1">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5">
            <span
              className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${
                featured ? 'bg-white/20 text-white' : 'bg-brand-50 text-brand-600'
              }`}
            >
              <CheckIcon className="h-3.5 w-3.5" />
            </span>
            <span className={`text-sm ${featured ? 'text-brand-50' : 'text-slate-600'}`}>{f}</span>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className={`mt-7 inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold transition-all duration-200 ${
          featured
            ? 'bg-white text-brand-700 hover:bg-brand-50'
            : 'bg-brand-600 text-white hover:bg-brand-700'
        }`}
      >
        {plan.cta}
      </a>
    </div>
  );
}
