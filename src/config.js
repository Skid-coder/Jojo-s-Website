// Central configuration, edit contacts and image paths here.
export const CONFIG = {
  teacher: {
    firstName: 'Joan',
    fullName: 'Agbo Omimi Faith Joan',
    rating: 5.0,
    reviewsCount: 27,
    yearsExperience: 8,
    heroImage: '/images/teacher-hero.jpg',
    aboutImage: '/images/teacher-about.jpg',
    // TEFL certificate + transcript images (place files in public/images/).
    certificateImage: '/images/tefl-certificate.png',
    transcriptImage: '/images/tefl-transcript.png',
    // Photos shown in the small gallery strip.
    gallery: [
      '/images/teacher-1.jpg',
      '/images/teacher-2.jpg',
      '/images/teacher-3.jpg',
      '/images/teacher-4.jpg',
      '/images/teacher-5.jpg',
    ],
  },
  contacts: {
    whatsapp: 'https://wa.me/message/RT44T4WKCBBRE1',
    telegram: 'https://t.me/your_telegram',
    instagram: 'https://instagram.com/learnenglishwithjoan',
  },
  pricing: {
    trial: 500,
    thirty: 800,
    fortyFive: 1200,
    sixty: 1800,
  },
  // Manual exchange rates: how many RUB equal 1 unit of the foreign currency.
  // Update occasionally to stay roughly current.
  currency: {
    base: 'RUB',
    rates: {
      RUB: 1,
      USD: 92,
      EUR: 100,
      GBP: 117,
    },
    symbols: {
      RUB: '₽',
      USD: '$',
      EUR: '€',
      GBP: '£',
    },
  },
};
