import SectionReveal from './SectionReveal.jsx';
import { GlobeIcon, BadgeIcon, StarIcon, TrophyIcon } from './Icons.jsx';

const items = [
  {
    icon: <GlobeIcon className="h-7 w-7" />,
    title: 'Носитель языка',
    text: 'Живая речь, естественное произношение, американские и британские материалы.',
  },
  {
    icon: <BadgeIcon className="h-7 w-7" />,
    title: '8+ лет опыта',
    text: 'Опыт с детьми и взрослыми всех уровней — от начинающих до продвинутых.',
  },
  {
    icon: <StarIcon className="h-7 w-7" />,
    title: '27+ отзывов',
    text: 'Рейтинг 5.0 на Авито. Реальные отзывы учеников и родителей.',
  },
  {
    icon: <TrophyIcon className="h-7 w-7" />,
    title: 'Школы и языковые центры',
    text: 'Работала в школах, детских центрах и 4 летних языковых лагерях.',
  },
];

export default function Trust() {
  return (
    <section className="section bg-white">
      <div className="container-page">
        <SectionReveal className="max-w-2xl">
          <span className="eyebrow">Почему мне доверяют</span>
          <h2 className="section-title mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900">
            Преподаватель, которого уже выбрали сотни учеников
          </h2>
        </SectionReveal>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {items.map((it, i) => (
            <SectionReveal key={it.title} delay={i * 0.08}>
              <div className="card h-full">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-50 to-blue-50 text-brand-600">
                  {it.icon}
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
