import { useRef, useState } from 'react';

export default function FuturisticContact() {
  const containerRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div 
      id="contact" 
      className="relative bg-black py-32 px-6 overflow-hidden"
    >
      {/* Simplified background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/5 to-black pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div ref={containerRef}>
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-purple-500/5 border border-purple-500/20 text-purple-300 text-sm font-semibold mb-6">
              Get In Touch
            </span>

            <h2 className="text-5xl md:text-7xl font-black mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                Let's Build Something
              </span>
            </h2>

            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Have a project in mind? We'd love to hear about it.
            </p>
          </div>

          {/* Contact Form - Pure CSS */}
          <div className="relative max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="contact-form space-y-6 p-8 rounded-2xl bg-gray-900/30 border border-gray-800 backdrop-blur-sm">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="contact-input w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 transition-all duration-200 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                  placeholder="Your name"
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="contact-input w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 transition-all duration-200 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                  placeholder="your@email.com"
                />
              </div>

              {/* Message Input */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="contact-input w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 transition-all duration-200 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || submitted}
                className="submit-button w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : submitted ? 'Message Sent! ✓' : 'Send Message'}
              </button>
            </form>

            {/* Contact Info */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="contact-info-card p-6 rounded-xl bg-gray-900/30 border border-gray-800 backdrop-blur-sm">
                <div className="text-3xl mb-3">📧</div>
                <h3 className="text-sm font-semibold text-gray-400 mb-1">Email</h3>
                <a href="mailto:hello@wda.com" className="text-white hover:text-purple-400 transition-colors duration-200">
                  hello@wda.com
                </a>
              </div>

              <div className="contact-info-card p-6 rounded-xl bg-gray-900/30 border border-gray-800 backdrop-blur-sm">
                <div className="text-3xl mb-3">📱</div>
                <h3 className="text-sm font-semibold text-gray-400 mb-1">Phone</h3>
                <a href="tel:+1234567890" className="text-white hover:text-purple-400 transition-colors duration-200">
                  +1 (234) 567-890
                </a>
              </div>

              <div className="contact-info-card p-6 rounded-xl bg-gray-900/30 border border-gray-800 backdrop-blur-sm">
                <div className="text-3xl mb-3">📍</div>
                <h3 className="text-sm font-semibold text-gray-400 mb-1">Location</h3>
                <p className="text-white">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-form {
          transition: transform 0.3s ease;
        }

        .contact-input:hover {
          border-color: rgba(168, 85, 247, 0.4);
        }

        .submit-button:not(:disabled):hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px -5px rgba(168, 85, 247, 0.4);
        }

        .submit-button:not(:disabled):active {
          transform: translateY(0);
        }

        .contact-info-card {
          transition: transform 0.3s ease, border-color 0.3s ease;
        }

        .contact-info-card:hover {
          transform: translateY(-4px);
          border-color: rgba(168, 85, 247, 0.3);
        }

        /* iPad touch optimization */
        @media (hover: none) and (pointer: coarse) {
          .submit-button:active {
            transform: scale(0.98);
          }
        }
      `}</style>
    </div>
  );
}
