import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Music, List, Signal, Gift, Smartphone, TrendingUp, Volume2, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";

import dabRadioImage from "@assets/it-is-a-radio-with-folding-antenna-with-fm-am-da-2025-02-10-06-22-08-utc.jpg";
import carDashboardImage from "@assets/closeup-image-of-a-woman-holding-steering-wheel-wh-2024-12-02-09-15-29-utc.jpg";
import radioStudioImage from "@assets/presenters-or-moderators-man-and-woman-in-radi-2025-02-21-15-57-33-utc.jpg";
import listeningImage from "@assets/young-woman-enjoying-music-with-headphones-in-a-vi-2025-03-10-22-10-47-utc.jpg";

const slides = [
  {
    id: 1,
    title: "Superior Sound Quality",
    subtitle: "Why Choose DAB+",
    description: "Experience crystal-clear digital audio with improved sound quality compared to traditional FM broadcasting.",
    icon: <Music className="w-20 h-20 text-white" />,
    image: dabRadioImage
  },
  {
    id: 2,
    title: "Greater Choice",
    subtitle: "More Radio Options",
    description: "Access a much greater number and better selection of radio stations, expanding your listening options significantly.",
    icon: <List className="w-20 h-20 text-white" />,
    image: radioStudioImage
  },
  {
    id: 3,
    title: "Enhanced Coverage",
    subtitle: "Strong Signal Everywhere",
    description: "Benefit from improved signal strength and coverage area, ensuring consistent reception across Ireland.",
    icon: <Signal className="w-20 h-20 text-white" />,
    image: carDashboardImage
  },
  {
    id: 4,
    title: "Free to Listeners",
    subtitle: "No Cost Radio",
    description: "Delivered free to listeners through transmitted signals, similar to the analogue FM service you know and trust.",
    icon: <Gift className="w-20 h-20 text-white" />,
    image: listeningImage
  },
  {
    id: 5,
    title: "Easy Integration",
    subtitle: "Simple Setup",
    description: "Many DAB+ enabled radios present services alongside FM stations with no need for setting changes or searches.",
    icon: <Smartphone className="w-20 h-20 text-white" />,
    image: dabRadioImage
  },
  {
    id: 6,
    title: "Future Ready",
    subtitle: "Broadcasting Evolution",
    description: "Be part of the technological advancement of radio in Ireland, supporting the future of broadcasting.",
    icon: <TrendingUp className="w-20 h-20 text-white" />,
    image: radioStudioImage
  }
];

export default function DABSliderTeal() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative h-[65vh] sm:h-[70vh] lg:h-[75vh] overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide 
                ? 'opacity-100 transform translate-x-0' 
                : index < currentSlide 
                  ? 'opacity-0 transform -translate-x-full'
                  : 'opacity-0 transform translate-x-full'
            }`}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            
            {/* Consistent Teal Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-teal-600 via-teal-700 to-cyan-600 opacity-85" />
            
            <div className="relative h-full flex items-center justify-center">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  <div className="text-center lg:text-left space-y-6 sm:space-y-8">
                    <div className="flex justify-center lg:justify-start mb-4 sm:mb-8">
                      <div className="icon-bounce">
                        {slide.icon}
                      </div>
                    </div>
                    
                    <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                      <p className="text-teal-200 text-base sm:text-lg lg:text-xl xl:text-2xl font-medium tracking-wide uppercase">
                        {slide.subtitle}
                      </p>
                      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                        {slide.title}
                      </h1>
                      <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-200 max-w-3xl leading-relaxed">
                        {slide.description}
                      </p>
                    </div>

                    <div className="flex flex-col gap-3 sm:gap-4 justify-center lg:justify-start pt-4 sm:pt-6">
                      <Button 
                        size="lg" 
                        className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 sm:px-10 sm:py-5 text-base sm:text-lg lg:text-xl font-bold rounded-full shadow-lg transform active:scale-95 transition-all duration-200 min-h-[52px] sm:min-h-[60px]"
                        onClick={() => window.location.href = '/dab-plus'}
                      >
                        <Volume2 className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
                        Learn About DAB+
                      </Button>
                      <Button 
                        size="lg"
                        className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 sm:px-10 sm:py-5 text-base sm:text-lg lg:text-xl font-bold rounded-full shadow-lg transform active:scale-95 transition-all duration-200 min-h-[52px] sm:min-h-[60px]"
                        onClick={() => window.location.href = '/coverage'}
                      >
                        <Mic className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
                        View Coverage Map
                      </Button>
                    </div>
                  </div>

                  <div className="hidden lg:flex justify-center">
                    <div className="relative">
                      <div className="w-80 h-80 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border-2 border-white/20">
                        <div className="w-60 h-60 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/20">
                          <div className="w-40 h-40 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                            {slide.icon}
                          </div>
                        </div>
                      </div>
                      <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full backdrop-blur-sm w-10 h-10 sm:w-12 sm:h-12"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8" />
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full backdrop-blur-sm w-10 h-10 sm:w-12 sm:h-12"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8" />
      </Button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div 
          className="h-full bg-white transition-all duration-300 ease-linear"
          style={{ 
            width: `${((currentSlide + 1) / slides.length) * 100}%`
          }}
        />
      </div>
    </section>
  );
}