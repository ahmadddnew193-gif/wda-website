import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';

const services = [
  {
    title: "Web Design",
    description: "Stunning, user-centric designs that captivate and convert",
    gradient: "from-purple-600 to-pink-600",
    icon: "🎨",
    features: ["Responsive Design", "UI/UX", "Prototyping", "Design Systems"]
  },
  {
    title: "Development",
    description: "Cutting-edge code that brings your vision to life",
    gradient: "from-blue-600 to-cyan-600",
    icon: "💻",
    features: ["React/Next.js", "TypeScript", "API Integration", "Performance"]
  },
  {
    title: "Branding",
    description: "Distinctive identities that make lasting impressions",
    gradient: "from-orange-600 to-red-600",
    icon: "🚀",
    features: ["Logo Design", "Brand Strategy", "Style Guides", "Marketing"]
  },
  {
    title: "UI/UX Design",
    description: "Intuitive experiences that users love",
    gradient: "from-green-600 to-emerald-600",
    icon: "✨",
    features: ["User Research", "Wireframing", "Testing", "Optimization"]
  },
  {
    title: "E-Commerce",
    description: "Powerful online stores that drive sales",
    gradient: "from-violet-600 to-purple-600",
    icon: "🛍️",
    features: ["Shopify", "WooCommerce", "Payment Integration", "Analytics"]
  },
  {
    title: "Mobile Apps",
    description: "Native experiences for iOS and Android",
    gradient: "from-rose-600 to-pink-600",
    icon: "📱",
    features: ["React Native", "Cross-platform", "App Store", "Push Notifications"]
  }
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className={`relative h-80 rounded-2xl bg-gradient-to-br ${service.gradient} p-8 overflow-hidden transition-all duration-300`}>
        <motion.div
          className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"
        />
        <div className="relative z-10 h-full flex flex-col justify-between">
          <motion.div 
            className="text-6xl mb-4"
            whileHover={{ rotate: 360, scale: 1.2 }}
            transition={{ duration: 0.6 }}
          >
            {service.icon}
          </motion.div>
          <div>
            <h3 className="text-3xl font-bold text-white mb-3">{service.title}</h3>
            <p className="text-white/90 text-lg mb-4">{service.description}</p>
            
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ 
                height: isExpanded ? 'auto' : 0,
                opacity: isExpanded ? 1 : 0
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <ul className="space-y-1 text-white/80 text-sm">
                {service.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
            </motion.div>
            
            <button className="mt-4 text-white/90 text-sm font-semibold hover:text-white transition-colors">
              {isExpanded ? 'Show Less ↑' : 'Learn More →'}
            </button>
          </div>
        </div>
        
        {/* Animated corner accent */}
        <motion.div
          className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full"
          initial={{ scale: 0 }}
          whileHover={{ scale: 1 }}
          transition={{ duration: 0.4 }}
        />
      </div>
    </motion.div>
  );
}

export default function Services() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div id="services" ref={containerRef} className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <motion.h2 
          className="text-5xl md:text-7xl font-bold text-white text-center mb-4 font-heading"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Our Services
        </motion.h2>
        
        <motion.p 
          className="text-xl text-gray-400 text-center mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Swipe through our premium services. Click on any card to see more details.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mb-16"
        >
          <button
            onClick={scrollToContact}
            className="px-6 py-3 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition-colors"
          >
            Get a Quote →
          </button>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* Mobile Swiper Cards */}
        <motion.div 
          className="md:hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards, Autoplay]}
            className="w-full max-w-sm mx-auto"
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
          >
            {services.map((service) => (
              <SwiperSlide key={service.title}>
                <div className={`h-96 rounded-2xl bg-gradient-to-br ${service.gradient} p-8 flex flex-col justify-between shadow-2xl`}>
                  <div className="text-6xl mb-4">{service.icon}</div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-white/90 text-lg mb-4">{service.description}</p>
                    <ul className="space-y-1 text-white/80 text-sm">
                      {service.features.map((feature) => (
                        <li key={feature}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </motion.div>
    </div>
  );
}
