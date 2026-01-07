import { motion, useInView } from 'framer-motion';
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
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile solutions for iOS and Android.',
    icon: '📱',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'E-Commerce',
    description: 'Complete online store solutions with seamless shopping experiences.',
    icon: '🛒',
    gradient: 'from-pink-500 to-red-500',
  },
  {
    title: 'SEO Optimization',
    description: 'Strategic optimization to improve your search engine rankings.',
    icon: '🚀',
    gradient: 'from-green-500 to-emerald-500',
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
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
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
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.span 
              className="inline-block px-4 py-2 rounded-full bg-blue-500/5 border border-blue-500/20 text-blue-300 text-sm font-semibold mb-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              Our Services
            </motion.span>

            <motion.h2
              className="text-5xl md:text-7xl font-black mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                What We Offer
              </span>
            </motion.h2>

            <motion.p
              className="text-xl text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Comprehensive digital solutions tailored to your needs
            </motion.p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="group relative p-8 rounded-2xl bg-gray-900/30 border border-gray-800 backdrop-blur-sm overflow-hidden cursor-pointer hover:border-blue-500/30 transition-all"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ y: -8 }}
              >
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6 text-3xl`}
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
                <motion.div
                  className="absolute bottom-6 right-6 text-white"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ 
                    opacity: hoveredIndex === index ? 1 : 0,
                    x: hoveredIndex === index ? 0 : -10 
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
