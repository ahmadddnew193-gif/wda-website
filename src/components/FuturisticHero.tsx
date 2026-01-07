import { useRef } from 'react';

export default function FuturisticHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div 
      ref={containerRef} 
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      {/* Simplified gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-black to-black" />

      {/* Static grid - reduced opacity */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
          backgroundPosition: 'center',
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        {/* Badge */}
        <div className="mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-500/5 border border-blue-500/20 text-blue-300 text-sm font-semibold backdrop-blur-sm">
            <span>✨ Next-Gen Web Design Agency</span>
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6">
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-fade-in">
            Designing the
          </span>
          <br />
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Future of Web
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Immersive digital experiences powered by cutting-edge technology.
          <br />
          <span className="text-blue-400">We build the extraordinary.</span>
        </p>

        {/* CTA Buttons - Pure CSS optimized */}
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <button
            onClick={scrollToServices}
            className="hero-button relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Explore Services
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>

          <button
            onClick={scrollToPortfolio}
            className="hero-button-outline relative px-8 py-4 border-2 border-white/30 text-white font-bold rounded-full backdrop-blur-sm"
          >
            <span className="flex items-center justify-center gap-2">
              View Portfolio
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
              </svg>
            </span>
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="scroll-indicator flex flex-col items-center gap-2 text-gray-400">
            <span className="text-sm font-medium">Scroll to explore</span>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.5) 100%)',
        }}
      />

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(8px);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
          opacity: 0;
        }

        .scroll-indicator {
          animation: bounce 2s ease-in-out infinite;
        }

        /* Optimized button hover effects */
        .hero-button {
          transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hero-button:hover {
          transform: scale(1.05);
        }

        .hero-button:active {
          transform: scale(0.95);
        }

        .hero-button-outline {
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hero-button-outline:hover {
          transform: scale(1.05);
          border-color: rgba(255, 255, 255, 0.5);
          background-color: rgba(255, 255, 255, 0.05);
        }

        .hero-button-outline:active {
          transform: scale(0.95);
        }

        /* iPad touch optimization */
        @media (hover: none) and (pointer: coarse) {
          .hero-button:active,
          .hero-button-outline:active {
            transform: scale(0.95);
          }
        }
      `}</style>
    </div>
  );
}
