import { useState } from 'react';
import { ExternalLink, Code, ArrowRight } from 'lucide-react';

export default function FuturisticPortfolio() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="portfolio" className="relative py-20 md:py-32 bg-black">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black pointer-events-none" />
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDuration: '10s' }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
              <Code className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-400 font-medium">Our Work</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our latest creations - websites that combine stunning design with powerful functionality
          </p>
        </div>

        {/* Projects - Full Width Showcase Style */}
        <div className="max-w-5xl mx-auto space-y-12 md:space-y-20">
          
          {/* ========== PROJECT 1: WDA MALL ========== */}
          <a
            href="https://wda-mall.pages.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
            onMouseEnter={() => setHoveredId(1)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="relative">
              {/* Number Badge */}
              <div className="absolute -left-4 md:-left-8 top-0 text-6xl md:text-8xl font-bold text-blue-500/10 group-hover:text-blue-500/20 transition-colors duration-300">
                01
              </div>

              {/* Content Container */}
              <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-3xl overflow-hidden border border-gray-800/50 transition-all duration-500 group-hover:border-blue-500/40 group-hover:shadow-2xl group-hover:shadow-blue-500/20">
                
                {/* Top Section: Title + Tags */}
                <div className="p-6 md:p-8 border-b border-gray-800/50">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-3xl md:text-5xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                        WDA Mall
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">E-Commerce</span>
                        <span className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">React</span>
                        <span className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">Modern UI</span>
                      </div>
                    </div>
                    <div className={`flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium transition-all duration-300 ${hoveredId === 1 ? 'scale-105' : ''}`}>
                      <span>Visit Site</span>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Image + Description Section */}
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[300px] overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                    <img 
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 400'%3E%3Cdefs%3E%3ClinearGradient id='bg1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%230ea5e9;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%2306b6d4;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='600' height='400' fill='url(%23bg1)'/%3E%3Cg opacity='0.1'%3E%3Ccircle cx='150' cy='100' r='80' fill='white'/%3E%3Ccircle cx='450' cy='300' r='100' fill='white'/%3E%3C/g%3E%3Cg transform='translate(300, 200)'%3E%3Cpath d='M-40,-30 L-40,30 L40,30 L40,-30 Z' fill='white' opacity='0.9'/%3E%3Cpath d='M-30,-40 L0,-60 L30,-40 L30,-30 L-30,-30 Z' fill='white' opacity='0.95'/%3E%3Crect x='-25' y='-25' width='50' height='40' fill='%23059669' opacity='0.8'/%3E%3Cpath d='M-15,-15 L-15,5 M-5,-15 L-5,5 M5,-15 L5,5 M15,-15 L15,5' stroke='white' stroke-width='2'/%3E%3C/g%3E%3Ctext x='300' y='280' font-family='Arial, sans-serif' font-size='48' font-weight='bold' fill='white' text-anchor='middle' opacity='0.9'%3EWDA MALL%3C/text%3E%3C/svg%3E"
                      alt="WDA Mall"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent pointer-events-none" />
                    <div className={`absolute top-4 right-4 p-3 rounded-full bg-blue-500/80 backdrop-blur-sm transition-all duration-300 ${hoveredId === 1 ? 'opacity-100 scale-110' : 'opacity-0 scale-90'}`}>
                      <ExternalLink className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Description */}
                  <div className="p-6 md:p-8 flex flex-col justify-center bg-gradient-to-br from-gray-900/30 to-gray-800/30">
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      A modern e-commerce mall platform featuring stunning product showcases, smooth navigation, and an immersive shopping experience.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-blue-400 mt-2" />
                        <p className="text-gray-400">Responsive design optimized for all devices</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2" />
                        <p className="text-gray-400">Advanced product filtering and search</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-blue-400 mt-2" />
                        <p className="text-gray-400">Seamless checkout experience</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Bar */}
                <div className={`h-1 bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300 ${hoveredId === 1 ? 'opacity-100' : 'opacity-0'}`} />
              </div>
            </div>
          </a>

          {/* ========== PROJECT 2: RESTAURANT DEMO ========== */}
          <a
            href="https://wda-website-demo.pages.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
            onMouseEnter={() => setHoveredId(2)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="relative">
              {/* Number Badge */}
              <div className="absolute -left-4 md:-left-8 top-0 text-6xl md:text-8xl font-bold text-purple-500/10 group-hover:text-purple-500/20 transition-colors duration-300">
                02
              </div>

              {/* Content Container */}
              <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-3xl overflow-hidden border border-gray-800/50 transition-all duration-500 group-hover:border-purple-500/40 group-hover:shadow-2xl group-hover:shadow-purple-500/20">
                
                {/* Top Section: Title + Tags */}
                <div className="p-6 md:p-8 border-b border-gray-800/50">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-3xl md:text-5xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                        Restaurant Demo
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">Restaurant</span>
                        <span className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">Web Design</span>
                        <span className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">Interactive</span>
                      </div>
                    </div>
                    <div className={`flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium transition-all duration-300 ${hoveredId === 2 ? 'scale-105' : ''}`}>
                      <span>Visit Site</span>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Image + Description Section */}
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[300px] overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                    <img 
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 400'%3E%3Cdefs%3E%3ClinearGradient id='bg2' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23a855f7;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23ec4899;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='600' height='400' fill='url(%23bg2)'/%3E%3Cg opacity='0.1'%3E%3Ccircle cx='100' cy='300' r='90' fill='white'/%3E%3Ccircle cx='500' cy='100' r='110' fill='white'/%3E%3C/g%3E%3Cg transform='translate(220, 200)'%3E%3Cellipse cx='0' cy='0' rx='70' ry='50' fill='white' opacity='0.9'/%3E%3Cellipse cx='0' cy='-5' rx='60' ry='40' fill='%23ef4444' opacity='0.8'/%3E%3Crect x='-50' y='-2' width='100' height='8' fill='%23fbbf24' opacity='0.9' rx='2'/%3E%3Ccircle cx='-30' cy='0' r='8' fill='%2322c55e' opacity='0.8'/%3E%3Ccircle cx='30' cy='0' r='8' fill='%23ef4444' opacity='0.8'/%3E%3Ccircle cx='0' cy='-15' r='6' fill='%23fbbf24' opacity='0.8'/%3E%3C/g%3E%3Cg transform='translate(380, 200)'%3E%3Cpath d='M0,-60 L0,40' stroke='white' stroke-width='4' opacity='0.9'/%3E%3Cpath d='M-15,-50 Q-15,-60 -5,-60 L5,-60 Q15,-60 15,-50 L15,0 Q15,10 5,10 L-5,10 Q-15,10 -15,0 Z' fill='none' stroke='white' stroke-width='3' opacity='0.9'/%3E%3Cpath d='M-10,-55 L-10,-10 M-5,-55 L-5,-10 M0,-55 L0,-10 M5,-55 L5,-10 M10,-55 L10,-10' stroke='white' stroke-width='1.5' opacity='0.7'/%3E%3C/g%3E%3Ctext x='300' y='320' font-family='Arial, sans-serif' font-size='42' font-weight='bold' fill='white' text-anchor='middle' opacity='0.9'%3ERESTAURANT%3C/text%3E%3C/svg%3E"
                      alt="Restaurant Demo"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent pointer-events-none" />
                    <div className={`absolute top-4 right-4 p-3 rounded-full bg-purple-500/80 backdrop-blur-sm transition-all duration-300 ${hoveredId === 2 ? 'opacity-100 scale-110' : 'opacity-0 scale-90'}`}>
                      <ExternalLink className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Description */}
                  <div className="p-6 md:p-8 flex flex-col justify-center bg-gradient-to-br from-gray-900/30 to-gray-800/30">
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      An elegant restaurant website with beautiful menu displays, reservation system, and appetizing food photography.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-purple-400 mt-2" />
                        <p className="text-gray-400">Interactive menu with high-quality imagery</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-pink-400 mt-2" />
                        <p className="text-gray-400">Online reservation integration</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-purple-400 mt-2" />
                        <p className="text-gray-400">Mobile-optimized for on-the-go ordering</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Bar */}
                <div className={`h-1 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 ${hoveredId === 2 ? 'opacity-100' : 'opacity-0'}`} />
              </div>
            </div>
          </a>

        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 md:mt-24">
          <p className="text-gray-400 text-lg mb-6">
            Have a project in mind? Let's build something amazing together.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105 active:scale-95"
          >
            <span>Start Your Project</span>
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
