'use client';

import { motion } from 'framer-motion';
import { ProductGallery } from './ProductGallery';
import { DotsPattern, FloatingShapes, TextureOverlay, WavePattern } from './Patterns';

export function ProductSection() {
  return (
    <section className="relative min-h-screen bg-cream-50 py-20 overflow-hidden">
      {/* Patrones decorativos */}
      <DotsPattern />
      <FloatingShapes />
      <TextureOverlay />
      <WavePattern />

      {/* Contenido */}
      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4">
            Nuestros Productos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre nuestra selección de delicias caseras, preparadas con amor y los mejores ingredientes
          </p>
        </motion.div>

        {/* Galería de productos */}
        <ProductGallery />
      </div>
    </section>
  );
} 