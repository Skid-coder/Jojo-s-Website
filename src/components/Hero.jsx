import { motion } from 'framer-motion';
import { CONFIG } from '../config.js';
import { StarIcon, BadgeIcon, GlobeIcon, ArrowRightIcon } from './Icons.jsx';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-hero-radial pt-28 sm:pt-32 pb-16 sm:pb-24">
      <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-brand-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />

      <div className="container-page grid lg:grid-cols-12 gap-10 lg:gap-12 items-center relative">
        <div className="lg:col-span-7">
          <motion.span
            className="eyebrow"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-500" />
            Native English Teacher · Онлайн
          </motion.span>

          <motion.h1
            className="section-title mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] text-slate-900"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
          >
            Говорите по-английски{' '}
            <span className="bg-gradient-to-r from-brand-600 to-blue-500 bg-clip-text text-transparent">
              уверенно
            </span>{' '}
            с носителем языка
          </motion.h1>

          <motion.p
            className="mt-5 text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
          >
            Учитесь говорить естественно, улучшайте беглость речи и чувствуйте себя уверенно
            в реальных разговорах. Индивидуальный подход для детей и взрослых.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
          >
            <a href="#contact" className="btn-primary">
              Пробный урок за 500₽
              <ArrowRightIcon />
            </a>
            <a href="#pricing" className="btn-secondary">
              Посмотреть цены
            </a>
          </motion.div>

          <motion.div
            className="mt-10 grid grid-cols-3 gap-3 sm:gap-4 max-w-xl"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
          >
            <TrustBadge
              icon={<StarIcon className="h-5 w-5 text-yellow-400" />}
              title="5.0"
              subtitle={`${CONFIG.teacher.reviewsCount}+ отзывов`}
            />
            <TrustBadge
              icon={<BadgeIcon className="h-5 w-5 text-brand-600" />}
              title={`${CONFIG.teacher.yearsExperience}+ лет`}
              subtitle="опыта"
            />
            <TrustBadge
              icon={<GlobeIcon className="h-5 w-5 text-blue-500" />}
              title="Native"
              subtitle="speaker"
            />
          </motion.div>
        </div>

        <motion.div
          className="lg:col-span-5 relative"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-brand-300/40 via-blue-200/40 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-100 to-blue-100 aspect-[4/5] shadow-soft ring-1 ring-white">
              <img
                src={CONFIG.teacher.heroImage}
                alt="Преподаватель английского"
                loading="eager"
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center text-brand-700/60 text-sm font-semibold pointer-events-none select-none">
                <span className="px-4 text-center">
                  Добавьте фото в
                  <br />
                  public/images/teacher-hero.jpg
                </span>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -left-4 sm:-left-8 top-8 rounded-2xl bg-white shadow-card ring-1 ring-slate-100 p-3 pr-4 flex items-center gap-3 animate-float-slow"
            >
              <div className="flex items-center -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4 text-yellow-400" />
                ))}
              </div>
              <div className="text-sm">
                <div className="font-bold text-slate-900">5.0 рейтинг</div>
                <div className="text-slate-500 text-xs">{CONFIG.teacher.reviewsCount}+ отзывов</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -right-3 sm:-right-6 bottom-10 rounded-2xl bg-white shadow-card ring-1 ring-slate-100 p-3 flex items-center gap-3"
            >
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-50 text-brand-600">
                <BadgeIcon className="h-5 w-5" />
              </div>
              <div className="text-sm">
                <div className="font-bold text-slate-900">Документы</div>
                <div className="text-slate-500 text-xs">проверены на Авито</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TrustBadge({ icon, title, subtitle }) {
  return (
    <div className="rounded-2xl bg-white/70 backdrop-blur ring-1 ring-slate-100 shadow-sm px-3 sm:px-4 py-3 flex items-center gap-3">
      <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-slate-50">
        {icon}
      </div>
      <div className="leading-tight">
        <div className="font-bold text-slate-900 text-sm sm:text-base">{title}</div>
        <div className="text-slate-500 text-xs">{subtitle}</div>
      </div>
    </div>
  );
}
