import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function LoadingScreen() {
  const [fps, setFps] = useState(0);
  const targetFps = 144;
  const duration = 2000; // 2 seconds total duration
  const interval = 16; // ~60fps for smooth animation
  const step = (targetFps * interval) / duration;

  useEffect(() => {
    const timer = setInterval(() => {
      setFps((prev) => {
        const next = prev + step;
        return next >= targetFps ? targetFps : next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-b from-black via-gray-900 to-black flex items-center justify-center z-50"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative text-center px-4">
        {/* Animated background effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 animate-pulse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        </div>

        {/* Logo container */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            duration: 0.5,
            type: "spring",
            stiffness: 260,
            damping: 20 
          }}
          className="relative mb-8"
        >
          {/* Glow effect behind logo */}
          <div className="absolute inset-0 bg-blue-500/30 blur-2xl rounded-full" />
          
          {/* Logo */}
          <img
            src="/images/B3.png"
            alt="Bask1ng Logo"
            className="h-32 w-auto mx-auto drop-shadow-xl relative z-10 animate-float"
          />

          {/* Animated rings around logo */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 border-2 border-blue-500/20 rounded-full animate-ping" />
            <div className="absolute inset-0 border-2 border-blue-500/10 rounded-full animate-ping" style={{ animationDelay: "300ms" }} />
          </div>
        </motion.div>

        {/* Progress bar container */}
        <div className="relative">
          <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full" />
          
          {/* Main progress bar */}
          <div className="relative w-80 h-3 bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm border border-white/10">
            <motion.div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700"
              initial={{ width: 0 }}
              animate={{ width: `${(fps / targetFps) * 100}%` }}
              transition={{ ease: "easeOut" }}
            >
              {/* Animated shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine" />
            </motion.div>
          </div>
        </div>

        {/* FPS Counter */}
        <motion.div
          className="mt-6 space-y-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Optimizando tu rendimiento
          </p>
          <motion.p
            className="text-3xl font-bold text-white"
            animate={{ opacity: [0.7, 1] }}
            transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
          >
            {Math.round(fps)} FPS
          </motion.p>
        </motion.div>

        {/* Loading message */}
        <motion.p
          className="mt-4 text-sm text-gray-400"
          animate={{ opacity: [0.5, 1] }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        >
          Preparando tu experiencia gaming óptima...
        </motion.p>
      </div>
    </motion.div>
  );
}
