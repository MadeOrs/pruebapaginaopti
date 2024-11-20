import { motion } from 'framer-motion';
import { Cpu, MemoryStick, Zap } from 'lucide-react';
import { Card } from './ui/card';

const metrics = [
  {
    icon: Cpu,
    title: "CPU Usage",
    description: "Reducción significativa en el uso de CPU en segundo plano. Solo los procesos esenciales se mantienen activos.",
    before: "4-10%",
    after: "0%",
    improvement: "↑100%",
    color: "indigo"
  },
  {
    icon: MemoryStick,
    title: "RAM Usage",
    description: "Optimización de la memoria RAM, liberando recursos para mejor rendimiento en juegos.",
    before: "4.2 GB",
    after: "2.3 GB",
    improvement: "↑54%",
    color: "indigo"
  },
  {
    icon: Zap,
    title: "FPS Boost",
    description: "Mejora significativa en FPS en juegos populares como Valorant, Warzone, Fortnite y mas",
    before: "140 FPS",
    after: "400+ FPS",
    improvement: "↑200%+",
    color: "indigo"
  }
];

export function PerformanceComparison() {
  return (
    <section className="relative py-32">
      {/* Separadores con gradiente */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"></div>

      {/* Fondo con gradiente y patrón */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-indigo-950/10 to-black">
        <div className="absolute inset-0 bg-grid opacity-10"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Título con decoración */}
          <div className="relative inline-block mb-6">
            <h2 className="text-4xl font-bold sm:text-5xl lg:text-6xl relative z-10">
              <span className="text-indigo-400">Bask1ng</span>
              <span className="text-gray">VS</span>
              <span className="text-gray-400">Windows Stock</span>
              <div className="absolute -bottom-2 left-0 right-0 h-3 bg-indigo-500/20 -skew-x-12"></div>
            </h2>
          </div>
          
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Con nuestra optimización personalizada, mejora significativamente el rendimiento
            y la eficiencia de tu PC
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="relative overflow-hidden bg-gradient-to-br from-indigo-950/50 to-black border-indigo-500/20 p-6 hover:border-indigo-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10">
                {/* Efecto de brillo */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-full blur-2xl -mr-12 -mt-12" />
                
                <div className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-indigo-500/20">
                      <metric.icon className="w-6 h-6 text-indigo-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{metric.title}</h3>
                  </div>
                  
                  <p className="text-gray-400 mb-6 min-h-[60px]">
                    {metric.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-gradient-to-br from-red-500/20 to-red-500/5 border border-red-500/10">
                      <p className="text-gray-400 text-sm mb-1">Stock Windows</p>
                      <p className="text-red-400 font-bold text-lg">{metric.before}</p>
                    </div>
                    <div className="p-4 rounded-lg bg-gradient-to-br from-green-500/20 to-green-500/5 border border-green-500/10">
                      <p className="text-gray-400 text-sm mb-1">Con Bask1ng</p>
                      <p className="text-green-400 font-bold text-lg">{metric.after}</p>
                    </div>
                  </div>

                  <div className="mt-6 text-center">
                    <span className="inline-block px-4 py-2 rounded-full bg-indigo-500/20 text-indigo-400 font-bold border border-indigo-500/20">
                      {metric.improvement} Mejora
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
