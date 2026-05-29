import SectionReveal from './SectionReveal.jsx';
import { CONFIG } from '../config.js';
import { useT } from '../i18n/LanguageContext.jsx';
import { WhatsAppIcon, TelegramIcon, InstagramIcon, ShieldIcon } from './Icons.jsx';
import EnquiryForm from './EnquiryForm.jsx';

export default function Contact() {
  const t = useT();
  return (
    <section id="contact" className="section bg-white">
      <div className="container-page">
        <SectionReveal className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">{t.contact.eyebrow}</span>
          <h2 className="section-title mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900">
            {t.contact.title}
          </h2>
          <p className="mt-4 text-slate-600 text-lg">{t.contact.sub}</p>
        </SectionReveal>

        <SectionReveal delay={0.1} className="mt-10">
          <a
            href={CONFIG.contacts.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block overflow-hidden rounded-3xl bg-gradient-to-br from-purple-600 via-pink-500 to-amber-400 bg-[length:200%_200%] animate-gradient-shift p-7 sm:p-9 text-white shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl active:scale-[0.99] max-w-3xl mx-auto"
          >
            <div className="pointer-events-none absolute -top-20 -right-16 h-64 w-64 rounded-full bg-white/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-fuchsia-300/20 blur-3xl" />

            <div className="relative flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-7">
              <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-white/25 backdrop-blur ring-1 ring-white/30">
                <InstagramIcon className="h-8 w-8" />
              </div>
              <div className="flex-1">
                <div className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  {t.contact.instagramTitle}
                </div>
                <div className="mt-1 text-white/90 text-sm sm:text-base">
                  {t.contact.instagramSub}
                </div>
                <div className="mt-1 text-white/70 text-xs sm:text-sm font-mono">
                  {t.contact.instagramHandle}
                </div>
              </div>
              <div className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 font-semibold text-pink-600 shadow-lg whitespace-nowrap transition-shadow duration-300 group-hover:shadow-xl">
                {t.contact.instagramCta}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </div>
          </a>
        </SectionReveal>

        <SectionReveal delay={0.15} className="mt-5">
          <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
            <a
              href={CONFIG.contacts.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 p-6 sm:p-7 text-white shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl active:scale-[0.98]"
            >
              <div className="flex items-center gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white/20 backdrop-blur">
                  <WhatsAppIcon className="h-7 w-7" />
                </div>
                <div>
                  <div className="text-xl font-bold">{t.contact.whatsappTitle}</div>
                  <div className="text-emerald-50/90 text-sm">{t.contact.whatsappSub}</div>
                </div>
              </div>
              <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white/90">
                {t.contact.whatsappCta}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </a>

            <a
              href={CONFIG.contacts.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 p-6 sm:p-7 text-white shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl active:scale-[0.98]"
            >
              <div className="flex items-center gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white/20 backdrop-blur">
                  <TelegramIcon className="h-7 w-7" />
                </div>
                <div>
                  <div className="text-xl font-bold">{t.contact.telegramTitle}</div>
                  <div className="text-sky-50/90 text-sm">{t.contact.telegramSub}</div>
                </div>
              </div>
              <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white/90">
                {t.contact.telegramCta}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </a>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.2} className="mt-10">
          <EnquiryForm />
        </SectionReveal>

        <SectionReveal delay={0.25} className="mt-8">
          <div className="mx-auto max-w-3xl rounded-2xl bg-slate-50 ring-1 ring-slate-100 p-5 flex items-center gap-4">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-white text-brand-600 shadow-sm">
              <ShieldIcon className="h-5 w-5" />
            </div>
            <p className="text-sm text-slate-600">
              {t.contact.verifiedA} <strong className="text-slate-900">5.0</strong>{' '}
              {t.contact.verifiedB}
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
