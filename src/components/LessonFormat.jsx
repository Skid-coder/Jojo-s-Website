import SectionReveal from './SectionReveal.jsx';
import { UserIcon, GlobeIcon, ChatIcon, BookIcon } from './Icons.jsx';

const formats = [
  {
    icon: <UserIcon className="h-7 w-7" />,
    title: 'Индивидуальные уроки',
    text: 'Только вы и преподаватель. Максимум внимания и практики.',
  },
  {
    icon: <GlobeIcon className="h-7 w-7" />,
    title: 'Онлайн — где удобно',
    text: 'Zoom, Skype, Telegram, WhatsApp — выбирайте свою платформу.',
  },
  {
    icon: <ChatIcon className="h-7 w-7" />,
    title: 'Фокус на речь',
    text: 'Говорим 70% урока. Никакой скучной зубрёжки — только живой английский.',
  },
  {
    icon: <BookIcon className="h-7 w-7" />,
    title: 'Домашка и обратная связь',
    text: 'Полезные задания и подробная обратная связь после каждого занятия.',
  },
];

export default function LessonFormat() {
  return (
    <section className="section bg-gradient-to-b from-slate-50 to-white">
      <div className="container-page">
        <SectionReveal className="max-w-2xl">
          <span className="eyebrow">Как проходят уроки</span>
          <h2 className="section-title mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900">
            Удобный формат и максимум пользы
          </h2>
        </SectionReveal>

        <div className="mt-10 grid sm:grid-cols-2 gap-5">
          {formats.map((f, i) => (
            <SectionReveal key={f.title} delay={i * 0.08}>
              <div className="card flex gap-5 h-full">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                  {f.icon}
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
