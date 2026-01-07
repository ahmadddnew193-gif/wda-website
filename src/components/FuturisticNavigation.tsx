import { useState, useEffect } from 'react';

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/80 backdrop-blur-lg border-b border-gray-800'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo with Icon */}
            <button
              onClick={() => scrollToSection('#')}
              className="nav-logo flex items-center gap-3 group"
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
                  <circle cx="32" cy="32" r="28" stroke="url(#wda-nav-gradient)" strokeWidth="2" fill="none" opacity="0.3" className="group-hover:opacity-50 transition-opacity duration-300"/>
                  <text x="32" y="40" fontFamily="Montserrat, sans-serif" fontSize="20" fontWeight="700" textAnchor="middle" fill="url(#wda-nav-gradient)">WDA</text>
                  <circle cx="16" cy="16" r="2" fill="url(#wda-nav-gradient)" opacity="0.8"/>
                  <circle cx="48" cy="16" r="2" fill="url(#wda-nav-gradient)" opacity="0.8"/>
                  <circle cx="32" cy="52" r="2" fill="url(#wda-nav-gradient)" opacity="0.8"/>
                </svg>
              </div>
              <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 group-hover:from-blue-300 group-hover:to-purple-300 transition-all duration-300">
                W.D.A
              </span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="nav-link text-gray-300 font-semibold transition-all duration-200"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('#contact')}
                className="nav-cta px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full transition-all duration-200"
              >
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2 transition-transform duration-200 hover:scale-110"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-30 md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-black/95 backdrop-blur-lg" onClick={() => setIsMobileMenuOpen(false)} />
        <div className="relative flex flex-col items-center justify-center h-full gap-6 px-6">
          {navLinks.map((link, index) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="mobile-nav-link text-3xl font-bold text-white transition-all duration-200"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('#contact')}
            className="mobile-nav-cta mt-8 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full text-xl transition-all duration-200"
          >
            Get Started
          </button>
        </div>
      </div>

      <style jsx>{`
        .nav-logo {
          transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nav-logo:hover {
          transform: scale(1.05);
        }

        .nav-logo:active {
          transform: scale(0.95);
        }

        .nav-link {
          transition: color 0.2s ease, transform 0.2s ease;
        }

        .nav-link:hover {
          color: white;
          transform: translateY(-2px);
        }

        .nav-cta {
          transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1),
                      background 0.2s ease;
        }

        .nav-cta:hover {
          transform: scale(1.05);
          background: linear-gradient(to right, rgb(59, 130, 246), rgb(147, 51, 234));
        }

        .nav-cta:active {
          transform: scale(0.95);
        }

        .mobile-nav-link {
          transition: transform 0.2s ease, color 0.2s ease;
        }

        .mobile-nav-link:hover {
          transform: scale(1.1);
          color: rgb(96, 165, 250);
        }

        .mobile-nav-cta {
          transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .mobile-nav-cta:active {
          transform: scale(0.95);
        }

        /* iPad touch optimization */
        @media (hover: none) and (pointer: coarse) {
          .nav-logo:active,
          .nav-cta:active,
          .mobile-nav-cta:active {
            transform: scale(0.95);
          }
        }
      `}</style>
    </>
  );
}
