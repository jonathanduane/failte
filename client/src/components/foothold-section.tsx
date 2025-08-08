import { Radio, Users, BarChart3, Rocket } from "lucide-react";
import SystemsGraphic from "./systems-graphic";

export default function FootholdSection() {
  const capabilities = [
    {
      icon: Radio,
      title: "Introducing FáilteDAB",
      description: "FáilteDAB is part of the next step in the evolution of radio in Ireland. FáilteDAB is a temporary service, licensed by the communications regulator ComReg, as part of the DAB+ trial. It operates under a trial broadcasting license.",
      color: "icon-gradient-teal",
      animation: "icon-float"
    },
    {
      icon: Users,
      title: "What is the DAB+ Trial",
      description: "The DAB+ trial is a temporary service, licensed by the communications regulator ComReg, as part of the DAB+ trial. It operates under a trial broadcasting license.",
      color: "icon-gradient-green",
      animation: "icon-pulse"
    },
    {
      icon: BarChart3,
      title: "The Power Behind FáilteDAB",
      description: "FáilteDAB is the public facing name of the DAB+ trial, which is being conducted by Foothold Communications Limited. Foothold Communications is a prominent Irish company specializing in telecommunications and radio broadcasting systems.",
      color: "icon-gradient-blue",
      animation: "icon-bounce"
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Custom systems graphic */}
          <SystemsGraphic />
          
          <div>
            <div className="space-y-10">
              {capabilities.map((capability, index) => {
                const IconComponent = capability.icon;
                return (
                  <div key={index} className="flex items-start space-x-6">
                    <div className={`w-20 h-20 ${capability.color} rounded-2xl flex items-center justify-center flex-shrink-0 ${capability.animation} shadow-lg`}>
                      <IconComponent className="h-10 w-10 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-neutral-800">{capability.title}</h3>
                      <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">{capability.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
