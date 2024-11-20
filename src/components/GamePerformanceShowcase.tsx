import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { Cpu } from 'lucide-react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const games = [
  {
    name: "Valorant",
    icon: "/images/valorant.jpg",
    cpu: "i7-12650H",
    specs: {
      stockAvg: 290.3,
      stockLow: 170.5,
      optimizedAvg: 405.9,
      optimizedLow: 290.1,
      latencyStock: [3.2, 3.8, 4.2, 4.8, 6.8],
      latencyOptimized: [2.8, 3.4, 3.8, 4.0, 4.2]
    }
  },
  {
    name: "Warzone",
    icon: "/images/warzone.jpg",
    cpu: "i7-12650H",
    specs: {
      stockAvg: 70.4,
      stockLow: 45.1,
      optimizedAvg: 120.2,
      optimizedLow: 95.3,
      latencyStock: [4.2, 4.8, 5.2, 5.8, 7.8],
      latencyOptimized: [3.8, 4.4, 4.8, 5.0, 5.2]
    }
  },
  {
    name: "Fortnite",
    icon: "/images/fortnite.jpg",
    cpu: "i7-12650H",
    specs: {
      stockAvg: 160.5,
      stockLow: 120.2,
      optimizedAvg: 280.0,
      optimizedLow: 240.7,
      latencyStock: [3.8, 4.4, 4.8, 5.4, 7.4],
      latencyOptimized: [3.4, 4.0, 4.4, 4.6, 4.8]
    }
  },
  {
    name: "CS2",
    icon: "/images/cs2.jpg",
    cpu: "i7-12650H",
    specs: {
      stockAvg: 220.3,
      stockLow: 180.5,
      optimizedAvg: 380.90,
      optimizedLow: 320.44,
      latencyStock: [3.6, 4.2, 4.6, 5.2, 7.2],
      latencyOptimized: [3.2, 3.8, 4.2, 4.4, 4.6]
    }
  },
  {
    name: "Rust",
    icon: "/images/rust.avif",
    cpu: "i7-12650H",
    specs: {
      stockAvg: 85.7,
      stockLow: 65.2,
      optimizedAvg: 140,
      optimizedLow: 120.5,
      latencyStock: [4.4, 5.0, 5.4, 6.0, 8.0],
      latencyOptimized: [4.0, 4.6, 5.0, 5.2, 5.4]
    }
  }
];

export function GamePerformanceShowcase() {
  const [selectedGame, setSelectedGame] = useState(games[0]);
  const [showFps, setShowFps] = useState(true);

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: '#9ca3af',
          font: {
            family: 'system-ui'
          }
        }
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            return `${context.dataset.label}: ${Number(context.parsed.y).toFixed(2)} FPS`;
          }
        }
      }
      
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(75, 85, 99, 0.2)'
        },
        ticks: {
          color: '#9ca3af'
        }
      },
      y: {
        grid: {
          color: 'rgba(75, 85, 99, 0.2)'
        },
        ticks: {
          color: '#9ca3af'
        }
      }
    }
  };

  const fpsData = {
    labels: ['Min', 'Avg', '95%', '99%', 'Max'],
    datasets: [
      {
        label: 'Windows Stock',
        data: [
          selectedGame.specs.stockLow,
          selectedGame.specs.stockAvg,
          selectedGame.specs.stockAvg * 0.95,
          selectedGame.specs.stockAvg * 0.99,
          selectedGame.specs.stockAvg * 1.2
        ],
        borderColor: '#ef4444',
        backgroundColor: 'rgba(239, 68, 68, 0.5)',
        tension: 0.4
      },
      {
        label: 'Con Bask1ng',
        data: [
          selectedGame.specs.optimizedLow,
          selectedGame.specs.optimizedAvg,
          selectedGame.specs.optimizedAvg * 0.95,
          selectedGame.specs.optimizedAvg * 0.99,
          selectedGame.specs.optimizedAvg * 1.2
        ],
        borderColor: '#22c55e',
        backgroundColor: 'rgba(34, 197, 94, 0.5)',
        tension: 0.4
      }
    ]
  };

  const latencyData = {
    labels: ['Min', 'Avg', '95%', '99%', 'Max'],
    datasets: [
      {
        label: 'Windows Stock',
        data: selectedGame.specs.latencyStock,
        borderColor: '#ef4444',
        backgroundColor: 'rgba(239, 68, 68, 0.5)',
        tension: 0.4
      },
      {
        label: 'Con Bask1ng',
        data: selectedGame.specs.latencyOptimized,
        borderColor: '#22c55e',
        backgroundColor: 'rgba(34, 197, 94, 0.5)',
        tension: 0.4
      }
    ]
  };

  return (
    <section className="py-10 md:py-20 bg-black/50">
      <div className="max-w-7xl mx-auto px-3 md:px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">
            Análisis de Rendimiento en Juegos
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            Datos reales de mejoras en rendimiento para diferentes juegos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-8">
          {/* Selector de Juegos */}
          <div className="lg:col-span-1 space-y-2 md:space-y-4 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0">
            {games.map((game) => (
              <motion.button
                key={game.name}
                onClick={() => setSelectedGame(game)}
                className={`flex-shrink-0 w-40 lg:w-full p-3 md:p-4 rounded-lg transition-all duration-300 ${
                  selectedGame.name === game.name
                    ? 'bg-indigo-600 shadow-lg shadow-indigo-500/20'
                    : 'bg-indigo-900/20 hover:bg-indigo-800/20'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <img
                    src={game.icon}
                    alt={game.name}
                    className="w-6 h-6 md:w-8 md:h-8 rounded-lg"
                  />
                  <div className="text-left">
                    <h3 className="text-white font-bold text-sm md:text-base">{game.name}</h3>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <Cpu className="w-3 h-3" />
                      {game.cpu}
                    </div>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Gráfico de Rendimiento */}
          <Card className="lg:col-span-3 bg-gradient-to-br from-indigo-900/20 to-black border-indigo-500/20 p-3 md:p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 md:mb-6 gap-3">
              <h3 className="text-lg md:text-xl font-bold text-white">{selectedGame.name}</h3>
              <div className="flex gap-2 md:gap-4">
                <button
                  onClick={() => setShowFps(true)}
                  className={`px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-xs md:text-sm font-medium transition-colors ${
                    showFps ? 'bg-indigo-600 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  FPS
                </button>
                <button
                  onClick={() => setShowFps(false)}
                  className={`px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-xs md:text-sm font-medium transition-colors ${
                    !showFps ? 'bg-indigo-600 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Latencia
                </button>
              </div>
            </div>

            <div className="h-[300px] md:h-[400px]">
              <Line 
                options={chartOptions} 
                data={showFps ? fpsData : latencyData}
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}