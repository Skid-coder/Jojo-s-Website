import SectionReveal from './SectionReveal.jsx';
import { StarIcon } from './Icons.jsx';

const reviews = [
  {
    name: 'Наталья Спасская',
    date: 'Март 2025',
    text: 'Очень приятный учитель. Мой сын хотел всегда сбежать с занятий, но с Joan он занимался и ни разу не выбегал из комнаты! Он был в полном восторге от занятия!',
    rating: 5,
  },
  {
    name: 'Анна',
    date: 'Март 2025',
    text: 'Рада, что написала именно Joan — очень интересный, поддерживающий и полезный опыт! Планирую продолжать. Успели обсудить важные темы и вспомнить грамматику.',
    rating: 5,
  },
  {
    name: 'Наталия',
    date: 'Ноябрь 2024',
    text: 'Joan потрясающая! Чуткий и приятный преподаватель, который не только просто объясняет материал, но и делает это в приятной манере. Заниматься — одно удовольствие!',
    rating: 5,
  },
  {
    name: 'Константин',
    date: 'Январь 2024',
    text: 'Отличный преподаватель. Заниматься — одно удовольствие. Профессионально подходит к занятиям, позитивная и жизнерадостная, очень располагает к себе.',
    rating: 5,
  },
  {
    name: 'Фатима',
    date: 'Апрель 2025',
    text: 'Моим деткам очень понравился пробный урок с Joan — будем продолжать с ней заниматься. Очень приятная, нашла сразу подход к деткам. 👍',
    rating: 5,
  },
  {
    name: 'Анастасия',
    date: 'Сентябрь 2023',
    text: 'Наконец-то я нашла своего преподавателя и наставника. Домашняя работа приносит удовольствие, изучение английского проходит комфортно и без негативных эмоций!',
    rating: 5,
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="section bg-gradient-to-b from-white to-slate-50">
      <div className="container-page">
        <SectionReveal className="max-w-2xl">
          <span className="eyebrow">Отзывы учеников</span>
          <h2 className="section-title mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900">
            Что говорят ученики и их родители
          </h2>
          <div className="mt-4 flex items-center gap-3">
            <div className="flex -space-x-1">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
              ))}
            </div>
            <span className="text-slate-700 font-semibold">5.0</span>
            <span className="text-slate-500">· 27 отзывов на Авито</span>
          </div>
        </SectionReveal>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <SectionReveal key={r.name + r.date} delay={i * 0.06}>
              <ReviewCard review={r} />
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ review }) {
  const initial = review.name.charAt(0).toUpperCase();
  return (
    <article className="card h-full flex flex-col">
      <div className="flex -space-x-1">
        {[...Array(review.rating)].map((_, i) => (
          <StarIcon key={i} className="h-4 w-4 text-yellow-400" />
        ))}
      </div>
      <p className="mt-4 text-slate-700 leading-relaxed flex-1">«{review.text}»</p>
      <div className="mt-5 pt-5 border-t border-slate-100 flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-blue-500 text-white font-bold">
          {initial}
        </div>
        <div>
          <div className="font-semibold text-slate-900 text-sm">{review.name}</div>
          <div className="text-slate-500 text-xs">{review.date}</div>
        </div>
      </div>
    </article>
  );
}
