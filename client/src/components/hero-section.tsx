import { ArrowRight, MapPin, Radio } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-slate-900 via-teal-800 to-slate-800 min-h-screen flex items-center">
      {/* Subtle geometric pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(20, 184, 166, 0.4) 0%, transparent 25%), 
                           radial-gradient(circle at 75% 75%, rgba(20, 184, 166, 0.3) 0%, transparent 25%),
                           radial-gradient(circle at 75% 25%, rgba(20, 184, 166, 0.2) 0%, transparent 25%),
                           radial-gradient(circle at 25% 75%, rgba(20, 184, 166, 0.3) 0%, transparent 25%)`,
          backgroundSize: '400px 400px, 300px 300px, 500px 500px, 350px 350px',
          backgroundPosition: '0 0, 200px 200px, 100px 100px, 300px 300px'
        }}>
        </div>
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white animate-slide-up">
            <h1 className="mb-6">
              The Future of <span className="text-accent">Digital Radio</span> in Ireland
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-teal-100">
              FáilteDAB brings high-powered, quality digital radio broadcasting to Ireland. 
              Experience greater choice, superior sound quality, and the next evolution of radio.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex">
              <Link href="/dab-plus">
                <Button 
                  className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg h-auto shadow-lg"
                >
                  Learn About DAB+ <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/coverage">
                <Button 
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg h-auto bg-transparent"
                >
                  View Coverage Map <MapPin className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Hero Visual */}
          <div className="relative animate-fade-in">
            <div className="relative bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-32 h-32 bg-accent rounded-full mb-6 shadow-2xl">
                  <Radio className="h-16 w-16 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">365-Day Trial Service</h3>
                <p className="text-teal-100">Licensed by ComReg | Starting Late Spring 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
