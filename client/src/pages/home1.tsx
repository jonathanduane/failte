import Navigation from "@/components/navigation";
import DABSlider from "@/components/dab-slider";
import FeaturesSection from "@/components/features-section";
import NewsSection from "@/components/news-section";
import FootholdSection from "@/components/foothold-section";
import Footer from "@/components/footer";

export default function Home1() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <DABSlider />
      <FeaturesSection />
      <FootholdSection />
      <NewsSection />
      <Footer />
    </div>
  );
}