import { useRef } from 'react';

export default function FuturisticPortfolio() {
  const containerRef = useRef(null);

  return (
    <div 
      id="portfolio" 
      className="relative bg-black py-32 px-6 overflow-hidden"
    >
      {/* Simplified background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/5 to-black pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div ref={containerRef}>
          {/* Header */}
          <div className="text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-purple-500/5 border border-purple-500/20 text-purple-300 text-sm font-semibold mb-6">
              Our Work
            </span>

            <h2 className="text-5xl md:text-7xl font-black mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                Portfolio
              </span>
            </h2>

            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Showcasing our creative solutions and expertise
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
