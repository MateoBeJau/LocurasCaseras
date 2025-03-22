'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary-900 to-primary-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, #fff 2%, transparent 0%)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 pt-[var(--navbar-height)] relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Locuras Caseras
              <br />
              <span className="text-primary-200">Hechas con Amor</span>
            </h1>
            <p className="text-xl text-primary-100 mb-8 max-w-xl">
              Descubre nuestras exquisitas creaciones artesanales, preparadas con los mejores ingredientes y el cariño de siempre.
            </p>
            <motion.button
              className="bg-white text-primary-900 px-8 py-3 rounded-full text-lg font-medium hover:bg-primary-100 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Productos
            </motion.button>
          </motion.div>

          {/* Image */}
          <motion.div
            className="flex-1 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full max-w-lg mx-auto aspect-square">
              <Image
                src="/products/prductoPrincipal_opt.jpg"
                alt="Productos caseros principales"
                fill
                className="object-cover rounded-2xl shadow-2xl"
                priority
              />
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary-200/30 rounded-full -z-10 backdrop-blur-md" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary-100/30 rounded-full -z-10 backdrop-blur-md" />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg
            className="w-6 h-6 text-primary-100"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </div>
    </div>
  );
} 