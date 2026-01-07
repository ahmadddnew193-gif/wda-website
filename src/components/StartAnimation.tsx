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

    // Stage 0->1: Initial reveal (0-400ms)
    const stage1 = setTimeout(() => setStage(1), 100);
    
    // Stage 1->2: Logo particles (400-1000ms)
    const stage2 = setTimeout(() => setStage(2), 500);
    
    // Stage 2->3: Hologram effect (1000-1800ms)
    const stage3 = setTimeout(() => setStage(3), 1100);
    
    // Stage 3->4: Full power (1800-2600ms)
    const stage4 = setTimeout(() => setStage(4), 1900);
    
    // Stage 4->5: Fade out (2600-3400ms)
    const stage5 = setTimeout(() => setStage(5), 2700);
    
    // Complete (3400ms)
    const complete = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem('hasVisited', 'true');
      window.dispatchEvent(new Event('startAnimationComplete'));
    }, 3500);

    return () => {
      clearTimeout(stage1);
      clearTimeout(stage2);
      clearTimeout(stage3);
      clearTimeout(stage4);
      clearTimeout(stage5);
      clearTimeout(complete);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      data-start-animation
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden"
      style={{
        opacity: stage === 5 ? 0 : 1,
        transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {/* Futuristic grid background */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          opacity: stage >= 2 ? 1 : 0,
          transform: stage >= 2 ? 'perspective(1000px) rotateX(60deg) scale(2)' : 'perspective(1000px) rotateX(60deg) scale(1.5)',
          transformOrigin: 'center center',
          transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      />

      {/* Scanning lines effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(59, 130, 246, 0.03) 2px, rgba(59, 130, 246, 0.03) 4px)',
          opacity: stage >= 3 ? 0.6 : 0,
          transition: 'opacity 0.6s ease-out',
        }}
      />

      {/* Energy rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full border-2"
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
              borderColor: `rgba(59, 130, 246, ${0.3 - i * 0.1})`,
              opacity: stage >= 2 ? 1 : 0,
              transform: stage >= 2 ? 'scale(1)' : 'scale(0)',
              transition: `all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 0.15}s`,
            }}
          />
        ))}
      </div>

      {/* Particle field */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 3 === 0 
                ? 'rgba(59, 130, 246, 0.8)' 
                : i % 3 === 1 
                ? 'rgba(168, 85, 247, 0.8)' 
                : 'rgba(236, 72, 153, 0.8)',
              opacity: stage >= 2 ? (stage >= 4 ? 0 : 1) : 0,
              transform: stage >= 2 
                ? `translate(${(Math.random() - 0.5) * 100}px, ${(Math.random() - 0.5) * 100}px) scale(${Math.random() * 2})` 
                : 'translate(0, 0) scale(0)',
              transition: `all ${1.2 + Math.random() * 0.5}s cubic-bezier(0.4, 0, 0.2, 1) ${Math.random() * 0.3}s`,
              boxShadow: stage >= 3 ? `0 0 10px currentColor` : 'none',
            }}
          />
        ))}
      </div>

      {/* Center hologram */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo container with holographic effect */}
        <div 
          className="relative mb-8"
          style={{
            opacity: stage >= 1 ? 1 : 0,
            transform: stage >= 1 ? 'scale(1) translateY(0)' : 'scale(0.5) translateY(50px)',
            transition: 'all 1s cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
        >
          {/* Hologram scan effect */}
          <div 
            className="absolute inset-0 overflow-hidden rounded-full"
            style={{
              opacity: stage >= 2 && stage < 4 ? 1 : 0,
            }}
          >
            <div
              className="absolute inset-x-0 h-8 bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent"
              style={{
                animation: stage >= 2 && stage < 4 ? 'scan 2s ease-in-out infinite' : 'none',
              }}
            />
          </div>

          {/* Main logo */}
          <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="futuristic-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#3b82f6', stopOpacity: 1}} />
                <stop offset="50%" style={{stopColor: '#a855f7', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: '#ec4899', stopOpacity: 1}} />
              </linearGradient>
              <linearGradient id="futuristic-glow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#60a5fa', stopOpacity: 1}} />
                <stop offset="50%" style={{stopColor: '#c084fc', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: '#f472b6', stopOpacity: 1}} />
              </linearGradient>
              
              {/* Animated gradient for energy effect */}
              <radialGradient id="energy-gradient">
                <stop offset="0%" style={{stopColor: '#60a5fa', stopOpacity: 0.8}} />
                <stop offset="100%" style={{stopColor: '#60a5fa', stopOpacity: 0}} />
              </radialGradient>
            </defs>
            
            {/* Outer energy ring - pulses in stage 3+ */}
            <circle 
              cx="90" 
              cy="90" 
              r="85" 
              stroke="url(#futuristic-glow)" 
              strokeWidth="2" 
              fill="none"
              style={{
                opacity: stage >= 3 ? 0.6 : 0,
                transition: 'opacity 0.6s ease-out',
                filter: 'blur(1px)',
              }}
            />
            
            {/* Middle ring with draw animation */}
            <circle 
              cx="90" 
              cy="90" 
              r="75" 
              stroke="url(#futuristic-gradient)" 
              strokeWidth="3" 
              fill="none"
              style={{
                strokeDasharray: 471,
                strokeDashoffset: stage >= 1 ? 0 : 471,
                transition: 'stroke-dashoffset 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            />
            
            {/* Inner glow ring */}
            <circle 
              cx="90" 
              cy="90" 
              r="70" 
              stroke="url(#futuristic-gradient)" 
              strokeWidth="1" 
              fill="none"
              opacity="0.3"
              style={{
                opacity: stage >= 2 ? 0.3 : 0,
                transition: 'opacity 0.6s ease-out',
              }}
            />
            
            {/* Hexagon frame */}
            <path
              d="M 90 25 L 130 50 L 130 100 L 90 125 L 50 100 L 50 50 Z"
              stroke="url(#futuristic-gradient)"
              strokeWidth="2"
              fill="none"
              style={{
                strokeDasharray: 300,
                strokeDashoffset: stage >= 2 ? 0 : 300,
                transition: 'stroke-dashoffset 1s cubic-bezier(0.4, 0, 0.2, 1) 0.3s',
              }}
            />
            
            {/* Center WDA text */}
            <text 
              x="90" 
              y="98" 
              fontFamily="Montserrat, sans-serif" 
              fontSize="38" 
              fontWeight="800" 
              textAnchor="middle" 
              fill="url(#futuristic-gradient)"
              style={{
                opacity: stage >= 2 ? 1 : 0,
                transition: 'opacity 0.6s ease-out 0.4s',
                filter: stage >= 3 ? 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.8))' : 'none',
              }}
            >
              WDA
            </text>
            
            {/* Corner tech accents */}
            {[
              { x: 35, y: 35 },
              { x: 145, y: 35 },
              { x: 35, y: 145 },
              { x: 145, y: 145 }
            ].map((pos, i) => (
              <g key={i}>
                <circle 
                  cx={pos.x} 
                  cy={pos.y} 
                  r="4" 
                  fill="url(#futuristic-gradient)"
                  style={{
                    opacity: stage >= 3 ? 1 : 0,
                    transition: `opacity 0.4s ease-out ${0.1 * i}s`,
                  }}
                />
                <circle 
                  cx={pos.x} 
                  cy={pos.y} 
                  r="8" 
                  stroke="url(#futuristic-gradient)" 
                  strokeWidth="1" 
                  fill="none"
                  style={{
                    opacity: stage >= 3 ? 0.4 : 0,
                    transition: `opacity 0.4s ease-out ${0.1 * i + 0.2}s`,
                  }}
                />
              </g>
            ))}
            
            {/* Energy core (center pulse) */}
            <circle 
              cx="90" 
              cy="90" 
              r="30" 
              fill="url(#energy-gradient)"
              style={{
                opacity: stage >= 4 ? 0.3 : 0,
                transition: 'opacity 0.6s ease-out',
              }}
            />
          </svg>

          {/* Outer glow effect */}
          <div 
            className="absolute inset-0 blur-2xl pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4), rgba(168, 85, 247, 0.3), transparent)',
              opacity: stage >= 4 ? 1 : 0,
              transform: stage >= 4 ? 'scale(1.2)' : 'scale(0.8)',
              transition: 'all 0.8s ease-out',
            }}
          />
        </div>

        {/* Text with glitch effect */}
        <div 
          className="relative"
          style={{
            opacity: stage >= 3 ? 1 : 0,
            transform: stage >= 3 ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
        >
          <h1 className="text-4xl md:text-6xl font-black text-center mb-4">
            <span 
              className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
              style={{
                textShadow: stage >= 4 ? '0 0 20px rgba(59, 130, 246, 0.5)' : 'none',
              }}
            >
              WEB DESIGN AGENCY
            </span>
          </h1>
          
          <p 
            className="text-lg md:text-xl text-center font-semibold"
            style={{
              color: 'rgba(59, 130, 246, 0.9)',
              textShadow: '0 0 10px rgba(59, 130, 246, 0.5)',
              letterSpacing: '0.3em',
            }}
          >
            INITIALIZING...
          </p>
        </div>

        {/* Status bar */}
        <div 
          className="absolute bottom-20 left-1/2 -translate-x-1/2 w-64"
          style={{
            opacity: stage >= 3 ? 1 : 0,
            transition: 'opacity 0.6s ease-out',
          }}
        >
          <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
              style={{
                width: stage >= 4 ? '100%' : stage >= 3 ? '60%' : '0%',
                transition: 'width 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 0 10px rgba(59, 130, 246, 0.6)',
              }}
            />
          </div>
        </div>
      </div>

      {/* Corner brackets (HUD style) */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          { top: '20px', left: '20px', rotate: '0deg' },
          { top: '20px', right: '20px', rotate: '90deg' },
          { bottom: '20px', left: '20px', rotate: '270deg' },
          { bottom: '20px', right: '20px', rotate: '180deg' },
        ].map((pos, i) => (
          <div
            key={i}
            className="absolute w-8 h-8"
            style={{
              ...pos,
              opacity: stage >= 2 ? 0.6 : 0,
              transition: `opacity 0.4s ease-out ${i * 0.1}s`,
              transform: `rotate(${pos.rotate})`,
            }}
          >
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-transparent" />
            <div className="absolute top-0 left-0 h-full w-0.5 bg-gradient-to-b from-blue-400 to-transparent" />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes scan {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(280%);
          }
        }
      `}</style>
    </div>
  );
}
