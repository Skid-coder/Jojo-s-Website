import SectionReveal from './SectionReveal.jsx';
import { MicIcon, ChatIcon, SparkleIcon, TrophyIcon } from './Icons.jsx';

const results = [
  {
    icon: <ChatIcon className="h-7 w-7" />,
    title: 'Говорите уверенно',
    text: 'Перестанете бояться ошибок и начнёте свободно общаться с первых уроков.',
  },
  {
    icon: <MicIcon className="h-7 w-7" />,
    title: 'Улучшите произношение',
    text: 'Звучание как у носителя — ставим произношение и интонацию естественно.',
  },
  {
    icon: <SparkleIcon className="h-7 w-7" />,
    title: 'Понимаете носителей',
    text: 'Фильмы, подкасты и живая речь перестанут быть загадкой.',
  },
  {
    icon: <TrophyIcon className="h-7 w-7" />,
    title: 'Пройдёте собеседование',
    text: 'Подготовка к интервью, деловому общению и путешествиям.',
  },
];

export default function Results() {
  return (
    <section id="results" className="section bg-white">
      <div className="container-page">
        <SectionReveal className="max-w-2xl">
          <span className="eyebrow">Ваш результат</span>
          <h2 className="section-title mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900">
            Что вы получите от занятий
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
            Не просто «уроки английского» — реальные навыки, которые вы будете использовать
            в жизни, на работе и в путешествиях.
          </p>
        </SectionReveal>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {results.map((r, i) => (
            <SectionReveal key={r.title} delay={i * 0.08}>
              <div className="card h-full">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-600 to-blue-500 text-white shadow-soft">
                  {r.icon}
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
