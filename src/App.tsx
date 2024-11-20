import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import { PricingSection } from './components/PricingSection';
import FaqSection from './components/FaqSection';
import { GamePerformanceShowcase } from './components/GamePerformanceShowcase';
import { TestimonialsCarousel } from './components/TestimonialsCarousel';
import { SocialLinks } from './components/SocialLinks';
import { PerformanceComparison } from './components/PerformanceComparison';
import { ArrowRight } from 'lucide-react';
import { Button } from './components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './components/theme-provider';
import { LoadingScreen } from './components/LoadingScreen';
import { ProcessSteps } from './components/ProcessSteps';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop;
      window.scrollTo({
        top: offsetTop - 50,
        behavior: 'smooth'
      });
    }
  };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      <div className="min-h-screen bg-gradient-to-b from-black via-indigo-950/20 to-black">
        <Navbar />
        
        {/* Hero Section */}
        <section id="home" className="pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Optimiza tu Rendimiento con{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-600">
                  Bask1ng
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Potencia tu infraestructura digital con soluciones de optimización avanzadas y personalizadas para tu negocio.
              </p>
              <Button 
                className="bg-indigo-500 hover:bg-indigo-600 text-white text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 glow-effect"
                onClick={() => scrollToSection('pricing')}
              >
                Comprar Ahora <ArrowRight className="ml-2" />
              </Button>
            </motion.div>
          </div>
        </section>

        <ProcessSteps />
        
        <GamePerformanceShowcase />
        
        <PerformanceComparison />
        
        <PricingSection />
        
        <TestimonialsCarousel />
        
        <FaqSection />
        
        <SocialLinks />
        
        {/* Footer */}
        <footer className="bg-black py-8">
          <div className="max-w-7xl mx-auto px-4 text-center text-gray-400">
            <p>© 2024 Bask1ng Optimizaciones. Todos los derechos reservados.</p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;