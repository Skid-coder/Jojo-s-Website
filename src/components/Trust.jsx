import SectionReveal from './SectionReveal.jsx';
import { useT } from '../i18n/LanguageContext.jsx';
import { UKFlagIcon, BadgeIcon, StarIcon, TrophyIcon } from './Icons.jsx';

const ICONS = [
  { node: <UKFlagIcon className="h-7 w-10 rounded" />, bare: true },
  { node: <BadgeIcon className="h-7 w-7" /> },
  { node: <StarIcon className="h-7 w-7" /> },
  { node: <TrophyIcon className="h-7 w-7" /> },
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
              <div className="card h-full group">
                <div
                  className={`grid h-12 w-12 place-items-center rounded-xl text-brand-600 transition-transform duration-300 group-hover:scale-110 ${
                    ICONS[i].bare ? 'bg-gradient-to-br from-slate-50 to-blue-50' : 'bg-gradient-to-br from-brand-50 to-blue-50 shadow-sm'
                  }`}
                >
                  {ICONS[i].node}
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
