import SectionReveal from './SectionReveal.jsx';
import { CONFIG } from '../config.js';
import { CheckIcon } from './Icons.jsx';

const highlights = [
  'Индивидуальный подход к каждому ученику',
  'Фокус на реальном общении, а не на зубрёжке',
  'Поддерживающая и дружелюбная атмосфера',
  'Говорю по-русски — объясню понятно',
];

export default function About() {
  return (
    <section id="about" className="section bg-gradient-to-b from-white to-slate-50">
      <div className="container-page grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <SectionReveal className="lg:col-span-5">
          <div className="relative mx-auto max-w-sm">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-brand-200/50 to-blue-200/40 blur-2xl" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-100 to-blue-100 ring-1 ring-white shadow-soft">
              <img
                src={CONFIG.teacher.aboutImage}
                alt="Joan — преподаватель английского"
                loading="lazy"
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center text-brand-700/60 text-sm font-semibold pointer-events-none select-none">
                <span className="px-4 text-center">
                  Добавьте фото в
                  <br />
                  public/images/teacher-about.jpg
                </span>
              </div>
            </div>
          </div>
        </SectionReveal>

        <SectionReveal className="lg:col-span-7" delay={0.1}>
          <span className="eyebrow">Обо мне</span>
          <h2 className="section-title mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900">
            Привет! Меня зовут Joan 👋
          </h2>
          <p className="mt-5 text-slate-600 text-lg leading-relaxed">
            Я носитель английского языка и преподаватель с опытом более{' '}
            <strong className="text-slate-900">8 лет</strong>. Работала в школах, детских центрах
            и международных языковых лагерях. Преподаю детям и взрослым — от начинающих
            до продвинутого уровня.
          </p>
          <p className="mt-4 text-slate-600 text-lg leading-relaxed">
            Моя методика — <strong className="text-slate-900">student-centered</strong>: урок
            строится вокруг ваших целей и помогает укрепить уверенность в живой речи. Говорить
            по-английски можно с первого занятия — я помогу снять страх и зажим.
          </p>

          <ul className="mt-7 grid sm:grid-cols-2 gap-3">
            {highlights.map((h) => (
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
              Записаться на пробный урок
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
