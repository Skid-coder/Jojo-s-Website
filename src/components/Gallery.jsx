import SectionReveal from './SectionReveal.jsx';
import { CONFIG } from '../config.js';
import { useT } from '../i18n/LanguageContext.jsx';

export default function Gallery() {
  const t = useT();
  const photos = CONFIG.teacher.gallery;
  if (!photos?.length) return null;

  return (
    <section className="section bg-white">
      <div className="container-page">
        <SectionReveal className="max-w-2xl">
          <span className="eyebrow">{t.gallery.eyebrow}</span>
          <h2 className="section-title mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900">
            {t.gallery.title}
          </h2>
        </SectionReveal>

        <SectionReveal delay={0.1} className="mt-10">
          <div className="-mx-5 sm:-mx-8 overflow-x-auto scroll-smooth">
            <div className="flex gap-4 sm:gap-5 px-5 sm:px-8 pb-3 snap-x snap-mandatory">
              {photos.map((src, i) => (
                <figure
                  key={src}
                  className="relative snap-start shrink-0 w-56 sm:w-64 aspect-[3/4] overflow-hidden rounded-2xl bg-gradient-to-br from-brand-100 to-blue-100 ring-1 ring-white shadow-card"
                >
                  <img
                    src={src}
                    alt={`Joan photo ${i + 1}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <figcaption className="absolute inset-0 flex items-end p-3 text-xs font-semibold text-brand-700/70 pointer-events-none select-none">
                    <span className="rounded-md bg-white/80 px-2 py-1">
                      public/images/teacher-{i + 1}.jpg
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
