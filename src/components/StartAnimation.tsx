import { useEffect, useState } from 'react';

const codeLines = [
  'import { WebDesign } from "agency";',
  'const transform = (vision) => reality;',
  'async function build() {',
  '  await innovate();',
  '  return <Excellence />;',
  '}',
  'export default WDA;',
];

export default function StartAnimation() {
  const [show, setShow] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check session
    if (sessionStorage.getItem('hasVisited')) {
      setShow(false);
      return;
    }

    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    // Auto-hide after animation completes
    const timer = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem('hasVisited', 'true');
      window.dispatchEvent(new Event('startAnimationComplete'));
    }, 3000);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden">
      {/* Animated background matching site style */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-purple-950/20 to-pink-950/30" />
      
      {/* Floating code blocks */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {codeLines.map((line, i) => (
          <div
            key={i}
            className="absolute font-mono text-sm animate-float-code"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
              animationDelay: `${i * 0.2}s`,
              color: i % 3 === 0 ? '#60a5fa' : i % 3 === 1 ? '#c084fc' : '#f472b6',
              textShadow: i % 3 === 0 
                ? '0 0 20px rgba(96, 165, 250, 0.5)'
                : i % 3 === 1 
                ? '0 0 20px rgba(192, 132, 252, 0.5)'
                : '0 0 20px rgba(244, 114, 182, 0.5)',
            }}
          >
            {line}
          </div>
        ))}
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-[100px] animate-pulse" style={{ animationDelay: '0.5s' }} />
      
      {/* Main content */}
      <div className="relative z-10 text-center px-4">
        {/* Logo with gradient matching site */}
        <div className="mb-8 animate-scale-in">
          <svg width="120" height="120" viewBox="0 0 100 100" className="mx-auto drop-shadow-2xl">
            <defs>
              <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6">
                  <animate attributeName="stop-color" values="#3b82f6; #60a5fa; #3b82f6" dur="3s" repeatCount="indefinite" />
                </stop>
                <stop offset="50%" stopColor="#a855f7">
                  <animate attributeName="stop-color" values="#a855f7; #c084fc; #a855f7" dur="3s" repeatCount="indefinite" />
                </stop>
                <stop offset="100%" stopColor="#ec4899">
                  <animate attributeName="stop-color" values="#ec4899; #f472b6; #ec4899" dur="3s" repeatCount="indefinite" />
                </stop>
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Outer rotating circle */}
            <circle 
              cx="50" 
              cy="50" 
              r="45" 
              stroke="url(#logo-gradient)" 
              strokeWidth="2" 
              fill="none"
              strokeDasharray="283"
              strokeDashoffset="283"
              filter="url(#glow)"
              className="animate-draw-circle"
            />
            
            {/* Inner particles */}
            <g className="animate-spin-slow" style={{ transformOrigin: '50px 50px' }}>
              <circle cx="50" cy="15" r="2" fill="#3b82f6" opacity="0.6">
                <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="85" cy="50" r="2" fill="#a855f7" opacity="0.6">
                <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" begin="0.5s" />
              </circle>
              <circle cx="50" cy="85" r="2" fill="#ec4899" opacity="0.6">
                <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" begin="1s" />
              </circle>
              <circle cx="15" cy="50" r="2" fill="#60a5fa" opacity="0.6">
                <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" begin="1.5s" />
              </circle>
            </g>
            
            {/* WDA Text */}
            <text 
              x="50" 
              y="60" 
              fontFamily="Montserrat, sans-serif" 
              fontSize="24" 
              fontWeight="800" 
              textAnchor="middle" 
              fill="url(#logo-gradient)"
              filter="url(#glow)"
              className="animate-fade-in"
            >
              WDA
            </text>
          </svg>
        </div>

        {/* Loading text */}
        <div className="mb-6 animate-fade-in-delay">
          <p className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
            Web Design Agency
          </p>
          <p className="text-gray-400 text-sm">Initializing creative workspace...</p>
        </div>

        {/* Progress bar */}
        <div className="w-64 md:w-80 mx-auto animate-fade-in-delay-2">
          <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300 rounded-full"
              style={{ width: `${progress}%` }}
            >
              <div className="w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-2 font-mono">{progress}%</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-code {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.3;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(-100px) translateX(50px);
            opacity: 0;
          }
        }

        @keyframes scale-in {
          0% {
            transform: scale(0.8);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes draw-circle {
          0% {
            strokeDashoffset: 283;
          }
          100% {
            strokeDashoffset: 0;
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-float-code {
          animation: float-code 4s ease-in-out infinite;
        }

        .animate-scale-in {
          animation: scale-in 0.8s ease-out forwards;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards 0.3s;
          opacity: 0;
        }

        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out forwards 0.6s;
          opacity: 0;
        }

        .animate-fade-in-delay-2 {
          animation: fade-in 0.8s ease-out forwards 0.9s;
          opacity: 0;
        }

        .animate-draw-circle {
          animation: draw-circle 1.5s ease-out forwards;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }

        /* Reduce motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>
    </div>
  );
}
