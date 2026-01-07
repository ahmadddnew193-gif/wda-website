import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateScrollProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / scrollHeight) * 100;
      setScrollProgress(progress);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollProgress);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateScrollProgress(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Progress Bar */}
      <div 
        className="fixed top-0 left-0 right-0 h-1 z-[9999] pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, #3b82f6, #a855f7, #ec4899)',
        }}
      >
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-150 ease-out"
          style={{
            width: `${scrollProgress}%`,
            boxShadow: '0 0 10px rgba(168, 85, 245, 0.5)',
          }}
        />
      </div>

      {/* Percentage Indicator - Positioned closer to scroll-to-top button */}
      <div 
        className="fixed bottom-28 right-20 z-[9998] pointer-events-none"
        style={{
          opacity: scrollProgress > 5 ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
      >
        <div className="relative">
          {/* Circular Progress */}
          <svg className="w-14 h-14 -rotate-90" viewBox="0 0 56 56">
            {/* Background circle */}
            <circle
              cx="28"
              cy="28"
              r="24"
              fill="rgba(0, 0, 0, 0.5)"
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="2"
            />
            {/* Progress circle */}
            <circle
              cx="28"
              cy="28"
              r="24"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 24}`}
              strokeDashoffset={`${2 * Math.PI * 24 * (1 - scrollProgress / 100)}`}
              style={{
                transition: 'stroke-dashoffset 0.15s ease-out',
                filter: 'drop-shadow(0 0 6px rgba(168, 85, 245, 0.6))',
              }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="50%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Percentage Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-xs font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {Math.round(scrollProgress)}%
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
