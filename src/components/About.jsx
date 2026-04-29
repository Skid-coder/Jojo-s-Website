import SectionReveal from './SectionReveal.jsx';
import { CONFIG } from '../config.js';
import { useT } from '../i18n/LanguageContext.jsx';
import { CheckIcon } from './Icons.jsx';
import Photo from './Photo.jsx';

export default function About() {
  const t = useT();
  return (
    <section id="about" className="section bg-gradient-to-b from-white to-slate-50">
      <div className="container-page grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <SectionReveal className="lg:col-span-5">
          <div className="relative mx-auto max-w-sm">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-brand-200/50 to-blue-200/40 blur-2xl" />
            <Photo
              src={CONFIG.teacher.aboutImage}
              alt={t.about.imgAlt}
              placeholder={t.about.imgPlaceholder}
              className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-100 to-blue-100 ring-1 ring-white shadow-soft"
            />
          </div>
        </SectionReveal>

        <SectionReveal className="lg:col-span-7" delay={0.1}>
          <span className="eyebrow">{t.about.eyebrow}</span>
          <h2 className="section-title mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900">
            {t.about.title}
          </h2>
          <p className="mt-5 text-slate-600 text-lg leading-relaxed">
            {t.about.p1a} <strong className="text-slate-900">{t.about.p1b}</strong>
            {t.about.p1c}
          </p>
          <p className="mt-4 text-slate-600 text-lg leading-relaxed">
            {t.about.p2a} <strong className="text-slate-900">{t.about.p2b}</strong>
            {t.about.p2c}
          </p>
          <p className="mt-4 text-slate-600 text-lg leading-relaxed">
            {t.about.p3}
          </p>

          <ul className="mt-7 grid sm:grid-cols-2 gap-3">
            {t.about.highlights.map((h) => (
              <li key={h} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600">
                  <CheckIcon className="h-4 w-4" />
                </span>
                <span className="text-slate-700 leading-snug">{h}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <a href="#contact" className="btn-primary">
              {t.about.cta}
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
