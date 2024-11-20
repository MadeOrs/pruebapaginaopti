import { motion } from 'framer-motion';
import { PerformanceMetric } from './PerformanceMetric';
import { Card } from './ui/card';

const games = [
  {
    name: "Valorant",
    beforeFps: 40,
    afterFps: 200,
    image: "/images/valorant.jpg", // Ruta local
    improvement: "400%",
    description: "Optimización competitiva para máximo rendimiento y menor Latencia"
  },
  {
    name: "Warzone",
    beforeFps: 40,
    afterFps: 120,
    image: "/images/warzone.jpg", // Ruta local
    improvement: "200%",
    description: "Mejora significativa en mapas grandes"
  },
  {
    name: "Fortnite",
    beforeFps: 50,
    afterFps: 300,
    image: "/images/fortnite.jpg", // Ruta local
    improvement: "260%",
    description: "Mayores fps y mayor estabilidad"
  },
  {
    name: "CS2",
    beforeFps: 60,
    afterFps: 240,
    image: "/images/cs2.jpg", // Ruta local
    improvement: "300%",
    description: "Optimización para juego competitivo profesional +fps -inputdelay"
  }
];

export function GamePerformance() {
  return (
    <div className="grid md:grid-cols-4 gap-6 mt-12">
      {games.map((game, index) => (
        <motion.div
          key={game.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="bg-gradient-to-br from-blue-900/50 to-black/50 border-blue-500/20 overflow-hidden hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
              <img 
                src={game.image} 
                alt={game.name}
                className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {game.name}
                </h4>
                <p className="text-blue-400 text-sm">
                  Mejora de rendimiento: <span className="font-bold">{game.improvement}</span>
                </p>
                <p className="text-gray-400 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {game.description}
                </p>
              </div>
            </div>
            <div className="p-4">
              <div className="space-y-4">
                <motion.div 
                  className="bg-black/50 rounded-lg p-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <p className="text-sm text-gray-400 mb-2">Antes de optimización:</p>
                  <PerformanceMetric
                    start={0}
                    end={game.beforeFps}
                    label="FPS Base"
                    suffix=" FPS"
                    type="fps"
                    duration={1500}
                  />
                </motion.div>
                <motion.div 
                  className="bg-black/50 rounded-lg p-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.3 }}
                >
                  <p className="text-sm text-gray-400 mb-2">Después de optimización:</p>
                  <PerformanceMetric
                    start={game.beforeFps}
                    end={game.afterFps}
                    label="FPS Optimizados"
                    suffix=" FPS"
                    type="fps"
                    duration={2000}
                  />
                </motion.div>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
