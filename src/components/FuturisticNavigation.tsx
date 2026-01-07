import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useState } from 'react';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function FuturisticNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);

    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all ${
          isScrolled
            ? 'bg-black/80 backdrop-blur-lg border-b border-gray-800'
            : 'bg-transparent'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo with Icon */}
            <motion.button
              onClick={() => scrollToSection('#')}
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-10 h-10 flex items-center justify-center">
                <svg width="40" height="40" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="wda-nav-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor: '#3b82f6', stopOpacity: 1}} />
                      <stop offset="50%" style={{stopColor: '#a855f7', stopOpacity: 1}} />
                      <stop offset="100%" style={{stopColor: '#ec4899', stopOpacity: 1}} />
                    </linearGradient>
                  </defs>
                  <circle cx="32" cy="32" r="28" stroke="url(#wda-nav-gradient)" strokeWidth="2" fill="none" opacity="0.3" className="group-hover:opacity-50 transition-opacity"/>
                  <text x="32" y="40" fontFamily="Montserrat, sans-serif" fontSize="20" fontWeight="700" textAnchor="middle" fill="url(#wda-nav-gradient)">WDA</text>
                  <circle cx="16" cy="16" r="2" fill="url(#wda-nav-gradient)" opacity="0.8"/>
                  <circle cx="48" cy="16" r="2" fill="url(#wda-nav-gradient)" opacity="0.8"/>
                  <circle cx="32" cy="52" r="2" fill="url(#wda-nav-gradient)" opacity="0.8"/>
                </svg>
              </div>
              <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 group-hover:from-blue-300 group-hover:to-purple-300 transition-all">
                W.D.A
              </span>
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <motion.button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-300 font-semibold transition-colors hover:text-white"
                  whileHover={{ y: -2 }}
                >
                  {link.name}
                </motion.button>
              ))}
              <motion.button
                onClick={() => scrollToSection('#contact')}
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full hover:from-blue-500 hover:to-purple-500 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white"
              aria-label="Toggle menu"
              whileTap={{ scale: 0.9 }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="fixed inset-0 z-30 bg-black/95 backdrop-blur-lg md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-3xl font-bold text-white hover:text-blue-400 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
              </motion.button>
            ))}
            <motion.button
              onClick={() => scrollToSection('#contact')}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full hover:from-blue-500 hover:to-purple-500 transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </div>
        </motion.div>
      )}
    </>
  );
}
