import { useEffect, useRef, useState } from 'react';

export default function InteractiveBackground() {
  const [gradientPosition, setGradientPosition] = useState({ x: 50, y: 50 });
  const [isMobile, setIsMobile] = useState(false);
  const rafRef = useRef<number>();
  const lastUpdateRef = useRef<number>(0);

  useEffect(() => {
    // Detect mobile/tablet
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024 || 'ontouchstart' in window);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });

    if (isMobile) {
      return () => window.removeEventListener('resize', checkMobile);
    }

    // Throttled mouse movement for better performance
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      
      // Throttle to ~60fps (16ms) for iPad optimization
      if (now - lastUpdateRef.current < 16) {
        return;
      }
      
      lastUpdateRef.current = now;
      
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        setGradientPosition({ x, y });
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkMobile);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [isMobile]);

  return (
    <>
      {/* Main background */}
      <div className="fixed inset-0 bg-black z-0" />
      
      {/* Interactive gradient - Optimized for iPad */}
      <div
        className="fixed inset-0 pointer-events-none z-[1]"
        style={{
          background: isMobile
            ? `radial-gradient(circle at 30% 40%, rgba(59, 130, 246, 0.2) 0%, transparent 50%),
               radial-gradient(circle at 70% 60%, rgba(147, 51, 234, 0.15) 0%, transparent 50%)`
            : `radial-gradient(circle 500px at ${gradientPosition.x}% ${gradientPosition.y}%, rgba(59, 130, 246, 0.2), transparent 60%),
               radial-gradient(circle 350px at ${100 - gradientPosition.x}% ${100 - gradientPosition.y}%, rgba(147, 51, 234, 0.15), transparent 50%)`,
          transition: 'background 0.4s ease-out',
          willChange: isMobile ? 'auto' : 'background',
        }}
      />
      
      {/* Simplified grid - Less intensive */}
      <div 
        className="fixed inset-0 pointer-events-none z-[1] opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)`,
          backgroundSize: '100px 100px',
        }}
      />

      {/* Simplified ambient lights */}
      <div className="fixed top-0 left-1/4 w-80 h-80 bg-blue-500/8 rounded-full blur-[100px] pointer-events-none z-[1]" />
      <div className="fixed bottom-0 right-1/4 w-80 h-80 bg-purple-500/8 rounded-full blur-[100px] pointer-events-none z-[1]" />
    </>
  );
}
