import SectionReveal from './SectionReveal.jsx';
import { CONFIG } from '../config.js';
import { useT } from '../i18n/LanguageContext.jsx';
import { CheckIcon, TrophyIcon, ShieldIcon } from './Icons.jsx';
import Photo from './Photo.jsx';

export default function Certified() {
  const t = useT();
  const c = t.certified;

  return (
    <section
      id="certified"
      className="section bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="container-page">
        <SectionReveal className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">{c.eyebrow}</span>
          <h2 className="section-title mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900">
            {c.title}
          </h2>
          <p className="mt-4 text-slate-600 text-lg">{c.sub}</p>
        </SectionReveal>

        <SectionReveal delay={0.1} className="mt-10">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center max-w-5xl mx-auto">
            <div className="lg:col-span-5">
              <Photo
                src={CONFIG.teacher.certificateImage}
                alt={c.certImgAlt}
                placeholder="TEFL Certificate"
                className="aspect-[3/4] overflow-hidden rounded-2xl bg-gradient-to-br from-brand-50 to-blue-50 ring-1 ring-slate-100 shadow-card"
                imgClassName="h-full w-full object-cover"
              />
            </div>

            <div className="lg:col-span-7">
              <div className="card h-full">
                <div className="flex items-start gap-4">
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-soft">
                    <TrophyIcon className="h-7 w-7" />
                  </div>
                  <div>
                    <div className="text-lg font-extrabold text-slate-900 leading-tight">
                      {c.issuer}
                    </div>
                    <div className="mt-1 text-sm text-slate-500">
                      {c.certNo}{' '}
                      <span className="font-mono text-slate-700">{c.certNumber}</span> ·{' '}
                      {c.issued}
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="text-sm font-semibold text-slate-900 uppercase tracking-wide">
                    {c.modulesTitle}
                  </div>
                  <ul className="mt-4 grid sm:grid-cols-2 gap-3">
                    {c.modules.map((m) => (
                      <li key={m} className="flex items-start gap-3">
                        <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600">
                          <CheckIcon className="h-4 w-4" />
                        </span>
                        <span className="text-slate-700 leading-snug text-sm">
                          {m}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                  <a
                    href={`${c.verifyUrl}?certNo=${encodeURIComponent(c.certNumber)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <ShieldIcon className="h-5 w-5" />
                    {c.verifyCta}
                  </a>
                  <span className="text-xs text-slate-500">
                    teacherrecord.com/checking
                  </span>
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
