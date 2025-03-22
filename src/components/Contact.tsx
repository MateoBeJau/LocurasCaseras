'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from './Button';

export function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleWhatsAppClick = () => {
    // Reemplazar con el número real
    const phoneNumber = '123456789';
    const message = encodeURIComponent('¡Hola! Me gustaría hacer un pedido 😊');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleInstagramClick = () => {
    // Reemplazar con el usuario real de Instagram
    window.open('https://instagram.com/usuario', '_blank');
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-cream-100 to-white" id="contact">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="font-handwriting text-2xl text-primary-600 block mb-4">
            Contactanos
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-primary-800 mb-8">
            ¿Cómo hacer tu pedido?
          </h2>

          <div className="space-y-8">
            <div className="max-w-xl mx-auto">
              <p className="text-lg text-secondary-700 mb-6">
                Elegí el medio que prefieras para contactarnos. ¡Estamos para ayudarte!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                onClick={handleWhatsAppClick}
                className="w-full sm:w-auto bg-cream-500 text-secondary-900 hover:bg-cream-400"
              >
                Pedir por WhatsApp
              </Button>
              
              <Button
                variant="secondary"
                onClick={handleInstagramClick}
                className="w-full sm:w-auto"
              >
                Seguinos en Instagram
              </Button>
            </div>

            <div className="mt-12 text-center p-8 bg-cream-50 rounded-2xl shadow-warm">
              <h3 className="font-display text-2xl text-primary-800 mb-4">
                Horarios de atención
              </h3>
              <p className="text-secondary-700">
                Lunes a Sábados de 9:00 a 20:00 hs
              </p>
              <p className="text-secondary-700">
                Domingos de 9:00 a 13:00 hs
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 