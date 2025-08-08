import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Music, List, Signal, Gift, Smartphone, TrendingUp, Volume2, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    id: 1,
    title: "Superior Sound Quality",
    subtitle: "Why Choose DAB+",
    description: "Experience crystal-clear digital audio with improved sound quality compared to traditional FM broadcasting.",
    icon: <Music className="w-16 h-16 text-white" />,
    gradient: "from-teal-600 via-cyan-600 to-blue-600",
    image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InNsaWRlMSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMwZDk0ODgiLz4KPHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiMwNjkxZGEiLz4KPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMjU2M2ViIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPHJlY3Qgd2lkdGg9IjYwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9InVybCgjc2xpZGUxKSIvPgo8Y2lyY2xlIGN4PSI0NTAiIGN5PSIxNTAiIHI9IjgwIiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiLz4KPGNpcmNsZSBjeD0iNDUwIiBjeT0iMTUwIiByPSI2MCIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSIvPgo8Y2lyY2xlIGN4PSI0NTAiIGN5PSIxNTAiIHI9IjQwIiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikiLz4KPGNpcmNsZSBjeD0iNDUwIiBjeT0iMTUwIiByPSIyMCIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpIi8+Cjwvc3ZnPgo="
  },
  {
    id: 2,
    title: "Greater Choice",
    subtitle: "More Radio Options",
    description: "Access a much greater number and better selection of radio stations, expanding your listening options significantly.",
    icon: <List className="w-16 h-16 text-white" />,
    gradient: "from-emerald-600 via-teal-600 to-cyan-600",
    image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InNsaWRlMiIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMwNTk2NjkiLz4KPHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiMwZDk0ODgiLz4KPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDY5MWRhIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPHJlY3Qgd2lkdGg9IjYwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9InVybCgjc2xpZGUyKSIvPgo8cmVjdCB4PSI4MCIgeT0iMTAwIiB3aWR0aD0iMTIwIiBoZWlnaHQ9IjIwMCIgcng9IjEwIiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpIi8+CjxyZWN0IHg9IjI0MCIgeT0iODAiIHdpZHRoPSIxMjAiIGhlaWdodD0iMjQwIiByeD0iMTAiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSIvPgo8cmVjdCB4PSI0MDAiIHk9IjEyMCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSIxNjAiIHJ4PSIxMCIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSIvPgo8L3N2Zz4K"
  },
  {
    id: 3,
    title: "Enhanced Coverage",
    subtitle: "Strong Signal Everywhere",
    description: "Benefit from improved signal strength and coverage area, ensuring consistent reception across Ireland.",
    icon: <Signal className="w-16 h-16 text-white" />,
    gradient: "from-blue-600 via-indigo-600 to-purple-600",
    image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InNsaWRlMyIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMyNTYzZWIiLz4KPHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiM0f46ZmQiLz4KPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjOGI1Y2Y2Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPHJlY3Qgd2lkdGg9IjYwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9InVybCgjc2xpZGUzKSIvPgo8cGF0aCBkPSJNMzAwIDEwMEwzNTAgMTUwTDMwMCAyMDBMMjUwIDE1MEwzMDAgMTAwWiIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpIi8+CjxjaXJjbGUgY3g9IjMwMCIgY3k9IjE1MCIgcj0iNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpIiBzdHJva2Utd2lkdGg9IjMiLz4KPGNpcmNsZSBjeD0iMzAwIiBjeT0iMTUwIiByPSI2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMykiIHN0cm9rZS13aWR0aD0iMyIvPgo8Y2lyY2xlIGN4PSIzMDAiIGN5PSIxNTAiIHI9IjgwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSIgc3Ryb2tlLXdpZHRoPSIzIi8+Cjwvc3ZnPgo="
  },
  {
    id: 4,
    title: "Free to Listeners",
    subtitle: "No Cost Radio",
    description: "Delivered free to listeners through transmitted signals, similar to the analogue FM service you know and trust.",
    icon: <Gift className="w-16 h-16 text-white" />,
    gradient: "from-purple-600 via-pink-600 to-rose-600",
    image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InNsaWRlNCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiM4YjVjZjYiLz4KPHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiNlYzQ4OTkiLz4KPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZjQzZjVlIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPHJlY3Qgd2lkdGg9IjYwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9InVybCgjc2xpZGU0KSIvPgo8cmVjdCB4PSIxMDAiIHk9IjEwMCIgd2lkdGg9IjQwMCIgaGVpZ2h0PSIyMDAiIHJ4PSIyMCIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSIvPgo8cmVjdCB4PSIxNDAiIHk9IjE0MCIgd2lkdGg9IjMyMCIgaGVpZ2h0PSIyMCIgcng9IjEwIiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMykiLz4KPHJlY3QgeD0iMTQwIiB5PSIxODAiIHdpZHRoPSIyNDAiIGhlaWdodD0iMjAiIHJ4PSIxMCIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KSIvPgo8cmVjdCB4PSIxNDAiIHk9IjIyMCIgd2lkdGg9IjE4MCIgaGVpZ2h0PSIyMCIgcng9IjEwIiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikiLz4KPC9zdmc+Cg=="
  },
  {
    id: 5,
    title: "Easy Integration",
    subtitle: "Simple Setup",
    description: "Many DAB+ enabled radios present services alongside FM stations with no need for setting changes or searches.",
    icon: <Smartphone className="w-16 h-16 text-white" />,
    gradient: "from-rose-600 via-orange-600 to-amber-600",
    image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InNsaWRlNSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNmNDNmNWUiLz4KPHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiNmOTczMTYiLz4KPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZjU5ZTBiIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPHJlY3Qgd2lkdGg9IjYwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9InVybCgjc2xpZGU1KSIvPgo8cmVjdCB4PSIyNTAiIHk9IjUwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjMwMCIgcng9IjIwIiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikiLz4KPHJlY3QgeD0iMjcwIiB5PSI4MCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjIwMCIgcng9IjEwIiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMykiLz4KPC9zdmc+Cg=="
  },
  {
    id: 6,
    title: "Future Ready",
    subtitle: "Broadcasting Evolution",
    description: "Be part of the technological advancement of radio in Ireland, supporting the future of broadcasting.",
    icon: <TrendingUp className="w-16 h-16 text-white" />,
    gradient: "from-amber-600 via-yellow-600 to-lime-600",
    image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InNsaWRlNiIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNmNTllMGIiLz4KPHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiNlYWI0MDgiLz4KPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjODRjYzE2Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPHJlY3Qgd2lkdGg9IjYwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9InVybCgjc2xpZGU2KSIvPgo8cGF0aCBkPSJNMTAwIDMwMEwyMDAgMjAwTDMwMCAyNTBMNDAwIDE1MEw1MDAgMTAwIiBzdHJva2U9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSIgc3Ryb2tlLXdpZHRoPSI0IiBmaWxsPSJub25lIi8+CjxjaXJjbGUgY3g9IjUwMCIgY3k9IjEwMCIgcj0iMTAiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KSIvPgo8L3N2Zz4K"
  }
];

