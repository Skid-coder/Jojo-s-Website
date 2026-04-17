import SectionReveal from './SectionReveal.jsx';
import { CONFIG } from '../config.js';
import { WhatsAppIcon, TelegramIcon, ShieldIcon } from './Icons.jsx';

export default function Contact() {
  return (
    <section id="contact" className="section bg-white">
      <div className="container-page">
        <SectionReveal className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">Контакты</span>
          <h2 className="section-title mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900">
            Напишите — и забронируем ваш первый урок
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
            Выберите удобный мессенджер. Я отвечу в течение часа в рабочее время.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.1} className="mt-10">
          <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
            <a
              href={CONFIG.contacts.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 p-6 sm:p-7 text-white shadow-soft transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white/20 backdrop-blur">
                  <WhatsAppIcon className="h-7 w-7" />
                </div>
                <div>
                  <div className="text-xl font-bold">WhatsApp</div>
                  <div className="text-emerald-50/90 text-sm">Быстрый ответ в мессенджере</div>
                </div>
              </div>
              <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white/90">
                Написать в WhatsApp
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </a>

            <a
              href={CONFIG.contacts.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 p-6 sm:p-7 text-white shadow-soft transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white/20 backdrop-blur">
                  <TelegramIcon className="h-7 w-7" />
                </div>
                <div>
                  <div className="text-xl font-bold">Telegram</div>
                  <div className="text-sky-50/90 text-sm">Удобно для голосовых и файлов</div>
                </div>
              </div>
              <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white/90">
                Написать в Telegram
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </a>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.15} className="mt-8">
          <div className="mx-auto max-w-3xl rounded-2xl bg-slate-50 ring-1 ring-slate-100 p-5 flex items-center gap-4">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-white text-brand-600 shadow-sm">
              <ShieldIcon className="h-5 w-5" />
            </div>
            <p className="text-sm text-slate-600">
              Документы проверены через Госуслуги. Профиль на Авито с рейтингом{' '}
              <strong className="text-slate-900">5.0</strong> и 27 отзывами.
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
