import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowLeft, ArrowRight, MessageSquareQuote } from 'lucide-react';
import { Tweet } from 'react-tweet';

const tweets = [
  "1841873053384401245",
  "1830046117880344828",
  "1806090034485096545",
  "1806803617179136174",
  "1776094863844352371",
  "1817997978839187472",
  "1854287093519856088",
  "1808698592992825468",
  "1848992746037465377",
  "1843459327232811252",
  "1841647046320869792",
  "1838316986972946533",
  "1833962945790836748",
  "1833240029608743222",
  "1828944581829771622",
  "1832079966487334975",
  "1830420612637995140",
  "1830394728975602001",
  "1779848851848831249",
  "1681855798551408641",
  "1800743718783418543",
  "1695185721131180183",
  "1769504941989650837",
  "1661872062967824384",
  "1710043276810535097",
  "1752341103246729253",
  "1858691933406728540",
  "1821999108850381255",
  "1821002866347135230",
  "1820646397907186090",
];

export function TestimonialsCarousel() {
  const [currentTweetIndex, setCurrentTweetIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTweet = () => {
    setDirection(1);
    setCurrentTweetIndex((prev) => (prev + 1) % tweets.length);
  };

  const prevTweet = () => {
    setDirection(-1);
    setCurrentTweetIndex((prev) => (prev - 1 + tweets.length) % tweets.length);
  };

  return (
    <section id="testimonials" className="relative">
      {/* Separador superior */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black to-transparent"></div>

      {/* Fondo con gradiente y efecto de malla */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/20 via-black to-indigo-950/20">
        <div className="absolute inset-0 bg-grid opacity-10"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Ícono decorativo */}
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-indigo-500/10 rounded-full">
              <MessageSquareQuote className="w-8 h-8 text-indigo-400" />
            </div>
          </div>

          {/* Título con decoración */}
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl font-semibold text-center mb-4">
              Testimonios
              <div className="absolute -bottom-2 left-0 right-0 h-3 bg-indigo-500/20 -skew-x-12"></div>
            </h2>
          </div>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-6">
            Lo que dicen nuestros clientes sobre nuestro servicio
          </p>
        </motion.div>

        <div className="flex flex-col items-center bg-black/40 rounded-2xl p-4 backdrop-blur-sm border border-indigo-500/10">
          {/* Contador de tweets */}
          <div className="text-gray-400 mb-6 font-medium">
            Testimonio {currentTweetIndex + 1} de {tweets.length}
          </div>

          {/* Contenedor del carrusel */}
          <div className="relative w-full max-w-2xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80 z-10 pointer-events-none" />
            
            <div className="flex items-center justify-center gap-6">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={prevTweet}
                className="relative z-20 bg-indigo-950/50 hover:bg-indigo-900/50 border-indigo-500/50 shadow-lg shadow-indigo-500/20"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>

              <div className="relative overflow-hidden w-[550px] h-[600px] flex items-center justify-center">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentTweetIndex}
                    custom={direction}
                    initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 300,
                      damping: 30
                    }}
                    className="absolute"
                  >
                    <div className="transform scale-110 hover:scale-105 transition-transform duration-300">
                      <Tweet id={tweets[currentTweetIndex]} />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <Button 
                variant="outline" 
                size="icon" 
                onClick={nextTweet}
                className="relative z-20 bg-indigo-950/50 hover:bg-indigo-900/50 border-indigo-500/50 shadow-lg shadow-indigo-500/20"
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Indicadores de navegación */}
          <div className="flex justify-center gap-2 mt-8">
            {tweets.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentTweetIndex ? 1 : -1);
                  setCurrentTweetIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentTweetIndex 
                    ? 'bg-indigo-500 w-4 shadow-lg shadow-indigo-500/50' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Separador inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
}