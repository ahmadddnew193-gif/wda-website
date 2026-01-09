import { useRef, useState } from 'react';

export default function FuturisticAbout() {
  const containerRef = useRef(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const features = [
    {
      icon: '🎯',
      title: 'Precision Design',
      description: 'Pixel-perfect designs crafted with meticulous attention to detail',
      gradient: 'from-blue-500 to-cyan-500',
      glow: 'rgba(59, 130, 246, 0.3)',
    },
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Optimized performance for seamless user experiences',
      gradient: 'from-purple-500 to-pink-500',
      glow: 'rgba(168, 85, 247, 0.3)',
    },
    {
      icon: '🔒',
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and 99.9% uptime guarantee',
      gradient: 'from-cyan-500 to-blue-500',
      glow: 'rgba(34, 211, 238, 0.3)',
    },
    {
      icon: '🚀',
      title: 'Scalable Solutions',
      description: 'Built to grow with your business needs',
      gradient: 'from-pink-500 to-purple-500',
      glow: 'rgba(236, 72, 153, 0.3)',
    },
  ];

  return (
    <div 
      id="about" 
      className="relative bg-black py-32 px-6 overflow-hidden"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: 'perspective(1000px) rotateX(60deg) scale(2)',
            transformOrigin: 'center center',
          }}
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/5 to-black pointer-events-none" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="floating-particle absolute w-2 h-2 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 3 === 0 
                ? 'rgba(59, 130, 246, 0.4)' 
                : i % 3 === 1 
                ? 'rgba(168, 85, 247, 0.4)' 
                : 'rgba(34, 211, 238, 0.4)',
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div ref={containerRef}>
          {/* Header with enhanced styling */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-blue-500/30 mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-blue-300 text-sm font-bold tracking-wider">ABOUT US</span>
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>

            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
              <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 animate-gradient">
                Who We Are
              </span>
            </h2>

            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-4">
              We are a team of <span className="text-blue-400 font-semibold">passionate designers</span> and{' '}
              <span className="text-purple-400 font-semibold">innovative developers</span> dedicated to creating 
              exceptional digital experiences that push the boundaries of what's possible.
            </p>

            {/* Decorative line */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-500" />
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-purple-500" />
            </div>
          </div>

          {/* Enhanced Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="feature-card group relative"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* Card background with glassmorphism */}
                <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-900/30 border border-gray-800 backdrop-blur-xl overflow-hidden transition-all duration-300 group-hover:border-gray-700">
                  
                  {/* Hover glow effect */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, ${feature.glow}, transparent 70%)`,
                    }}
                  />

                  {/* Animated border gradient */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${feature.glow}, transparent)`,
                      borderRadius: '1rem',
                      padding: '1px',
                      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                    }}
                  />

                  {/* Content container */}
                  <div className="relative z-10">
                    {/* Icon with enhanced animation */}
                    <div className="relative inline-block mb-6">
                      <div 
                        className="text-6xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
                        style={{
                          filter: hoveredCard === index ? 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.6))' : 'none',
                        }}
                      >
                        {feature.icon}
                      </div>
                      
                      {/* Icon glow ring */}
                      <div 
                        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: `radial-gradient(circle, ${feature.glow}, transparent 70%)`,
                          transform: 'scale(1.5)',
                          filter: 'blur(20px)',
                        }}
                      />
                    </div>

                    {/* Title with gradient on hover */}
                    <h3 className={`text-2xl font-black mb-4 transition-all duration-300 ${
                      hoveredCard === index 
                        ? `text-transparent bg-clip-text bg-gradient-to-r ${feature.gradient}` 
                        : 'text-white'
                    }`}>
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed text-base group-hover:text-gray-300 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>

                  {/* Corner accents */}
                  <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-blue-500/0 group-hover:border-blue-500/50 transition-all duration-300" />
                  <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-purple-500/0 group-hover:border-purple-500/50 transition-all duration-300" />

                  {/* Scan line effect */}
                  <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent opacity-0 group-hover:opacity-100 scan-line" />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom decorative element */}
          <div className="flex items-center justify-center mt-20">
            <div className="flex items-center gap-2">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-blue-500" />
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" style={{ animationDelay: '0.3s' }} />
                <div className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" style={{ animationDelay: '0.6s' }} />
              </div>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-purple-500" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Optimized animations for all devices */
        .feature-card {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
          transform: translateZ(0);
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .feature-card:hover {
          transform: translateY(-12px) scale(1.02);
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .floating-particle {
          animation: float linear infinite;
          will-change: transform, opacity;
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.3;
          }
          25% {
            transform: translate(20px, -20px) scale(1.2);
            opacity: 0.6;
          }
          50% {
            transform: translate(-20px, -40px) scale(0.8);
            opacity: 0.4;
          }
          75% {
            transform: translate(-40px, -20px) scale(1.1);
            opacity: 0.5;
          }
        }

        .scan-line {
          animation: scan 2s ease-in-out infinite;
        }

        @keyframes scan {
          0%, 100% {
            transform: translateY(-100%);
          }
          50% {
            transform: translateY(300%);
          }
        }

        .animate-gradient {
          background-size: 200% auto;
          animation: gradient-shift 3s ease infinite;
        }

        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% center;
          }
          50% {
            background-position: 100% center;
          }
        }

        /* iPad 7 and mobile optimizations */
        @media (hover: none) and (pointer: coarse) {
          .feature-card:active {
            transform: scale(0.98);
            transition: transform 0.15s ease-out;
          }

          /* Disable complex animations on touch devices for better performance */
          .floating-particle {
            animation-duration: 20s;
          }

          .scan-line {
            display: none;
          }
        }

        /* Reduce motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          .feature-card,
          .floating-particle,
          .scan-line,
          .animate-gradient {
            animation: none !important;
            transition: none !important;
          }
          
          .feature-card {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* GPU acceleration hints */
        .feature-card,
        .floating-particle {
          will-change: transform;
        }

        /* Optimize for smaller screens */
        @media (max-width: 768px) {
          .feature-card {
            animation-duration: 0.6s;
          }
        }
      `}</style>
    </div>
  );
}
