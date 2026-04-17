import SectionReveal from './SectionReveal.jsx';
import { CONFIG } from '../config.js';
import { CheckIcon, SparkleIcon } from './Icons.jsx';

const plans = [
  {
    id: 'trial',
    name: 'Пробный урок',
    duration: '30 минут · онлайн',
    price: CONFIG.pricing.trial,
    features: [
      'Знакомство и определение уровня',
      'План индивидуальных занятий',
      'Без обязательств продолжать',
    ],
    cta: 'Записаться на пробный',
    tone: 'ghost',
  },
  {
    id: 'm30',
    name: '30 минут',
    duration: 'Короткий урок',
    price: CONFIG.pricing.thirty,
    features: ['Идеально для детей', 'Интенсивная практика речи', 'Домашнее задание'],
    cta: 'Выбрать',
    tone: 'ghost',
  },
  {
    id: 'm45',
    name: '45 минут',
    duration: 'Популярный',
    price: CONFIG.pricing.fortyFive,
    features: [
      'Оптимальный формат',
      'Грамматика + разговор',
      'Домашка с разбором',
      'Персональные материалы',
    ],
    cta: 'Выбрать',
    tone: 'primary',
    featured: true,
  },
  {
    id: 'm60',
    name: '60 минут',
    duration: 'Полный урок',
    price: CONFIG.pricing.sixty,
    features: [
      'Максимум погружения',
      'Работа по вашей цели',
      'Подготовка к экзамену / интервью',
    ],
    cta: 'Выбрать',
    tone: 'ghost',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section bg-white">
      <div className="container-page">
        <SectionReveal className="max-w-2xl">
          <span className="eyebrow">Цены</span>
          <h2 className="section-title mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900">
            Честные цены, без скрытых платежей
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
            Первый урок — всего 500₽. Узнайте свой уровень и решите, подходит ли вам формат,
            без обязательств.
          </p>
        </SectionReveal>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {plans.map((p, i) => (
            <SectionReveal key={p.id} delay={i * 0.07}>
              <PlanCard plan={p} />
            </SectionReveal>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">
          Все уроки — индивидуально, онлайн. Оплата удобным способом.
        </p>
      </div>
    </section>
  );
}

function PlanCard({ plan }) {
  const featured = plan.featured;
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
            Самый популярный
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
          {plan.price}₽
        </span>
        <span className={`text-sm ${featured ? 'text-brand-100' : 'text-slate-500'}`}>
          / урок
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
