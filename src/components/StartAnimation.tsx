import { useEffect, useState } from 'react';

export default function StartAnimation() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Check session
    if (sessionStorage.getItem('hasVisited')) {
      setShow(false);
      return;
    }

    // Auto-hide after 2 seconds
    const timer = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem('hasVisited', 'true');
      window.dispatchEvent(new Event('startAnimationComplete'));
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
      {/* Simple logo with fade */}
      <div className="animate-pulse">
        <svg width="100" height="100" viewBox="0 0 100 100" className="drop-shadow-2xl">
          <defs>
            <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
          
          {/* Circle */}
          <circle cx="50" cy="50" r="45" stroke="url(#g)" strokeWidth="2" fill="none" />
          
          {/* WDA Text */}
          <text 
            x="50" 
            y="60" 
            fontFamily="Montserrat, sans-serif" 
            fontSize="22" 
            fontWeight="800" 
            textAnchor="middle" 
            fill="url(#g)"
          >
            WDA
          </text>
        </svg>
      </div>
    </div>
  );
}
