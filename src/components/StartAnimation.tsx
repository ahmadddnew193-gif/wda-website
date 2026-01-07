import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function StartAnimation() {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsComplete(true);
      window.dispatchEvent(new CustomEvent('startAnimationComplete'));
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  if (isComplete) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 2.7 }}
      data-start-animation
    >
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          background: 'radial-gradient(circle at 50% 50%, #1e3a8a 0%, #0f172a 50%, #000000 100%)',
        }}
      />

      {/* Grid pattern */}
      <motion.div
        className="absolute inset-0 opacity-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Logo with sophisticated animation */}
      <div className="relative z-10 text-center">
        {/* Outer ring */}
        <motion.div
          className="absolute inset-0 -m-32 rounded-full border-2 border-blue-500/20"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: [0.8, 1.2, 1],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 2,
            times: [0, 0.5, 1],
            repeat: Infinity,
          }}
        />

        {/* Logo container */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            duration: 1,
            type: 'spring',
            stiffness: 100,
            damping: 15
          }}
        >
          {/* Main logo text */}
          <motion.h1
            className="text-8xl md:text-9xl font-black mb-4"
            initial={{ letterSpacing: '0.5em', opacity: 0 }}
            animate={{ letterSpacing: '0.1em', opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {['W', '.', 'D', '.', 'A'].map((letter, index) => (
              <motion.span
                key={index}
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.5 + index * 0.1,
                  type: 'spring',
                  stiffness: 200
                }}
                style={{
                  backgroundSize: '200% 100%',
                }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-gray-400 font-light tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            Web Design Agency
          </motion.p>

          {/* Loading bar */}
          <motion.div
            className="mt-8 w-64 h-1 mx-auto bg-gray-800 rounded-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{
                duration: 1.5,
                delay: 1.5,
                ease: 'easeInOut'
              }}
            />
          </motion.div>
        </motion.div>

        {/* Pulsing dots */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 w-2 h-2 bg-blue-400 rounded-full"
            style={{
              x: '-50%',
              y: '-50%',
            }}
            animate={{
              scale: [0, 2, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 2,
              delay: i * 0.4,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      {/* Corner accents */}
      {[
        { top: '10%', left: '10%', rotate: 0 },
        { top: '10%', right: '10%', rotate: 90 },
        { bottom: '10%', left: '10%', rotate: 270 },
        { bottom: '10%', right: '10%', rotate: 180 },
      ].map((pos, i) => (
        <motion.div
          key={i}
          className="absolute w-20 h-20 border-t-2 border-l-2 border-blue-500/30"
          style={pos}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }}
        />
      ))}
    </motion.div>
  );
}
