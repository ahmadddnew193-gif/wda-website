import { useRef, useState } from 'react';

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Fashion Brand Website',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Fitness Tracking App',
    category: 'Mobile App',
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    title: 'SaaS Dashboard',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'Restaurant Booking',
    category: 'Mobile App',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    title: 'Portfolio Website',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
    gradient: 'from-pink-500 to-purple-500',
  },
];

export default function FuturisticPortfolio() {
  const containerRef = useRef(null);
  const [filter, setFilter] = useState('All');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const categories = ['All', 'Web Development', 'UI/UX Design', 'Mobile App'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div 
      id="portfolio" 
      className="relative bg-black py-32 px-6 overflow-hidden"
    >
      {/* Simplified background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/5 to-black pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div ref={containerRef}>
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-purple-500/5 border border-purple-500/20 text-purple-300 text-sm font-semibold mb-6">
              Our Work
            </span>

            <h2 className="text-5xl md:text-7xl font-black mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                Featured Projects
              </span>
            </h2>

            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
              Showcasing our best work and creative solutions
            </p>

            {/* Filter Buttons - Pure CSS */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`filter-button px-6 py-2 rounded-full font-semibold transition-all ${
                    filter === category
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                      : 'bg-gray-900/50 text-gray-400 border border-gray-800 hover:border-purple-500/30'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid - Pure CSS animations */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={project.title}
                className="project-card group relative rounded-2xl overflow-hidden bg-gray-900/30 border border-gray-800 cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onTouchStart={() => setHoveredIndex(index)}
                onTouchEnd={() => setHoveredIndex(null)}
              >
                {/* Image with overlay */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image w-full h-full object-cover transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20`} />

                  {/* View button on hover */}
                  <div
                    className={`absolute inset-0 flex items-center justify-center bg-black/50 transition-opacity duration-300 ${
                      hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full flex items-center gap-2 transition-all duration-300 hover:from-purple-500 hover:to-pink-500">
                      View Project
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-sm text-gray-400 font-semibold">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-2">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .filter-button {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .filter-button:active {
          transform: scale(0.95);
        }

        .project-card {
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
                      border-color 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-8px);
          border-color: rgba(168, 85, 247, 0.3);
        }

        .project-card:hover .project-image {
          transform: scale(1.1);
        }

        /* iPad touch optimization */
        @media (hover: none) and (pointer: coarse) {
          .project-card:active {
            transform: scale(0.98);
          }
        }
      `}</style>
    </div>
  );
}
