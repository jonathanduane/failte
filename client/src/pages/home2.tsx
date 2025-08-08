import Navigation from "@/components/navigation";
import DABSliderImages from "@/components/dab-slider-images";
import FeaturesSection from "@/components/features-section";
import NewsSection from "@/components/news-section";
import FootholdSection from "@/components/foothold-section";
import Footer from "@/components/footer";

export default function Home2() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <DABSliderImages />
      <FeaturesSection />
      <FootholdSection />
      <NewsSection />
      <Footer />
    </div>
  );
}