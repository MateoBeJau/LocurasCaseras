'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 px-4 bg-cream-100" id="about">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="font-display text-4xl md:text-5xl text-primary-800 mb-8">
            Sobre nuestro emprendimiento
          </h2>
          
          <div className="space-y-6 text-lg">
            <p className="text-secondary-700">
              Somos un emprendimiento familiar que elabora productos de panadería y 
              pastelería casera. Trabajamos con ingredientes frescos y recetas 
              tradicionales para que disfrutes del sabor de siempre.
            </p>
            
            <p className="text-secondary-700">
              Cada producto es elaborado con dedicación y amor, siguiendo las 
              recetas que han pasado de generación en generación en nuestra familia.
            </p>

            <p className="font-medium text-primary-700 font-handwriting text-2xl">
              Nuestro compromiso es llevar a tu mesa el auténtico sabor casero, 
              ese que te hace sentir como en casa.
            </p>
          </div>

          {/* Decoración */}
          <div className="mt-12 flex justify-center">
            <div className="w-24 h-1 bg-primary-300 rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
} 