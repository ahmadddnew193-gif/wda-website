import { useState, useEffect } from 'react';
import { ExternalLink, Code, Smartphone } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'WDA Mall',
    description: 'A modern e-commerce mall platform featuring stunning product showcases, smooth navigation, and an immersive shopping experience.',
    image: '/api/placeholder/600/400',
    link: 'https://wda-mall.pages.dev/',
    tags: ['E-Commerce', 'React', 'Modern UI'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    title: 'Restaurant Demo',
    description: 'An elegant restaurant website with beautiful menu displays, reservation system, and appetizing food photography.',
    image: '/api/placeholder/600/400',
    link: 'https://wda-website-demo.pages.dev/',
    tags: ['Restaurant', 'Web Design', 'Interactive'],
    gradient: 'from-purple-500 to-pink-500',
  },
];

export default function FuturisticPortfolio() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('portfolio-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black" />
      
      {/* Subtle animated gradient orbs - optimized */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full filter blur-[80px] animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-500/10 rounded-full filter blur-[80px] animate-pulse" style={{ animationDuration: '10s' }} />

      <div id="portfolio-section" className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Card container with optimized hover effects */}
              <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl overflow-hidden border border-gray-800/50 transition-all duration-500 hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/10">
                {/* Gradient overlay on hover - optimized */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 transition-opacity duration-500 ${hoveredProject === project.id ? 'opacity-10' : ''}`} />

                {/* Image placeholder with gradient */}
                <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                  {/* Animated gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`} />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                  
                  {/* Icon indicator */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`p-6 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 transition-all duration-500 ${hoveredProject === project.id ? 'scale-110' : 'scale-100'}`}>
                      <Smartphone className="w-12 h-12 text-blue-400" />
                    </div>
                  </div>

                  {/* External link icon on hover */}
                  <div className={`absolute top-4 right-4 p-3 rounded-full bg-blue-500/90 backdrop-blur-sm transition-all duration-300 ${hoveredProject === project.id ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
                    <ExternalLink className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative p-6 md:p-8">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* CTA Button */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02] active:scale-95"
                  >
                    <span>Visit Website</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* Bottom gradient line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} transition-opacity duration-500 ${hoveredProject === project.id ? 'opacity-100' : 'opacity-0'}`} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '600ms' }}>
          <p className="text-gray-400 mb-6">
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

      <style jsx>{`
        /* Optimized animations for iPad 7 */
        @keyframes gentle-pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.5;
          }
        }

        /* Hardware acceleration */
        .group {
          transform: translateZ(0);
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        /* Reduce motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }

        /* Touch device optimizations */
        @media (hover: none) and (pointer: coarse) {
          .group:active {
            transform: scale(0.98);
          }
        }
      `}</style>
    </section>
  );
}
