import { motion } from 'framer-motion';
import { Calendar, Download, Laptop } from 'lucide-react';

export function ProcessSteps() {
  const steps = [
    {
      icon: Calendar,
      title: "Paso 1: Agenda tu Optimización",
      description: "Haz clic en 'Comprar Optimización', selecciona día y hora en Calendly y responde unas preguntas."
    },
    {
      icon: Download,
      title: "Paso 2: Pago y Descarga",
      description: "se te enviara a WhatsApp para realizar el pago y descargar QuickSupport en tu PC."
    },
    {
      icon: Laptop,
      title: "Paso 3: Optimización",
      description: "En el día y hora acordados, te optimizare el PC vía QuickSupport mientras estamos en contacto por WhatsApp."
    }
  ];


  return (
    <section className="py-20 bg-black/50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Proceso de Optimización
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Simple, rápido y efectivo
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gradient-to-br from-indigo-950/50 to-black border border-indigo-500/20 rounded-xl p-6 hover:border-indigo-400/50 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-indigo-600/20 rounded-full flex items-center justify-center mb-4">
                  <step.icon className="w-8 h-8 text-indigo-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 p-6 bg-gradient-to-br from-indigo-950/50 to-black border border-indigo-500/20 rounded-xl"
        >
          <h3 className="text-xl font-bold text-white mb-4">Información Importante</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
              Puedes reagendar tu sesión máximo 2 veces con 48 horas de anticipación.
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
              No se realizan devoluciones si excedes el límite de reagendamientos.
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
              Los pagos por PayPal deben ser como Amigos y Familiares o tendrán un cargo adicional de $3 USD.
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
              Tickets de mantenimiento adicionales disponibles por $10 USD o 5mil CLP.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}