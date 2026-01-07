import { motion } from 'framer-motion';

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
            <motion.div
              className="flex items-center gap-3 mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
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
            </motion.div>
            <motion.p
              className="text-gray-400 text-lg mb-6 max-w-md"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Creating extraordinary digital experiences that push the boundaries of design and technology.
            </motion.p>

            {/* Social Links */}
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="w-12 h-12 rounded-full bg-gray-900/50 border border-gray-800 flex items-center justify-center text-gray-400 hover:border-blue-500 hover:text-white hover:bg-blue-500/10 transition-all"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * (sectionIndex + 1) }}
            >
              <h4 className="text-white font-bold text-lg mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <motion.button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-white transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {link.name}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} W.D.A. All rights reserved.
          </p>
          <div className="flex gap-6">
            <motion.button
              onClick={() => scrollToSection('#')}
              className="text-gray-500 text-sm hover:text-white transition-colors"
              whileHover={{ y: -2 }}
            >
              Privacy Policy
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('#')}
              className="text-gray-500 text-sm hover:text-white transition-colors"
              whileHover={{ y: -2 }}
            >
              Terms of Service
            </motion.button>
          </div>
        </motion.div>

        {/* Scroll to Top Button - Positioned higher to not overlap with scroll progress */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-24 right-8 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-lg z-50"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>
      </div>
    </footer>
  );
}
