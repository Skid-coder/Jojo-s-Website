import SectionReveal from './SectionReveal.jsx';
import { useT } from '../i18n/LanguageContext.jsx';
import { UserIcon, GlobeIcon, ChatIcon, BookIcon } from './Icons.jsx';

const ICONS = [
  <UserIcon className="h-7 w-7" />,
  <GlobeIcon className="h-7 w-7" />,
  <ChatIcon className="h-7 w-7" />,
  <BookIcon className="h-7 w-7" />,
];

export default function LessonFormat() {
  const t = useT();
  return (
    <section className="section bg-gradient-to-b from-slate-50 to-white">
      <div className="container-page">
        <SectionReveal className="max-w-2xl">
          <span className="eyebrow">{t.format.eyebrow}</span>
          <h2 className="section-title mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900">
            {t.format.title}
          </h2>
        </SectionReveal>

        <div className="mt-10 grid sm:grid-cols-2 gap-5">
          {t.format.cards.map((f, i) => (
            <SectionReveal key={f.title} delay={i * 0.08}>
              <div className="card flex gap-5 h-full group">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-50 to-blue-50 text-brand-600 shadow-sm transition-transform duration-300 group-hover:scale-110">
                  {ICONS[i]}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">{f.title}</h3>
                  <p className="mt-1 text-slate-600 leading-relaxed">{f.text}</p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
