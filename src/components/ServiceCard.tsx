import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  children?: React.ReactNode;
}

export function ServiceCard({ icon: Icon, title, description, children }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="p-6 bg-gradient-to-br from-blue-900 to-black rounded-xl shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
    >
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200"></div>
        <Icon className="relative h-12 w-12 text-blue-400 mb-4 transform transition-transform duration-300 hover:scale-110" />
      </div>
      <h3 className="text-xl font-bold text-white mb-2 relative">
        <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          {title}
        </span>
      </h3>
      <p className="text-gray-300 mb-4">
        {description}
      </p>
      {children && (
        <div className="mt-6 space-y-4">
          {children}
        </div>
      )}
    </motion.div>
  );
}