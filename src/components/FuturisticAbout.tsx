import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function FuturisticAbout() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

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
              About Us
            </motion.span>

            <motion.h2
              className="text-5xl md:text-7xl font-black mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
                Who We Are
              </span>
            </motion.h2>

            <motion.p
              className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              We're a team of passionate designers and developers dedicated to creating 
              exceptional digital experiences. With years of expertise and a commitment 
              to innovation, we transform ideas into reality.
            </motion.p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="group p-8 rounded-2xl bg-gray-900/30 border border-gray-800 backdrop-blur-sm text-center cursor-pointer hover:border-blue-500/30 hover:bg-gray-900/50 transition-all"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Story Section */}
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <div className="p-10 rounded-3xl bg-gradient-to-br from-blue-900/10 to-purple-900/10 border border-blue-500/10 backdrop-blur-sm hover:border-blue-500/20 transition-all">
              <h3 className="text-3xl font-bold text-white mb-6 text-center">
                Our Mission
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed text-center mb-6">
                At W.D.A, we believe in the power of exceptional design and innovative 
                technology. Our mission is to help businesses thrive in the digital age 
                by creating stunning, high-performance websites and applications that 
                deliver results.
              </p>
              <div className="flex justify-center">
                <motion.button
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full hover:from-blue-500 hover:to-purple-500 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Let's Work Together
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
