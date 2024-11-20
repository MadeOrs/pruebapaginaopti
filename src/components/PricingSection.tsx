import { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard,Zap } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Switch } from './ui/switch';

export function PricingSection() {
  const [currency, setCurrency] = useState<'USD' | 'CLP'>('USD');

  const plans = [
    {
      name: 'Plan Elite',
      priceUSD: 20,
      priceCLP: 15000,
      description: 'Optimización esencial para gaming',
      features: [
        'Solución de errores del PC',
        'Configuración de Windows',
        'Arranque de windows mas rapido',
        'Actualización de controladores',
        'instalacion correcta de driver de Video',
        'Priorización de juegos en el PC',
        'Testeo de temperaturas CPU (opcional)',
      ]
    },
    {
      name: 'Plan Ultimate',
      priceUSD: 30,
      priceCLP: 25000,
      description: 'Rendimiento gaming avanzado',
      features: [
        'Todo lo del Plan Elite',
        'Optimización avanzada de juegos',
        'configuración perfil XMP bios',
        'Reducción de Input LAG',
        'Priorización de juegos en el PC',
        'instalacion y debloat de Nvidia Drivers',
        'CFGs para Juegos como COD,FORNITE,WARZONE,RUST Y MAS',
      ],
      popular: false
    },
    {
      name: 'Plan Supreme',
      priceUSD: 40,
      priceCLP: 30000,
      description: 'Máximo rendimiento gaming',
      features: [
        'Todo lo del Plan Ultimate',
        'Reducción máxima de latencia',
        'Overclocking seguro de GPU (opcional)',
        'Configuracion de Bios',
        'Configuracion de Dispostivos del Sistema',
        'Actualizacion de Bios (opcional)',
        'Menú contextual en escritorio',
        '1 Ticket de mantenimiento (20dias)',
      ],
      popular: true
    }
  ];

  const formatPrice = (price: number, currency: 'USD' | 'CLP') => {
    if (currency === 'USD') {
      return `$${price} USD`;
    }
    return `${price.toLocaleString('es-CL')} CLP`;
  };
  
  return (
    <section id="pricing" className="py-20 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Planes de Optimización
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Elige el plan que mejor se adapte a tus necesidades y presupuesto
          </p>
  
          {/* Selector de Moneda */}
          <div className="mt-6 inline-flex items-center gap-4 bg-indigo-950/50 p-3 rounded-lg">
            <span className="text-white font-medium">USD</span>
            <Switch
              checked={currency === 'CLP'}
              onCheckedChange={(checked) => setCurrency(checked ? 'CLP' : 'USD')}
              className="data-[state=checked]:bg-indigo-500"
            />
            <span className="text-white font-medium">CLP</span>
          </div>
  
          {/* Información de Pago */}
          <div className="mt-4 text-sm text-gray-400">
            <p className="flex items-center justify-center gap-2">
              <CreditCard className="h-4 w-4" />
              Aceptamos PayPal (pago amigos y familiares o enviar $3 dolares más), Binance y transferencias bancarias
            </p>
            {currency === 'USD' && (
              <p className="mt-1 text-indigo-400 flex items-center justify-center gap-2">
                <Zap className="h-4 w-4" />
                ¡5 USD de descuento si pagas hoy por Binance!
              </p>
            )}
          </div>
        </motion.div>
  
        {/* Sección de los Planes */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card 
                className={`relative p-8 bg-gradient-to-br ${
                  plan.popular 
                    ? 'from-indigo-950 to-black border-indigo-400 shadow-lg shadow-indigo-500/20' 
                    : 'from-gray-900 to-black border-gray-700'
                } border-2 rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 -mt-2 -mr-2 bg-indigo-500 text-white text-sm py-1 px-4 rounded-bl-xl transform rotate-45">
                    Popular
                  </div>
                )}
  
                <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                <p className="mt-2 text-gray-400">{plan.description}</p>
                <div className="mt-4 flex items-baseline">
                  <span className="text-5xl font-extrabold text-white">
                    {formatPrice(currency === 'USD' ? plan.priceUSD : plan.priceCLP, currency)}
                  </span>
                </div>
  
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <svg className="h-5 w-5 text-indigo-400 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
  
                <Button
                  className={`mt-8 w-full ${
                    plan.popular
                      ? 'bg-indigo-500 hover:bg-indigo-600 shadow-lg shadow-indigo-500/50'
                      : 'bg-indigo-800 hover:bg-indigo-700'
                  } text-white transition-all duration-300 glow-effect`}
                  onClick={() => window.open('https://calendly.com/bask1ng/opti', '_blank')}
                >
                  COMPRAR AHORA
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

