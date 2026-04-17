import SectionReveal from './SectionReveal.jsx';
import { CONFIG } from '../config.js';
import { useT } from '../i18n/LanguageContext.jsx';
import { StarIcon } from './Icons.jsx';

export default function Reviews() {
  const t = useT();
  return (
    <section id="reviews" className="section bg-gradient-to-b from-white to-slate-50">
      <div className="container-page">
        <SectionReveal className="max-w-2xl">
          <span className="eyebrow">{t.reviews.eyebrow}</span>
          <h2 className="section-title mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900">
            {t.reviews.title}
          </h2>
          <div className="mt-4 flex items-center gap-3">
            <div className="flex -space-x-1">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
              ))}
            </div>
            <span className="text-slate-700 font-semibold">5.0</span>
            <span className="text-slate-500">
              · {CONFIG.teacher.reviewsCount} {t.reviews.summary}
            </span>
          </div>
        </SectionReveal>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.reviews.items.map((r, i) => (
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
        {[...Array(5)].map((_, i) => (
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
