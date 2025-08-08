export default function SystemsGraphic() {
  return (
    <div className="relative bg-gradient-to-br from-primary to-secondary rounded-2xl shadow-2xl overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 400 300">
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Main graphic */}
      <div className="relative p-8 h-96 flex items-center justify-center">
        <svg viewBox="0 0 500 400" className="w-full h-full">
          {/* FM Radio Broadcasting Towers */}
          <g>
            {/* Tower 1 - Lattice structure with FM antenna array */}
            <g>
              {/* Lattice tower structure */}
              <line x1="78" y1="330" x2="88" y2="330" stroke="white" strokeWidth="2" opacity="0.9"/>
              <line x1="78" y1="330" x2="83" y2="120" stroke="white" strokeWidth="2" opacity="0.9"/>
              <line x1="88" y1="330" x2="83" y2="120" stroke="white" strokeWidth="2" opacity="0.9"/>
              <line x1="80" y1="280" x2="86" y2="280" stroke="white" strokeWidth="1" opacity="0.7"/>
              <line x1="81" y1="230" x2="85" y2="230" stroke="white" strokeWidth="1" opacity="0.7"/>
              <line x1="82" y1="180" x2="84" y2="180" stroke="white" strokeWidth="1" opacity="0.7"/>
              
              {/* FM dipole antenna array */}
              <line x1="60" y1="140" x2="106" y2="140" stroke="white" strokeWidth="3" opacity="0.9"/>
              <line x1="65" y1="150" x2="101" y2="150" stroke="white" strokeWidth="2" opacity="0.8"/>
              <line x1="70" y1="160" x2="96" y2="160" stroke="white" strokeWidth="2" opacity="0.8"/>
              
              {/* Transmission equipment box */}
              <rect x="75" y="300" width="16" height="8" fill="white" fillOpacity="0.7" rx="2"/>
            </g>
            
            {/* Tower 2 - Main broadcast tower */}
            <g>
              <line x1="196" y1="330" x2="210" y2="330" stroke="white" strokeWidth="2" opacity="0.9"/>
              <line x1="196" y1="330" x2="203" y2="90" stroke="white" strokeWidth="3" opacity="0.9"/>
              <line x1="210" y1="330" x2="203" y2="90" stroke="white" strokeWidth="3" opacity="0.9"/>
              <line x1="198" y1="280" x2="208" y2="280" stroke="white" strokeWidth="1" opacity="0.7"/>
              <line x1="199" y1="230" x2="207" y2="230" stroke="white" strokeWidth="1" opacity="0.7"/>
              <line x1="200" y1="180" x2="206" y2="180" stroke="white" strokeWidth="1" opacity="0.7"/>
              <line x1="201" y1="130" x2="205" y2="130" stroke="white" strokeWidth="1" opacity="0.7"/>
              
              {/* Multi-level FM antenna system */}
              <line x1="175" y1="110" x2="231" y2="110" stroke="white" strokeWidth="4" opacity="0.9"/>
              <line x1="180" y1="125" x2="226" y2="125" stroke="white" strokeWidth="3" opacity="0.8"/>
              <line x1="185" y1="140" x2="221" y2="140" stroke="white" strokeWidth="3" opacity="0.8"/>
              <line x1="190" y1="155" x2="216" y2="155" stroke="white" strokeWidth="2" opacity="0.7"/>
              
              <rect x="193" y="300" width="20" height="12" fill="white" fillOpacity="0.7" rx="2"/>
            </g>
            
            {/* Tower 3 - Secondary broadcast tower */}
            <g>
              <line x1="316" y1="330" x2="330" y2="330" stroke="white" strokeWidth="2" opacity="0.9"/>
              <line x1="316" y1="330" x2="323" y2="110" stroke="white" strokeWidth="2" opacity="0.9"/>
              <line x1="330" y1="330" x2="323" y2="110" stroke="white" strokeWidth="2" opacity="0.9"/>
              <line x1="318" y1="280" x2="328" y2="280" stroke="white" strokeWidth="1" opacity="0.7"/>
              <line x1="319" y1="230" x2="327" y2="230" stroke="white" strokeWidth="1" opacity="0.7"/>
              <line x1="320" y1="180" x2="326" y2="180" stroke="white" strokeWidth="1" opacity="0.7"/>
              
              <line x1="300" y1="130" x2="346" y2="130" stroke="white" strokeWidth="3" opacity="0.9"/>
              <line x1="305" y1="145" x2="341" y2="145" stroke="white" strokeWidth="2" opacity="0.8"/>
              <line x1="310" y1="160" x2="336" y2="160" stroke="white" strokeWidth="2" opacity="0.8"/>
              
              <rect x="315" y="300" width="16" height="8" fill="white" fillOpacity="0.7" rx="2"/>
            </g>
            
            {/* Tower 4 - Auxiliary tower */}
            <g>
              <line x1="416" y1="330" x2="430" y2="330" stroke="white" strokeWidth="2" opacity="0.9"/>
              <line x1="416" y1="330" x2="423" y2="130" stroke="white" strokeWidth="2" opacity="0.9"/>
              <line x1="430" y1="330" x2="423" y2="130" stroke="white" strokeWidth="2" opacity="0.9"/>
              <line x1="418" y1="280" x2="428" y2="280" stroke="white" strokeWidth="1" opacity="0.7"/>
              <line x1="419" y1="230" x2="427" y2="230" stroke="white" strokeWidth="1" opacity="0.7"/>
              
              <line x1="405" y1="150" x2="441" y2="150" stroke="white" strokeWidth="3" opacity="0.9"/>
              <line x1="410" y1="165" x2="436" y2="165" stroke="white" strokeWidth="2" opacity="0.8"/>
              
              <rect x="415" y="300" width="16" height="8" fill="white" fillOpacity="0.7" rx="2"/>
            </g>
            
            {/* FM Signal waves */}
            <g stroke="white" strokeWidth="1" fill="none" opacity="0.4">
              <ellipse cx="83" cy="140" rx="30" ry="15"/>
              <ellipse cx="83" cy="140" rx="45" ry="22"/>
              <ellipse cx="203" cy="110" rx="35" ry="18"/>
              <ellipse cx="203" cy="110" rx="50" ry="25"/>
              <ellipse cx="323" cy="130" rx="25" ry="12"/>
              <ellipse cx="323" cy="130" rx="40" ry="20"/>
              <ellipse cx="423" cy="150" rx="20" ry="10"/>
              <ellipse cx="423" cy="150" rx="35" ry="17"/>
            </g>
          </g>

          {/* Network connections */}
          <g stroke="white" strokeWidth="2" fill="none" opacity="0.5">
            <path d="M83,140 Q150,100 203,110" strokeDasharray="5,5"/>
            <path d="M203,110 Q270,80 323,130" strokeDasharray="5,5"/>
            <path d="M323,130 Q380,120 423,150" strokeDasharray="5,5"/>
            <path d="M83,140 Q200,200 323,130" strokeDasharray="5,5"/>
          </g>

          {/* Digital elements */}
          <g fill="white" fillOpacity="0.8">
            <rect x="30" y="250" width="4" height="20" />
            <rect x="40" y="240" width="4" height="30" />
            <rect x="50" y="235" width="4" height="35" />
            <rect x="60" y="245" width="4" height="25" />
            
            <rect x="440" y="260" width="4" height="15" />
            <rect x="450" y="250" width="4" height="25" />
            <rect x="460" y="245" width="4" height="30" />
            <rect x="470" y="255" width="4" height="20" />
          </g>

          {/* Ireland outline (simplified) */}
          <path d="M 150 300 Q 180 280 220 290 Q 260 285 290 295 Q 320 300 340 320 Q 350 340 340 360 Q 320 375 290 370 Q 260 365 220 370 Q 180 375 150 360 Q 140 340 150 320 Z" 
                fill="none" 
                stroke="white" 
                strokeWidth="2" 
                opacity="0.4" 
                strokeDasharray="3,3"/>
        </svg>

        {/* Stats overlay */}
        <div className="absolute bottom-8 left-8 text-white">
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-4xl font-bold mb-2">1000+</div>
            <div className="text-lg font-medium mb-1">Systems Under Management</div>
            <div className="text-sm opacity-80">Nationwide Coverage</div>
          </div>
        </div>

        {/* Performance indicator */}
        <div className="absolute top-8 right-8 text-white">
          <div className="bg-green-500/20 backdrop-blur-sm rounded-lg p-4 border border-green-400/30">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Foothold Network</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}