import { motion } from 'framer-motion';
import { CONFIG } from '../config.js';
import { useT } from '../i18n/LanguageContext.jsx';
import { StarIcon, BadgeIcon, UKFlagIcon, ArrowRightIcon } from './Icons.jsx';
import Photo from './Photo.jsx';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  const t = useT();
  return (
    <section id="top" className="relative overflow-hidden bg-hero-radial pt-28 sm:pt-32 pb-16 sm:pb-24">
      <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-brand-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />

      <div className="container-page grid lg:grid-cols-12 gap-10 lg:gap-12 items-center relative">
        <div className="lg:col-span-7">
          <motion.span className="eyebrow" variants={fadeUp} initial="hidden" animate="show" custom={0}>
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-500" />
            {t.hero.eyebrow}
          </motion.span>

          <motion.h1
            className="section-title mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] text-slate-900"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
          >
            {t.hero.headlineBefore}{' '}
            <span className="bg-gradient-to-r from-brand-600 to-blue-500 bg-clip-text text-transparent">
              {t.hero.headlineHighlight}
            </span>{' '}
            {t.hero.headlineAfter}
          </motion.h1>

          <motion.p
            className="mt-5 text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
          >
            {t.hero.sub}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
          >
            <a href="#contact" className="btn-primary">
              {t.hero.ctaPrimary}
              <ArrowRightIcon />
            </a>
            <a href="#pricing" className="btn-secondary">
              {t.hero.ctaSecondary}
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
              subtitle={`${CONFIG.teacher.reviewsCount}+ ${t.hero.badgeReviews}`}
            />
            <TrustBadge
              icon={<BadgeIcon className="h-5 w-5 text-brand-600" />}
              title={`${CONFIG.teacher.yearsExperience}+ ${t.hero.badgeYears}`}
              subtitle={t.hero.badgeExperience}
            />
            <TrustBadge
              icon={<UKFlagIcon className="h-5 w-7 rounded-[3px]" />}
              title={t.hero.badgeNative}
              subtitle={t.hero.badgeSpeaker}
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
            <Photo
              src={CONFIG.teacher.heroImage}
              alt={t.about.imgAlt}
              loading="eager"
              placeholder={t.hero.imgPlaceholder}
              className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-100 to-blue-100 aspect-[4/5] shadow-soft ring-1 ring-white"
            />

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
                <div className="font-bold text-slate-900">{t.hero.float1Title}</div>
                <div className="text-slate-500 text-xs">
                  {CONFIG.teacher.reviewsCount}+ {t.hero.float1Sub}
                </div>
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
                <div className="font-bold text-slate-900">{t.hero.float2Title}</div>
                <div className="text-slate-500 text-xs">{t.hero.float2Sub}</div>
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
      <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-slate-50">{icon}</div>
      <div className="leading-tight">
        <div className="font-bold text-slate-900 text-sm sm:text-base">{title}</div>
        <div className="text-slate-500 text-xs">{subtitle}</div>
      </div>
    </div>
  );
}
