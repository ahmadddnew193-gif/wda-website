import { motion } from 'framer-motion';

const footerLinks = {
  services: [
    { name: 'Web Design', href: '#services' },
    { name: 'Development', href: '#services' },
    { name: 'Branding', href: '#services' },
    { name: 'UI/UX Design', href: '#services' }
  ],
  company: [
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Careers', href: '#careers' },
    { name: 'Contact', href: '#contact' }
  ],
  social: [
    { name: 'Twitter', href: 'https://twitter.com' },
    { name: 'LinkedIn', href: 'https://linkedin.com' },
    { name: 'Instagram', href: 'https://instagram.com' },
    { name: 'Dribbble', href: 'https://dribbble.com' }
  ]
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <footer className="bg-black border-t border-purple-500/20 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-3xl font-bold text-white mb-4 cursor-pointer"
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
            >
              W.D.A
            </motion.h3>
            <p className="text-gray-400 mb-4">
              Crafting exceptional digital experiences since 2020
            </p>
            <motion.button
              onClick={scrollToTop}
              className="text-purple-400 hover:text-purple-300 text-sm font-semibold"
              whileHover={{ x: 5 }}
            >
              Back to Top ↑
            </motion.button>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              {footerLinks.services.map((item) => (
                <motion.li
                  key={item.name}
                  whileHover={{ x: 5, color: '#a855f7' }}
                  className="cursor-pointer transition-colors"
                >
                  <a 
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              {footerLinks.company.map((item) => (
                <motion.li
                  key={item.name}
                  whileHover={{ x: 5, color: '#a855f7' }}
                  className="cursor-pointer transition-colors"
                >
                  <a 
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-bold mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-400">
              {footerLinks.social.map((item) => (
                <motion.li
                  key={item.name}
                  whileHover={{ x: 5, color: '#a855f7' }}
                  className="cursor-pointer transition-colors"
                >
                  <a 
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
            
            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-gray-400 text-sm mb-2">Stay updated</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-3 py-2 bg-white/5 border border-purple-500/20 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-purple-500 flex-1"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      alert('Thank you for subscribing! (Demo)');
                      (e.target as HTMLInputElement).value = '';
                    }
                  }}
                />
                <motion.button
                  className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const input = document.querySelector('input[type="email"]') as HTMLInputElement;
                    if (input?.value) {
                      alert('Thank you for subscribing! (Demo)');
                      input.value = '';
                    }
                  }}
                >
                  →
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-purple-500/20 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-400 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} W.D.A. All rights reserved. Built with passion and precision.
          </p>
          
          <div className="flex gap-6 text-gray-400 text-sm">
            <motion.a 
              href="#privacy" 
              className="hover:text-purple-400 transition-colors"
              whileHover={{ y: -2 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a 
              href="#terms" 
              className="hover:text-purple-400 transition-colors"
              whileHover={{ y: -2 }}
            >
              Terms of Service
            </motion.a>
            <motion.a 
              href="#cookies" 
              className="hover:text-purple-400 transition-colors"
              whileHover={{ y: -2 }}
            >
              Cookies
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
