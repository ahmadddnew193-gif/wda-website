import { ExternalLink } from 'lucide-react';

export default function FuturisticPortfolio() {
  return (
    <section id="portfolio" className="py-32 bg-black">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* Title */}
        <h2 className="text-5xl md:text-7xl font-bold text-center mb-20">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Our Projects
          </span>
        </h2>

        {/* Project 1 */}
        <div className="mb-32">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            WDA Mall
          </h3>
          <p className="text-gray-400 text-xl mb-8">
            Modern e-commerce platform with stunning design
          </p>
          <a
            href="https://wda-mall.pages.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold rounded-xl transition"
          >
            Visit WDA Mall
            <ExternalLink className="w-6 h-6" />
          </a>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-800 mb-32" />

        {/* Project 2 */}
        <div className="mb-32">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Restaurant Demo
          </h3>
          <p className="text-gray-400 text-xl mb-8">
            Elegant restaurant website with beautiful menus
          </p>
          <a
            href="https://wda-website-demo.pages.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-purple-600 hover:bg-purple-700 text-white text-lg font-bold rounded-xl transition"
          >
            Visit Restaurant Demo
            <ExternalLink className="w-6 h-6" />
          </a>
        </div>

      </div>
    </section>
  );
}
