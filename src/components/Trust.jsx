import SectionReveal from './SectionReveal.jsx';
import { useT } from '../i18n/LanguageContext.jsx';
import { GlobeIcon, BadgeIcon, StarIcon, TrophyIcon } from './Icons.jsx';

const ICONS = [
  <GlobeIcon className="h-7 w-7" />,
  <BadgeIcon className="h-7 w-7" />,
  <StarIcon className="h-7 w-7" />,
  <TrophyIcon className="h-7 w-7" />,
];

export default function Trust() {
  const t = useT();
  return (
    <section className="section bg-white">
      <div className="container-page">
        <SectionReveal className="max-w-2xl">
          <span className="eyebrow">{t.trust.eyebrow}</span>
          <h2 className="section-title mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900">
            {t.trust.title}
          </h2>
        </SectionReveal>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {t.trust.cards.map((it, i) => (
            <SectionReveal key={it.title} delay={i * 0.08}>
              <div className="card h-full">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-50 to-blue-50 text-brand-600">
                  {ICONS[i]}
                </div>
                <h3 className="mt-4 font-bold text-slate-900 text-lg">{it.title}</h3>
                <p className="mt-1.5 text-slate-600 text-sm leading-relaxed">{it.text}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
