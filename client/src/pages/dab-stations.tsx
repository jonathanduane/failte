import Navigation from "@/components/navigation";
import DABStations from "@/components/dab-stations";
import Footer from "@/components/footer";

export default function DABStationsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <DABStations />
      <Footer />
    </div>
  );
}