import { useEffect, useState } from 'react';

const codeSnippets = [
  'const design = () => { return magic; }',
  'function create() { /* innovate */ }',
  'class Web { constructor() {} }',
  'async build() { await deploy(); }',
  'export default Agency;',
  'import { creativity } from "wda";',
  'let innovation = true;',
  'const transform = (idea) => reality;',
  '{ design, develop, deploy }',
  'while(creating) { improve(); }',
  'if (vision) { execute(); }',
  'return <Excellence />;',
  'npm install creativity',
  'git commit -m "Ship it"',
  'yarn build && deploy',
  '<WebDesignAgency />',
  'const future = await build();',
  'styles={{ amazing: true }}',
  'onClick={() => innovate()}',
  'useEffect(() => { magic(); })',
];

export default function CodeBlocksBackground() {
  const [blocks, setBlocks] = useState<Array<{
    id: number;
    code: string;
    x: number;
    y: number;
    delay: number;
    duration: number;
    opacity: number;
  }>>([]);

  useEffect(() => {
    // Generate more code blocks for better visibility
    const generatedBlocks = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      code: codeSnippets[i % codeSnippets.length],
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 15 + Math.random() * 10,
      opacity: 0.08 + Math.random() * 0.12, // More visible
    }));

    setBlocks(generatedBlocks);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {/* Main gradient background matching logo colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-purple-950/20 to-pink-950/30" />

      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full filter blur-[120px] animate-float-slow" />
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-purple-500/20 rounded-full filter blur-[100px] animate-float-slower" />
      <div className="absolute bottom-0 left-1/3 w-[450px] h-[450px] bg-pink-500/15 rounded-full filter blur-[110px] animate-float-medium" />

      {/* Code blocks */}
      {blocks.map((block) => (
        <div
          key={block.id}
          className="absolute code-block font-mono text-xs md:text-sm whitespace-nowrap select-none"
          style={{
            left: `${block.x}%`,
            top: `${block.y}%`,
            animationDelay: `${block.delay}s`,
            animationDuration: `${block.duration}s`,
            opacity: block.opacity,
            color: block.id % 3 === 0 
              ? '#60a5fa' // blue-400
              : block.id % 3 === 1 
              ? '#c084fc' // purple-400
              : '#f472b6', // pink-400
            textShadow: block.id % 3 === 0 
              ? '0 0 20px rgba(96, 165, 250, 0.3)'
              : block.id % 3 === 1 
              ? '0 0 20px rgba(192, 132, 252, 0.3)'
              : '0 0 20px rgba(244, 114, 182, 0.3)',
          }}
        >
          {block.code}
        </div>
      ))}

      {/* Floating particles matching logo gradient */}
      {[...Array(12)].map((_, i) => (
        <div
          key={`particle-${i}`}
          className="absolute w-2 h-2 rounded-full particle-float"
          style={{
            left: `${5 + i * 8}%`,
            top: `${10 + (i * 7) % 80}%`,
            background: i % 3 === 0 
              ? '#3b82f6' 
              : i % 3 === 1 
              ? '#a855f7' 
              : '#ec4899',
            opacity: 0.3,
            boxShadow: i % 3 === 0 
              ? '0 0 20px rgba(59, 130, 246, 0.5)'
              : i % 3 === 1 
              ? '0 0 20px rgba(168, 85, 247, 0.5)'
              : '0 0 20px rgba(236, 72, 153, 0.5)',
            animationDelay: `${i * 0.7}s`,
            animationDuration: `${12 + i * 1.5}s`,
          }}
        />
      ))}

      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(96, 165, 250, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(96, 165, 250, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Diagonal lines for extra effect */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-blue-400/10 to-transparent transform rotate-12" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tl from-transparent via-purple-400/10 to-transparent transform -rotate-12" />
      </div>

      <style jsx>{`
        /* Optimized animations for iPad 7 */
        @keyframes float-code {
          0% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: var(--opacity, 0.15);
          }
          90% {
            opacity: var(--opacity, 0.15);
          }
          100% {
            transform: translate(30px, -150px) rotate(5deg);
            opacity: 0;
          }
        }

        @keyframes particle-drift {
          0% {
            transform: translate(0, 0) scale(0.5);
            opacity: 0;
          }
          20% {
            opacity: 0.3;
            transform: translate(20px, -40px) scale(1);
          }
          80% {
            opacity: 0.3;
          }
          100% {
            transform: translate(100px, -200px) scale(0.5);
            opacity: 0;
          }
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(50px, 50px);
          }
        }

        @keyframes float-slower {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-50px, 80px);
          }
        }

        @keyframes float-medium {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(60px, -40px);
          }
        }

        .code-block {
          animation: float-code linear infinite;
          will-change: transform, opacity;
          transform: translateZ(0);
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        .particle-float {
          animation: particle-drift linear infinite;
          will-change: transform, opacity;
          transform: translateZ(0);
          backface-visibility: hidden;
        }

        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite;
        }

        .animate-float-slower {
          animation: float-slower 25s ease-in-out infinite;
        }

        .animate-float-medium {
          animation: float-medium 22s ease-in-out infinite;
        }

        /* iPad 7 and touch device optimizations */
        @media (hover: none) and (pointer: coarse) {
          .code-block {
            animation-duration: 20s !important;
          }
          
          .particle-float {
            animation-duration: 18s !important;
          }
        }

        /* Reduce motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          .code-block,
          .particle-float,
          .animate-float-slow,
          .animate-float-slower,
          .animate-float-medium {
            animation: none !important;
            opacity: 0.05 !important;
          }
        }

        /* Performance optimization for mobile */
        @media (max-width: 768px) {
          .code-block {
            font-size: 0.65rem;
          }
        }
      `}</style>
    </div>
  );
}
