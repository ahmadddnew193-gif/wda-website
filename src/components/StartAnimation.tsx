import { useEffect, useState } from 'react';

export default function StartAnimation() {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if user has already seen the animation
    const hasVisited = sessionStorage.getItem('hasVisited');
    
    if (hasVisited) {
      setIsVisible(false);
      return;
    }

    // Simple progress animation
    const duration = 2500; // 2.5 seconds
    const startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      
      setProgress(newProgress);
      
      if (newProgress < 100) {
        requestAnimationFrame(animate);
      } else {
        // Complete animation
        setTimeout(() => {
          setIsVisible(false);
          sessionStorage.setItem('hasVisited', 'true');
          window.dispatchEvent(new Event('startAnimationComplete'));
        }, 300);
      }
    };
    
    // Start animation after small delay
    const timeout = setTimeout(() => {
      requestAnimationFrame(animate);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      data-start-animation
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
      style={{
        opacity: progress >= 100 ? 0 : 1,
        transition: 'opacity 0.3s ease-out',
      }}
    >
      {/* Animated gradient background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.3), rgba(168, 85, 247, 0.2), transparent)',
          animation: 'pulse 3s ease-in-out infinite',
        }}
      />

      {/* Grid background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10 flex flex-col items-center px-4">
        {/* Logo */}
        <div 
          className="mb-8 relative"
          style={{
            opacity: progress >= 10 ? 1 : 0,
            transform: progress >= 10 ? 'scale(1)' : 'scale(0.8)',
            transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
        >
          {/* Glow effect */}
          <div 
            className="absolute inset-0 blur-xl"
            style={{
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.6), transparent)',
              opacity: progress >= 50 ? 0.8 : 0,
              transition: 'opacity 0.6s ease-out',
            }}
          />

          {/* Logo SVG */}
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" className="relative z-10">
            <defs>
              <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#3b82f6'}} />
                <stop offset="50%" style={{stopColor: '#a855f7'}} />
                <stop offset="100%" style={{stopColor: '#ec4899'}} />
              </linearGradient>
            </defs>
            
            {/* Outer circle */}
            <circle 
              cx="60" 
              cy="60" 
              r="55" 
              stroke="url(#logo-grad)" 
              strokeWidth="2" 
              fill="none"
              strokeDasharray="345"
              strokeDashoffset={345 - (345 * progress / 100)}
              style={{ transition: 'stroke-dashoffset 0.1s linear' }}
            />
            
            {/* Inner hexagon */}
            <path
              d="M 60 20 L 90 35 L 90 65 L 60 80 L 30 65 L 30 35 Z"
              stroke="url(#logo-grad)"
              strokeWidth="2"
              fill="rgba(59, 130, 246, 0.1)"
              style={{
                opacity: progress >= 30 ? 1 : 0,
                transition: 'opacity 0.4s ease-out',
              }}
            />
            
            {/* WDA text */}
            <text 
              x="60" 
              y="68" 
              fontFamily="Montserrat, sans-serif" 
              fontSize="24" 
              fontWeight="800" 
              textAnchor="middle" 
              fill="url(#logo-grad)"
              style={{
                opacity: progress >= 40 ? 1 : 0,
                transition: 'opacity 0.4s ease-out',
              }}
            >
              WDA
            </text>
            
            {/* Corner dots */}
            {[
              { x: 20, y: 20 },
              { x: 100, y: 20 },
              { x: 20, y: 100 },
              { x: 100, y: 100 }
            ].map((pos, i) => (
              <circle 
                key={i}
                cx={pos.x} 
                cy={pos.y} 
                r="3" 
                fill="url(#logo-grad)"
                style={{
                  opacity: progress >= (60 + i * 5) ? 1 : 0,
                  transition: 'opacity 0.3s ease-out',
                }}
              />
            ))}
          </svg>
        </div>

        {/* Text */}
        <div 
          className="text-center mb-8"
          style={{
            opacity: progress >= 50 ? 1 : 0,
            transform: progress >= 50 ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease-out',
          }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Web Design Agency
            </span>
          </h1>
          <p className="text-blue-400 text-sm md:text-base tracking-widest">
            LOADING...
          </p>
        </div>

        {/* Progress bar */}
        <div 
          className="w-64 md:w-80 h-1 bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm"
          style={{
            opacity: progress >= 30 ? 1 : 0,
            transition: 'opacity 0.4s ease-out',
          }}
        >
          <div 
            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-lg shadow-blue-500/50"
            style={{
              width: `${progress}%`,
              transition: 'width 0.1s linear',
            }}
          />
        </div>

        {/* Percentage */}
        <div 
          className="mt-4 text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          style={{
            opacity: progress >= 30 ? 1 : 0,
            transition: 'opacity 0.4s ease-out',
          }}
        >
          {Math.floor(progress)}%
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.2; }
          50% { transform: scale(1.1); opacity: 0.3; }
        }
      `}</style>
    </div>
  );
}
