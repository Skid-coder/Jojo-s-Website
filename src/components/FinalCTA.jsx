import SectionReveal from './SectionReveal.jsx';
import { useT } from '../i18n/LanguageContext.jsx';
import { ArrowRightIcon, SparkleIcon } from './Icons.jsx';

export default function FinalCTA() {
  const t = useT();
  return (
    <section className="section">
      <div className="container-page">
        <SectionReveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-brand-700 to-blue-700 bg-[length:200%_200%] animate-gradient-shift px-6 sm:px-12 py-14 sm:py-20 text-center shadow-glow">
            <div className="pointer-events-none absolute -top-20 -right-20 h-80 w-80 rounded-full bg-white/10 blur-[80px]" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-80 w-80 rounded-full bg-blue-400/15 blur-[80px]" />
            <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-brand-400/10 blur-[100px]" />

            <span className="relative inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-sm px-4 py-1.5 text-sm font-semibold text-white ring-1 ring-white/25 shadow-lg">
              <SparkleIcon className="h-4 w-4 animate-pulse-soft" />
              {t.finalCta.badge}
            </span>
            <h2 className="relative section-title mt-5 text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              {t.finalCta.titleA}
              <br className="hidden sm:block" /> {t.finalCta.titleB}
            </h2>
            <p className="relative mt-5 text-lg sm:text-xl text-brand-100/90 max-w-2xl mx-auto">
              {t.finalCta.sub}
            </p>
            <div className="relative mt-8 flex flex-wrap gap-3 justify-center">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-7 py-3.5 text-brand-700 font-semibold shadow-lg hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300 active:scale-[0.98]"
              >
                {t.finalCta.primary}
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/10 backdrop-blur-sm px-7 py-3.5 text-white font-semibold ring-1 ring-white/25 hover:bg-white/20 hover:ring-white/40 transition-all duration-300"
              >
                {t.finalCta.secondary}
              </a>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
