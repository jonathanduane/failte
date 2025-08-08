import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import CoverageMap from "@/components/coverage-map";

export default function CoveragePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <Link href="/">
              <Button variant="outline" className="mb-8 border-white text-white hover:bg-white hover:text-primary">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
              </Button>
            </Link>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Coverage <span className="text-accent">Map</span>
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto">
              Explore the DAB+ transmission coverage areas across Ireland
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-20">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">Interactive Coverage Map</h2>
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
                This map shows the current DAB+ transmission coverage areas for the FáilteDAB trial. 
                Click on coverage zones to view detailed transmission information.
              </p>
            </div>
            
            <div className="mb-8">
              <CoverageMap />
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-3">6 Transmission Sites</h3>
                <p className="text-gray-600 text-lg">High-power transmission points across Leinster</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Synchronous Coverage</h3>
                <p className="text-gray-600 text-lg">Overlapping signals for seamless listening</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-3">365-Day Trial</h3>
                <p className="text-gray-600 text-lg">Licensed by ComReg starting late spring 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}