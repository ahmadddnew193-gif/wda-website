import { useRef, useState } from 'react';

const services = [
  {
    title: 'Web Development',
    description: 'Custom web applications built with modern frameworks and optimized performance.',
    icon: '💻',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that users love and remember.',
    icon: '🎨',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Brand Identity',
    description: 'Comprehensive branding solutions that make your business stand out.',
    icon: '✨',
    gradient: 'from-yellow-500 to-orange-500',
  },
];

export default function FuturisticServices() {
  const containerRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div 
      id="services" 
      className="relative bg-black py-32 px-6 overflow-hidden"
    >
      {/* Simplified background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/5 to-black pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div ref={containerRef}>
          {/* Header */}
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-500/5 border border-blue-500/20 text-blue-300 text-sm font-semibold mb-6">
              Our Services
            </span>

            <h2 className="text-5xl md:text-7xl font-black mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                What We Offer
              </span>
            </h2>

            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your needs
            </p>
          </div>

          {/* Services Grid - Pure CSS animations */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="service-card group relative p-8 rounded-2xl bg-gray-900/30 border border-gray-800 backdrop-blur-sm overflow-hidden cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onTouchStart={() => setHoveredIndex(index)}
                onTouchEnd={() => setHoveredIndex(null)}
              >
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6 text-3xl transition-transform duration-300 group-hover:scale-110`}
                >
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>

                {/* Arrow indicator */}
                <div
                  className={`absolute bottom-6 right-6 text-white transition-all duration-300 ${
                    hoveredIndex === index ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                  }`}
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .service-card {
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
                      border-color 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-8px);
          border-color: rgba(59, 130, 246, 0.3);
        }

        /* iPad touch optimization */
        @media (hover: none) and (pointer: coarse) {
          .service-card:active {
            transform: scale(0.98);
          }
        }
      `}</style>
    </div>
  );
}


