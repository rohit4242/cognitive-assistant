import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import AboutSection from '@/components/AboutSection';
import TechnologySection from '@/components/TechnologySection';
import PrivacySection from '@/components/PrivacySection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <TechnologySection />
      <PrivacySection />
      <ContactSection />
      <Footer />
    </main>
  );
}
