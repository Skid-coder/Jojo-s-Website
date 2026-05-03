import { LanguageProvider } from './i18n/LanguageContext.jsx';
import { CurrencyProvider } from './CurrencyContext.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Trust from './components/Trust.jsx';
import About from './components/About.jsx';
import Certified from './components/Certified.jsx';
import Results from './components/Results.jsx';
import LessonFormat from './components/LessonFormat.jsx';
import Gallery from './components/Gallery.jsx';
import Pricing from './components/Pricing.jsx';
import Reviews from './components/Reviews.jsx';
import FAQ from './components/FAQ.jsx';
import FinalCTA from './components/FinalCTA.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import FloatingCTA from './components/FloatingCTA.jsx';

export default function App() {
  return (
    <LanguageProvider>
      <CurrencyProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <Trust />
          <About />
          <Certified />
          <Results />
          <LessonFormat />
          <Gallery />
          <Pricing />
          <Reviews />
          <FAQ />
          <FinalCTA />
          <Contact />
        </main>
        <Footer />
        <FloatingCTA />
      </div>
      </CurrencyProvider>
    </LanguageProvider>
  );
}
