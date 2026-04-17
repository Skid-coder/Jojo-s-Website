import SectionReveal from './SectionReveal.jsx';
import { ArrowRightIcon, SparkleIcon } from './Icons.jsx';

export default function FinalCTA() {
  return (
    <section className="section">
      <div className="container-page">
        <SectionReveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-brand-700 to-blue-700 px-6 sm:px-12 py-14 sm:py-20 text-center shadow-soft">
            <div className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />

            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-1.5 text-sm font-semibold text-white ring-1 ring-white/20">
              <SparkleIcon className="h-4 w-4" />
              Запись открыта
            </span>
            <h2 className="section-title mt-5 text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              Начните говорить по-английски
              <br className="hidden sm:block" /> уже сегодня
            </h2>
            <p className="mt-5 text-lg sm:text-xl text-brand-50/90 max-w-2xl mx-auto">
              Пробный урок всего за 500₽. Узнайте свой уровень и почувствуйте, каково
              это — учиться с удовольствием.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-brand-700 font-semibold shadow hover:-translate-y-0.5 hover:shadow-lg transition-all"
              >
                Записаться на пробный урок
                <ArrowRightIcon />
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/10 backdrop-blur px-6 py-3.5 text-white font-semibold ring-1 ring-white/25 hover:bg-white/15 transition-all"
              >
                Посмотреть цены
              </a>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
