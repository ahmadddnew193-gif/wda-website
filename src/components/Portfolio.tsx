import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const projects = [
  {
    id: 'techstart',
    title: "TechStart",
    category: "SaaS Platform",
    description: "Revolutionary platform transforming how startups scale",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    color: "from-purple-600 to-blue-600",
    year: "2024",
    link: "#"
  },
  {
    id: 'luxehomes',
    title: "LuxeHomes",
    category: "Real Estate",
    description: "Premium real estate marketplace with AR integration",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    color: "from-orange-600 to-pink-600",
    year: "2024",
    link: "#"
  },
  {
    id: 'fitpro',
    title: "FitPro",
    category: "Health & Fitness",
    description: "AI-powered fitness app with personalized workouts",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    color: "from-green-600 to-teal-600",
    year: "2023",
    link: "#"
  },
  {
    id: 'cheftable',
    title: "ChefTable",
    category: "Food & Dining",
    description: "Connecting food lovers with private chefs",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    color: "from-red-600 to-yellow-600",
    year: "2023",
    link: "#"
  },
  {
    id: 'artverse',
    title: "ArtVerse",
    category: "NFT Marketplace",
    description: "Next-gen NFT platform for digital artists",
    image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=800&q=80",
    color: "from-violet-600 to-purple-600",
    year: "2023",
    link: "#"
  },
  {
    id: 'ecotrack',
    title: "EcoTrack",
    category: "Sustainability",
    description: "Carbon footprint tracking and offsetting platform",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
    color: "from-emerald-600 to-green-600",
    year: "2023",
    link: "#"
  }
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const handleClick = () => {
    // Open project case study (can be expanded to route to detail page)
    console.log(`Opening case study for ${project.title}`);
    alert(`Case Study: ${project.title}\n\nCategory: ${project.category}\nYear: ${project.year}\n\n${project.description}\n\nThis would typically open a detailed case study page with more information about the project, including challenges, solutions, and results.`);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="relative group cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <motion.div
        className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Background Image */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${project.image})` }}
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.6 }}
        />

        {/* Gradient Overlay */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-80`}
          animate={{ opacity: isHovered ? 0.95 : 0.8 }}
          transition={{ duration: 0.3 }}
        />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-between p-8">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex justify-between items-start"
          >
            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-semibold">
              {project.year}
            </span>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.p 
              className="text-white/80 text-sm uppercase tracking-wider mb-2"
              animate={{ x: isHovered ? 10 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {project.category}
            </motion.p>
            <motion.h3 
              className="text-4xl font-bold text-white mb-4"
              animate={{ x: isHovered ? 10 : 0 }}
              transition={{ duration: 0.3, delay: 0.05 }}
            >
              {project.title}
            </motion.h3>
            <motion.p 
              className="text-white/90 text-lg mb-6"
              animate={{ 
                x: isHovered ? 10 : 0,
                opacity: isHovered ? 1 : 0.8
              }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {project.description}
            </motion.p>

            <motion.button
              className="px-6 py-3 bg-white text-black rounded-full font-semibold inline-flex items-center gap-2"
              animate={{ 
                x: isHovered ? 10 : 0,
                scale: isHovered ? 1.05 : 1
              }}
              transition={{ duration: 0.3 }}
              whileTap={{ scale: 0.95 }}
            >
              View Case Study →
            </motion.button>
          </motion.div>
        </div>

        {/* Animated border */}
        <motion.div
          className="absolute inset-0 border-4 border-white/0 rounded-3xl"
          animate={{ borderColor: isHovered ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0)" }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
}

export default function Portfolio() {
  const containerRef = useRef(null);
  const [filter, setFilter] = useState('all');
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const categories = ['all', 'SaaS Platform', 'Real Estate', 'Health & Fitness', 'Food & Dining', 'NFT Marketplace', 'Sustainability'];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div id="portfolio" ref={containerRef} className="min-h-screen bg-black py-20 px-6 relative overflow-hidden">
      {/* Background animated elements */}
      <motion.div
        className="absolute top-20 right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"
        style={{ y }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl md:text-7xl font-bold text-white mb-4 font-heading"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false }}
          >
            Explore our latest work that's pushing the boundaries of digital innovation
          </motion.p>

          {/* Filter buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false }}
            className="flex flex-wrap gap-3 justify-center"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  filter === category 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-white/10 text-gray-400 hover:bg-white/20 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category === 'all' ? 'All Projects' : category}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-gray-400 text-xl">No projects found in this category.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
