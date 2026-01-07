const socialLinks = [
  { name: 'Twitter', icon: '𝕏', href: '#' },
  { name: 'LinkedIn', icon: 'in', href: '#' },
  { name: 'Instagram', icon: '📷', href: '#' },
  { name: 'GitHub', icon: '💻', href: '#' },
  { name: 'Dribbble', icon: '🏀', href: '#' },
];

const footerLinks = [
  {
    title: 'Services',
    links: [
      { name: 'Web Development', href: '#services' },
      { name: 'UI/UX Design', href: '#services' },
      { name: 'Mobile Apps', href: '#services' },
      { name: 'E-Commerce', href: '#services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '#about' },
      { name: 'Portfolio', href: '#portfolio' },
      { name: 'Contact', href: '#contact' },
      { name: 'Careers', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Blog', href: '#' },
      { name: 'Case Studies', href: '#' },
      { name: 'FAQ', href: '#' },
      { name: 'Support', href: '#' },
    ],
  },
];

export default function FuturisticFooter() {
  const scrollToSection = (href: string) => {
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
    <footer className="relative bg-black pt-24 pb-12 px-6 overflow-hidden border-t border-gray-900">
      {/* Simplified background */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/5 to-black pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Section with Icon */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 flex items-center justify-center">
                <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="wda-footer-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor: '#3b82f6', stopOpacity: 1}} />
                      <stop offset="50%" style={{stopColor: '#a855f7', stopOpacity: 1}} />
                      <stop offset="100%" style={{stopColor: '#ec4899', stopOpacity: 1}} />
                    </linearGradient>
                  </defs>
                  <circle cx="32" cy="32" r="28" stroke="url(#wda-footer-gradient)" strokeWidth="2" fill="none" opacity="0.3"/>
                  <text x="32" y="40" fontFamily="Montserrat, sans-serif" fontSize="20" fontWeight="700" textAnchor="middle" fill="url(#wda-footer-gradient)">WDA</text>
                  <circle cx="16" cy="16" r="2" fill="url(#wda-footer-gradient)" opacity="0.8"/>
                  <circle cx="48" cy="16" r="2" fill="url(#wda-footer-gradient)" opacity="0.8"/>
                  <circle cx="32" cy="52" r="2" fill="url(#wda-footer-gradient)" opacity="0.8"/>
                </svg>
              </div>
              <h3 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                W.D.A
              </h3>
            </div>
            <p className="text-gray-400 text-lg mb-6 max-w-md">
              Creating extraordinary digital experiences that push the boundaries of design and technology.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="social-link w-12 h-12 rounded-full bg-gray-900/50 border border-gray-800 flex items-center justify-center text-gray-400 transition-all duration-200"
                >
                  <span className="text-xl">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-bold text-lg mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="footer-link text-gray-400 transition-colors duration-200"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mb-16 p-8 rounded-2xl bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-gray-800">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
            <p className="text-gray-400 mb-6">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form className="flex gap-4 flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter-input flex-1 px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 transition-all duration-200 focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="newsletter-button px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg transition-all duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} W.D.A. All rights reserved.
          </p>
          <div className="flex gap-6">
            <button onClick={() => scrollToSection('#')} className="footer-link text-gray-500 text-sm transition-colors duration-200">
              Privacy Policy
            </button>
            <button onClick={() => scrollToSection('#')} className="footer-link text-gray-500 text-sm transition-colors duration-200">
              Terms of Service
            </button>
            <button onClick={() => scrollToSection('#')} className="footer-link text-gray-500 text-sm transition-colors duration-200">
              Cookie Policy
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .social-link:hover {
          transform: translateY(-4px);
          background: rgba(59, 130, 246, 0.1);
          border-color: rgba(59, 130, 246, 0.3);
          color: white;
        }

        .footer-link:hover {
          color: white;
        }

        .newsletter-input:hover {
          border-color: rgba(59, 130, 246, 0.4);
        }

        .newsletter-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.4);
        }

        .newsletter-button:active {
          transform: translateY(0);
        }

        /* iPad touch optimization */
        @media (hover: none) and (pointer: coarse) {
          .social-link:active {
            transform: scale(0.95);
          }
          
          .newsletter-button:active {
            transform: scale(0.98);
          }
        }
      `}</style>
    </footer>
  );
}
