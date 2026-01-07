import { useEffect, useState } from 'react';

export default function StartAnimation() {
  const [isVisible, setIsVisible] = useState(true);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    // Check if user has already seen the animation
    const hasVisited = sessionStorage.getItem('hasVisited');
    
    if (hasVisited) {
      setIsVisible(false);
      return;
    }

    // Stage 1: Logo reveal (0-800ms)
    const stage1 = setTimeout(() => setStage(1), 100);
    
    // Stage 2: Text reveal (800-1600ms)
    const stage2 = setTimeout(() => setStage(2), 900);
    
    // Stage 3: Glow effect (1600-2400ms)
    const stage3 = setTimeout(() => setStage(3), 1700);
    
    // Stage 4: Start fade out (2400ms)
    const stage4 = setTimeout(() => setStage(4), 2500);
    
    // Stage 5: Complete (3200ms)
    const complete = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem('hasVisited', 'true');
      window.dispatchEvent(new Event('startAnimationComplete'));
    }, 3200);

    return () => {
      clearTimeout(stage1);
      clearTimeout(stage2);
      clearTimeout(stage3);
      clearTimeout(stage4);
      clearTimeout(complete);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      data-start-animation
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
      style={{
        opacity: stage === 4 ? 0 : 1,
        transition: 'opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {/* Animated background grid */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          opacity: stage >= 1 ? 0.3 : 0,
          transition: 'opacity 0.8s ease-out',
        }}
      />

      {/* Radial gradient pulses */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 30% 40%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
          opacity: stage >= 2 ? 1 : 0,
          transition: 'opacity 0.6s ease-out',
        }}
      />
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 70% 60%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)',
          opacity: stage >= 2 ? 1 : 0,
          transition: 'opacity 0.6s ease-out 0.2s',
        }}
      />

      {/* Main content */}
      <div className="relative text-center">
        {/* Logo/Icon */}
        <div 
          className="flex justify-center mb-8"
          style={{
            opacity: stage >= 1 ? 1 : 0,
            transform: stage >= 1 ? 'scale(1) translateY(0)' : 'scale(0.8) translateY(20px)',
            transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
        >
          <div className="relative">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="intro-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor: '#3b82f6', stopOpacity: 1}} />
                  <stop offset="50%" style={{stopColor: '#a855f7', stopOpacity: 1}} />
                  <stop offset="100%" style={{stopColor: '#ec4899', stopOpacity: 1}} />
                </linearGradient>
                <linearGradient id="intro-gradient-glow" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor: '#60a5fa', stopOpacity: 0.8}} />
                  <stop offset="50%" style={{stopColor: '#c084fc', stopOpacity: 0.8}} />
                  <stop offset="100%" style={{stopColor: '#f472b6', stopOpacity: 0.8}} />
                </linearGradient>
              </defs>
              
              {/* Outer glow ring - appears in stage 3 */}
              <circle 
                cx="60" 
                cy="60" 
                r="55" 
                stroke="url(#intro-gradient-glow)" 
                strokeWidth="1" 
                fill="none"
                style={{
                  opacity: stage >= 3 ? 0.4 : 0,
                  transition: 'opacity 0.6s ease-out',
                }}
              />
              
              {/* Main ring */}
              <circle 
                cx="60" 
                cy="60" 
                r="50" 
                stroke="url(#intro-gradient)" 
                strokeWidth="3" 
                fill="none"
                style={{
                  strokeDasharray: 314,
                  strokeDashoffset: stage >= 1 ? 0 : 314,
                  transition: 'stroke-dashoffset 1s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              />
              
              {/* Center text */}
              <text 
                x="60" 
                y="72" 
                fontFamily="Montserrat, sans-serif" 
                fontSize="32" 
                fontWeight="700" 
                textAnchor="middle" 
                fill="url(#intro-gradient)"
                style={{
                  opacity: stage >= 1 ? 1 : 0,
                  transition: 'opacity 0.6s ease-out 0.4s',
                }}
              >
                WDA
              </text>
              
              {/* Corner accents */}
              <circle 
                cx="25" 
                cy="25" 
                r="3" 
                fill="url(#intro-gradient)"
                style={{
                  opacity: stage >= 2 ? 0.9 : 0,
                  transition: 'opacity 0.4s ease-out',
                }}
              />
              <circle 
                cx="95" 
                cy="25" 
                r="3" 
                fill="url(#intro-gradient)"
                style={{
                  opacity: stage >= 2 ? 0.9 : 0,
                  transition: 'opacity 0.4s ease-out 0.1s',
                }}
              />
              <circle 
                cx="25" 
                cy="95" 
                r="3" 
                fill="url(#intro-gradient)"
                style={{
                  opacity: stage >= 2 ? 0.9 : 0,
                  transition: 'opacity 0.4s ease-out 0.2s',
                }}
              />
              <circle 
                cx="95" 
                cy="95" 
                r="3" 
                fill="url(#intro-gradient)"
                style={{
                  opacity: stage >= 2 ? 0.9 : 0,
                  transition: 'opacity 0.4s ease-out 0.3s',
                }}
              />
            </svg>

            {/* Glow effect behind logo */}
            <div 
              className="absolute inset-0 blur-xl"
              style={{
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3), rgba(168, 85, 247, 0.3), transparent)',
                opacity: stage >= 3 ? 1 : 0,
                transition: 'opacity 0.8s ease-out',
              }}
            />
          </div>
        </div>

        {/* Main text */}
        <h1 
          className="text-5xl md:text-7xl font-black mb-4"
          style={{
            opacity: stage >= 2 ? 1 : 0,
            transform: stage >= 2 ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Web Design Agency
          </span>
        </h1>

        {/* Subtitle */}
        <p 
          className="text-xl md:text-2xl text-gray-400"
          style={{
            opacity: stage >= 2 ? 1 : 0,
            transform: stage >= 2 ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.15s',
          }}
        >
          Designing the Future
        </p>

        {/* Loading indicator */}
        <div 
          className="mt-12 flex justify-center"
          style={{
            opacity: stage >= 2 ? 1 : 0,
            transition: 'opacity 0.6s ease-out 0.3s',
          }}
        >
          <div className="flex gap-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
                style={{
                  animation: `pulse 1.5s ease-in-out infinite`,
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.3);
          }
        }
      `}</style>
    </div>
  );
}
