import { Menu, X, MessageCircle, Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from './Logo';
import { useTheme } from './theme-provider';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Inicio" },
    { href: "#pricing", label: "Precios" },
    { href: "#testimonials", label: "Testimonios" },
    { href: "#faq", label: "FAQ" },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/56974051982', '_blank');
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-black/90 backdrop-blur-md shadow-lg border-b border-blue-900/30' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Logo />
          
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105"
              >
                {link.label}
              </motion.button>
            ))}
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-4"
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="text-gray-300 hover:text-blue-400"
              >
                {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              </Button>
              
              <Button 
                className="bg-green-500 hover:bg-green-600 text-white flex items-center gap-2 px-6 py-5 rounded-xl shadow-lg hover:shadow-green-500/20 transition-all duration-300 hover:scale-105"
                onClick={handleWhatsAppClick}
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </Button>
            </motion.div>
          </div>
          
          <div className="md:hidden flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="text-gray-300 hover:text-blue-400"
            >
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-blue-400 hover:bg-blue-900/20 focus:outline-none transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-md border-t border-blue-900/30"
          >
            <div className="px-4 pt-4 pb-6 space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-gray-300 hover:text-blue-400 block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors hover:bg-blue-900/20"
                >
                  {link.label}
                </button>
              ))}
              <Button 
                className="bg-green-500 hover:bg-green-600 text-white w-full flex items-center justify-center gap-2 mt-4 py-6 rounded-xl"
                onClick={handleWhatsAppClick}
              >
                <MessageCircle className="h-5 w-5" />
                Contactar por WhatsApp
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}