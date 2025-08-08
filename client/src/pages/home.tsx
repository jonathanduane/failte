import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import CoverageSection from "@/components/coverage-section";
import DABStations from "@/components/dab-stations";
import NewsSection from "@/components/news-section";
import BroadcasterSection from "@/components/broadcaster-section";
import FootholdSection from "@/components/foothold-section";
import FeedbackSection from "@/components/feedback-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <CoverageSection />
      <DABStations />
      <NewsSection />
      <BroadcasterSection />
      <FootholdSection />
      <FeedbackSection />
      <Footer />
    </div>
  );
}
