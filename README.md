# Joan — English Teacher Landing Page

A modern, conversion-focused landing page for a premium native English teacher.
Built with **Vite + React + Tailwind CSS + Framer Motion** (JavaScript only).

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:5173

```bash
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## What to customize

Open `src/config.js` and replace the placeholder values:

- `contacts.whatsapp` — your WhatsApp link (e.g. `https://wa.me/79991234567`)
- `contacts.telegram` — your Telegram username link (e.g. `https://t.me/yourname`)
- `pricing.*` — lesson prices in ₽
- `teacher.heroImage` / `teacher.aboutImage` — image paths

### Adding images

Place your photos in `public/images/`:

- `teacher-hero.jpg` — hero section (portrait, ~4:5 ratio)
- `teacher-about.jpg` — about section (portrait, ~4:5 ratio)
- `teacher-1.jpg` … `teacher-5.jpg` — gallery strip (portrait, ~3:4 ratio)

Placeholders are shown automatically until the images are added. Edit
`src/config.js` → `teacher.gallery` to add/remove gallery slots.

## Languages

The site ships with a **RU / EN language toggle** in the header. On first
visit the language is auto-detected from the browser (`navigator.language`)
and saved in `localStorage`. All strings live in `src/i18n/strings.js`.

## Project structure

```
src/
  App.jsx                  # page composition
  config.js                # contacts, prices, images
  index.css                # Tailwind + component classes
  main.jsx                 # entry point
  components/
    Header.jsx             # sticky nav + CTA
    Hero.jsx               # headline + trust badges
    Trust.jsx              # credibility cards
    About.jsx              # teacher bio
    Results.jsx            # student outcomes
    LessonFormat.jsx       # how lessons work
    Pricing.jsx            # pricing cards
    Reviews.jsx            # testimonials
    FinalCTA.jsx           # closing call-to-action
    Contact.jsx            # WhatsApp + Telegram buttons
    Footer.jsx
    SectionReveal.jsx      # scroll-in animation wrapper
    Icons.jsx              # inline SVG icon set
```

## Design system

- Primary color: `brand` (violet) — configured in `tailwind.config.js`
- Rounded corners: `rounded-2xl` / `rounded-3xl`
- Shadows: `shadow-soft`, `shadow-card`
- Fonts: Inter + Plus Jakarta Sans (loaded from Google Fonts)
- Animations: Framer Motion (`SectionReveal`, hero fade-up, card hover)
