import { motion } from 'framer-motion';

export function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex items-center gap-2"
    >
      <img 
        src="/images/bask1ng-logo.png" 
        alt="Bask1ng Logo" 
        className="h-12 w-auto"
      />
      <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
        Bask1ng Optimizaciones
      </span>
    </motion.div>
  );
}