export default function DABSlider() {
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
    <section className="relative h-[70vh] overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
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
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient} opacity-90`} />
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            
            <div className="relative h-full flex items-center justify-center">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="text-center lg:text-left space-y-8">
                    <div className="flex justify-center lg:justify-start mb-6">
                      {slide.icon}
                    </div>
                    
                    <div className="space-y-4">
                      <p className="text-teal-200 text-lg font-medium tracking-wide uppercase">
                        {slide.subtitle}
                      </p>
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                        {slide.title}
                      </h1>
                      <p className="text-xl text-gray-200 max-w-2xl leading-relaxed">
                        {slide.description}
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                      <Button 
                        size="lg" 
                        className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
                        onClick={() => window.location.href = '/dab-plus'}
                      >
                        <Volume2 className="mr-2 h-5 w-5" />
                        Learn About DAB+
                      </Button>
                      <Button 
                        variant="outline" 
                        size="lg"
                        className="border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 text-lg font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
                        onClick={() => window.location.href = '/coverage'}
                      >
                        <Mic className="mr-2 h-5 w-5" />
                        View Coverage Map
                      </Button>
                    </div>
                  </div>

                  <div className="hidden lg:flex justify-center">
                    <div className="relative">
                      <div className="w-80 h-80 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                        <div className="w-60 h-60 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center">
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
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white rounded-full backdrop-blur-sm"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white rounded-full backdrop-blur-sm"
        onClick={nextSlide}
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
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