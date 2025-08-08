import { Radio, Map, RotateCcw } from "lucide-react";
import CoverageMap from "./coverage-map";

export default function CoverageSection() {
  return (
    <section id="coverage" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-800 mb-6">
              Comprehensive <span className="text-secondary">Coverage</span> Network
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our trial network consists of six high-power transmission sites providing overlapping and 
              synchronous coverage within the Leinster area, with potential expansion during the trial period.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Radio className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">6 Transmission Sites</h3>
                  <p className="text-gray-600">Strategically located high-power transmission points for optimal coverage.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Map className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Leinster Focus</h3>
                  <p className="text-gray-600">Initial coverage concentrating on the Leinster area with expansion potential.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <RotateCcw className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Synchronous Broadcasting</h3>
                  <p className="text-gray-600">Overlapping coverage ensures seamless listening experience across the network.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Interactive Coverage Map */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Live Coverage Map</h3>
              <p className="text-gray-600">Interactive map showing DAB+ transmission coverage areas across Ireland</p>
            </div>
            <CoverageMap />
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                Click on coverage areas for detailed transmission information
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
