import { useRef } from 'react';

export default function FuturisticAbout() {
  const containerRef = useRef(null);

  const features = [
    {
      icon: '🎯',
      title: 'Precision Design',
      description: 'Pixel-perfect designs crafted with meticulous attention to detail',
    },
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Optimized performance for seamless user experiences',
    },
    {
      icon: '🔒',
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and 99.9% uptime guarantee',
    },
    {
      icon: '🚀',
      title: 'Scalable Solutions',
      description: 'Built to grow with your business needs',
    },
  ];

  return (
    <div 
      id="about" 
      className="relative bg-black py-32 px-6 overflow-hidden"
    >
      {/* Simplified background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/5 to-black pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div ref={containerRef}>
          {/* Header */}
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-500/5 border border-blue-500/20 text-blue-300 text-sm font-semibold mb-6">
              About Us
            </span>

            <h2 className="text-5xl md:text-7xl font-black mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
                Who We Are
              </span>
            </h2>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              We are a team of passionate designers and developers dedicated to creating 
              exceptional digital experiences that push the boundaries of what's possible on the web.
            </p>
          </div>

          {/* Features Grid - Pure CSS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="feature-card group relative p-8 rounded-2xl bg-gray-900/30 border border-gray-800 backdrop-blur-sm overflow-hidden cursor-pointer"
              >
                {/* Icon */}
                <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110">
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .feature-card {
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
                      border-color 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-8px);
          border-color: rgba(59, 130, 246, 0.3);
        }

        /* iPad touch optimization */
        @media (hover: none) and (pointer: coarse) {
          .feature-card:active {
            transform: scale(0.98);
          }
        }
      `}</style>
    </div>
  );
}
