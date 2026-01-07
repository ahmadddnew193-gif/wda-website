import { useEffect, useRef, useState } from 'react';

export default function InteractiveBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [gradientPosition, setGradientPosition] = useState({ x: 50, y: 50 });
  const [isMobile, setIsMobile] = useState(false);
  const rafIdRef = useRef<number>();

  useEffect(() => {
    // Check if device is mobile/tablet
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    
    const resizeHandler = () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
      rafIdRef.current = requestAnimationFrame(checkMobile);
    };
    
    window.addEventListener('resize', resizeHandler, { passive: true });

    if (isMobile) {
      return () => {
        window.removeEventListener('resize', resizeHandler);
        if (rafIdRef.current) {
          cancelAnimationFrame(rafIdRef.current);
        }
      };
    }

    // Ultra-optimized mouse movement with requestAnimationFrame
    let ticking = false;
    let lastX = 50;
    let lastY = 50;

    const handleMouseMove = (e: MouseEvent) => {
      lastX = (e.clientX / window.innerWidth) * 100;
      lastY = (e.clientY / window.innerHeight) * 100;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          setGradientPosition({ x: lastX, y: lastY });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resizeHandler);
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [isMobile]);

  return (
    <>
      {/* Main background with color - GPU accelerated */}
      <div 
        className="fixed inset-0 bg-black z-0"
        style={{
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
        }}
      />
      
      {/* Interactive gradient background - Optimized */}
      <div
        ref={containerRef}
        className="fixed inset-0 pointer-events-none z-[1]"
        style={{
          background: isMobile
            ? `
              radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.25) 0%, transparent 35%),
              radial-gradient(circle at 80% 70%, rgba(147, 51, 234, 0.2) 0%, transparent 35%),
              radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.15) 0%, transparent 40%)
            `
            : `
              radial-gradient(circle 600px at ${gradientPosition.x}% ${gradientPosition.y}%, rgba(59, 130, 246, 0.25), rgba(147, 51, 234, 0.15) 40%, transparent 70%),
              radial-gradient(circle 400px at ${100 - gradientPosition.x}% ${100 - gradientPosition.y}%, rgba(168, 85, 247, 0.2), transparent 60%)
            `,
          transition: isMobile ? 'none' : 'background 0.15s ease-out',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          willChange: isMobile ? 'auto' : 'background',
        }}
      />
      
      {/* Animated grid overlay - GPU accelerated */}
      <div 
        className="fixed inset-0 pointer-events-none z-[1] opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
        }}
      />

      {/* Ambient light spots - GPU accelerated */}
      <div 
        className="fixed top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none z-[1]"
        style={{
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
        }}
      />
      <div 
        className="fixed bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none z-[1]"
        style={{
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
        }}
      />
    </>
  );
}
