import SectionReveal from './SectionReveal.jsx';
import { useT } from '../i18n/LanguageContext.jsx';
import { MicIcon, ChatIcon, SparkleIcon, TrophyIcon } from './Icons.jsx';

const ICONS = [
  <ChatIcon className="h-7 w-7" />,
  <MicIcon className="h-7 w-7" />,
  <SparkleIcon className="h-7 w-7" />,
  <TrophyIcon className="h-7 w-7" />,
];

export default function Results() {
  const t = useT();
  return (
    <section id="results" className="section bg-white">
      <div className="container-page">
        <SectionReveal className="max-w-2xl">
          <span className="eyebrow">{t.results.eyebrow}</span>
          <h2 className="section-title mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900">
            {t.results.title}
          </h2>
          <p className="mt-4 text-slate-600 text-lg">{t.results.sub}</p>
        </SectionReveal>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {t.results.cards.map((r, i) => (
            <SectionReveal key={r.title} delay={i * 0.08}>
              <div className="card h-full">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-600 to-blue-500 text-white shadow-soft">
                  {ICONS[i]}
                </div>
                <h3 className="mt-4 font-bold text-slate-900 text-lg">{r.title}</h3>
                <p className="mt-1.5 text-slate-600 text-sm leading-relaxed">{r.text}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
