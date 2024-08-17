import FooterComponent from "./components/FooterComponent";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import OurGames from "./components/OurGames";
import PrivacyPolicy from "./components/PrivacyPolicy";
import StatsComponent from "./components/StatsComponent";
import TestimonialsComponent from "./components/TestimonialsComponent";
import WelcomeComponent from "./components/WelcomeComponent";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <OurGames />
      <StatsComponent downloads={53000000} games={9} cupsOfCoffee={2400} />
      <TestimonialsComponent />
      <WelcomeComponent />
      <PrivacyPolicy />
      <FooterComponent />
    </main>
  );
}
