import Navigation from "@/components/navigation";
import DABSliderTeal from "@/components/dab-slider-teal";
import FeaturesSection from "@/components/features-section";
import NewsSection from "@/components/news-section";
import FootholdSection from "@/components/foothold-section";
import Footer from "@/components/footer";

export default function Home3() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <DABSliderTeal />
      <FeaturesSection />
      <FootholdSection />
      <NewsSection />
      <Footer />
    </div>
  );
}