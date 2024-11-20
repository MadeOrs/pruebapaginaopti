import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { Button } from './ui/button';

export default function FaqSection() {
  const faqs = [
    {
      question: "¿Cómo es el proceso de optimización de Bask1ng?",
      answer: "El proceso se realiza de manera remota mediante el programa QuickSupport de TeamViewer. Los clientes pueden observar todo el procedimiento en tiempo real. Configuramos y ajustamos tu PC para maximizar el rendimiento en juegos y tareas.",
    },
    {
      question: "¿Cuánto tiempo dura la optimización?",
      answer: "La optimización suele durar entre 30 y 60 minutos, dependiendo de las especificaciones de tu PC y los ajustes requeridos. Todo se realiza de forma eficiente para minimizar el tiempo de inactividad.",
    },
    {
      question: "¿Necesito estar presente durante la optimización?",
      answer: "No es obligatorio, pero recomendamos estar disponible en caso de que surjan preguntas o necesites aprobar alguna configuración específica. Puedes supervisar todo el proceso si lo prefieres.",
    },
    {
      question: "¿Puedo revertir los cambios si no me gustan?",
      answer: "Sí, realizamos copias de seguridad antes de aplicar cualquier cambio. Si no estás satisfecho con la optimización, podemos revertir las configuraciones a su estado anterior sin problemas.",
    },
    {
      question: "¿Qué necesito antes de empezar el servicio?",
      answer: "Es importante tener el programa QuickSupport instalado y una conexión a Internet estable. También te pediremos especificaciones de tu PC y detalles sobre el uso, como los juegos que sueles jugar o programas que utilizas.",
    },
    {
      question: "¿Qué resultados puedo esperar después de la optimización?",
      answer: "Los resultados varían según el hardware, pero en general notarás un aumento en el rendimiento de los juegos (más FPS), una mejor respuesta del sistema, y una gestión más eficiente de los recursos.",
    },
  ];
  
  return (
    <section id="faq" className="py-20 bg-black/50">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Encuentra respuestas a las preguntas más comunes sobre mis servicios
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <AccordionItem 
                  value={`item-${index}`}
                  className="bg-gradient-to-r from-blue-900/50 to-black/50 rounded-lg px-6 border border-blue-900/50 hover:border-blue-500/50 transition-colors"
                >
                  <AccordionTrigger className="text-white hover:text-blue-400 text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-6">
            ¿No encontraste lo que buscabas? contactme directamente
          </p>
          <Button 
            className="bg-green-500 hover:bg-green-600 text-white flex items-center gap-2 mx-auto"
            onClick={() => window.open('https://wa.me/56974051982', '_blank')}
          >
            <MessageCircle className="h-4 w-4" />
            Consultar por WhatsApp
          </Button>
        </motion.div>
      </div>
    </section>
  );
}