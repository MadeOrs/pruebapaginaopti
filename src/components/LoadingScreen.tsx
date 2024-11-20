import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function LoadingScreen() {
  const [fps, setFps] = useState(0);
  const targetFps = 100;
  const duration = 50; // 2 segundos
  const interval = 7; // ~60fps
  const step = (targetFps * interval) / duration;

  useEffect(() => {
    const timer = setInterval(() => {
      setFps(prev => {
        const next = prev + step;
        return next >= targetFps ? targetFps : next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 bg-[#0a0a0a] flex items-center justify-center z-50"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.1 }}
          className="mb-4"
        >
          <img 
            src="/images/bask1ng-logo.png" 
            alt="Bask1ng Logo" 
            className="h-24 w-auto mx-auto"
          />
        </motion.div>
        
        <div className="relative w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-indigo-500 to-indigo-600"
            initial={{ width: 0 }}
            animate={{ width: `${(fps / targetFps) * 100}%` }}
          />
        </div>
        
        <motion.p 
          className="mt-4 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-600"
          animate={{ opacity: [0.5, 1] }}
          transition={{ duration: 0.1, repeat: Infinity, repeatType: "reverse" }}
        >
          {Math.round(fps)} FPS
        </motion.p>
      </div>
    </motion.div>
  );
}