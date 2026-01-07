import { useEffect, useState } from 'react';

export default function StartAnimation() {
  const [isVisible, setIsVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Check if user has already seen the animation
    const hasVisited = sessionStorage.getItem('hasVisited');
    
    if (hasVisited) {
      setIsVisible(false);
      return;
    }

    // Simple, fast animation
    const timer = setTimeout(() => {
      setFadeOut(true);
      
      setTimeout(() => {
        setIsVisible(false);
        sessionStorage.setItem('hasVisited', 'true');
        window.dispatchEvent(new Event('startAnimationComplete'));
      }, 800);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      data-start-animation
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black pointer-events-none"
      style={{
        opacity: fadeOut ? 0 : 1,
        transition: 'opacity 0.8s ease-out',
      }}
    >
      <div className="text-center">
        <h1
          className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
          style={{
            animation: 'fadeInScale 1s ease-out',
          }}
        >
          W.D.A
        </h1>
      </div>

      <style>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
