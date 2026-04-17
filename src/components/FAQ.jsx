import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SectionReveal from './SectionReveal.jsx';
import { useT } from '../i18n/LanguageContext.jsx';
import { CONFIG } from '../config.js';
import { WhatsAppIcon, TelegramIcon } from './Icons.jsx';

export default function FAQ() {
  const t = useT();
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="section bg-gradient-to-b from-white to-slate-50">
      <div className="container-page">
        <SectionReveal className="max-w-2xl">
          <span className="eyebrow">{t.faq.eyebrow}</span>
          <h2 className="section-title mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900">
            {t.faq.title}
          </h2>
          <p className="mt-4 text-slate-600 text-lg">{t.faq.sub}</p>
        </SectionReveal>

        <SectionReveal delay={0.1} className="mt-10">
          <ul className="mx-auto max-w-3xl space-y-3">
            {t.faq.items.map((item, i) => {
              const open = openIdx === i;
              return (
                <li
                  key={item.q}
                  className={`rounded-2xl ring-1 transition-colors ${
                    open
                      ? 'bg-white ring-brand-200 shadow-card'
                      : 'bg-white ring-slate-100 shadow-sm hover:ring-slate-200'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIdx(open ? -1 : i)}
                    aria-expanded={open}
                    aria-controls={`faq-panel-${i}`}
                    className="w-full flex items-center gap-4 text-left px-5 sm:px-6 py-4 sm:py-5"
                  >
                    <span className="flex-1 font-semibold text-slate-900 text-base sm:text-lg">
                      {item.q}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all ${
                        open ? 'bg-brand-600 text-white rotate-180' : 'bg-brand-50 text-brand-600'
                      }`}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="h-4 w-4">
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        id={`faq-panel-${i}`}
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-slate-600 leading-relaxed">
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </SectionReveal>

        <SectionReveal delay={0.15} className="mt-10">
          <div className="mx-auto max-w-3xl flex flex-wrap items-center justify-center gap-3">
            <a
              href={CONFIG.contacts.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-5 py-3 shadow-sm transition-colors"
            >
              <WhatsAppIcon className="h-5 w-5" />
              WhatsApp
            </a>
            <a
              href={CONFIG.contacts.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-sky-500 hover:bg-sky-600 text-white font-semibold px-5 py-3 shadow-sm transition-colors"
            >
              <TelegramIcon className="h-5 w-5" />
              Telegram
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
