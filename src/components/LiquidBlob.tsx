import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LiquidBlobProps {
  color?: string;
  size?: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  blur?: number;
  opacity?: number;
}

export default function LiquidBlob({ 
  color = 'blue',
  size = 400,
  top,
  left,
  right,
  bottom,
  blur = 120,
  opacity = 0.3
}: LiquidBlobProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    if (isMobile) {
      return () => window.removeEventListener('resize', checkMobile);
    }

    let rafId: number;
    const handleMouseMove = (e: MouseEvent) => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }

      rafId = requestAnimationFrame(() => {
        setMousePosition({
          x: e.clientX / window.innerWidth,
          y: e.clientY / window.innerHeight,
        });
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkMobile);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [isMobile]);

  const getColorClass = () => {
    const colors: { [key: string]: string } = {
      blue: 'bg-blue-500',
      purple: 'bg-purple-500',
      pink: 'bg-pink-500',
      cyan: 'bg-cyan-500',
      green: 'bg-green-500',
      orange: 'bg-orange-500',
    };
    return colors[color] || colors.blue;
  };

  return (
    <motion.div
      className={`absolute ${getColorClass()} rounded-full pointer-events-none`}
      style={{
        width: size,
        height: size,
        top,
        left,
        right,
        bottom,
        filter: `blur(${blur}px)`,
        opacity,
      }}
      animate={isMobile ? {
        scale: [1, 1.2, 1, 0.9, 1],
        rotate: [0, 90, 180, 270, 360],
        borderRadius: ['40%', '50%', '60%', '50%', '40%'],
      } : {
        scale: [1, 1.1, 1, 1.05, 1],
        x: mousePosition.x * 50 - 25,
        y: mousePosition.y * 50 - 25,
        rotate: [0, 90, 180, 270, 360],
        borderRadius: [
          '60% 40% 30% 70%',
          '30% 60% 70% 40%',
          '40% 70% 60% 30%',
          '70% 30% 40% 60%',
          '60% 40% 30% 70%',
        ],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: 'easeInOut',
        ...(isMobile ? {} : {
          x: { duration: 0.5, ease: 'easeOut' },
          y: { duration: 0.5, ease: 'easeOut' },
        }),
      }}
    />
  );
}
