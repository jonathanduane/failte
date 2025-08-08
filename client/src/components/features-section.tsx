import { Music, List, Signal, Gift, Smartphone, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Music,
    title: "Digital Radio Evolution",
    description: "Experience the next generation of radio broadcasting with crystal-clear digital audio quality that transforms your listening experience.",
    color: "icon-gradient-blue",
    animation: "icon-bounce"
  },
  {
    icon: Signal,
    title: "Enhanced Coverage",
    description: "Transmitted signals provide superior coverage with high-power transmission sites across Ireland for consistent reception.",
    color: "icon-gradient-green",
    animation: "icon-pulse"
  },
  {
    icon: List,
    title: "Greater Choice",
    description: "Access a wider variety of radio stations and services, offering more content than ever before with diverse programming options.",
    color: "icon-gradient-purple",
    animation: "icon-float"
  },
  {
    icon: Gift,
    title: "Future Technology",
    description: "Be part of Ireland's transition to innovative broadcasting technology that represents the future of radio entertainment.",
    color: "icon-gradient-orange",
    animation: "icon-glow"
  }
];

export default function FeaturesSection() {
  console.log("FeaturesSection rendering with colorful cards");
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-neutral-800 mb-8">
            Everything You Need to Know
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Explore comprehensive information about the FáilteDAB trial
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const cardColors = [
              "bg-gradient-to-br from-blue-500 to-purple-600",
              "bg-gradient-to-br from-green-500 to-teal-600", 
              "bg-gradient-to-br from-purple-500 to-pink-600",
              "bg-gradient-to-br from-orange-500 to-red-600"
            ];
            return (
              <Card key={index} className={`hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 shadow-lg ${cardColors[index]}`}>
                <CardContent className="p-10">
                  <div className={`w-28 h-28 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-8 ${feature.animation} shadow-lg`}>
                    <IconComponent className="h-14 w-14 text-white" />
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-white">{feature.title}</h3>
                  <p className="text-lg lg:text-xl text-white/90 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
