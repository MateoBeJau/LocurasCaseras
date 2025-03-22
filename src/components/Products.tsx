'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const products = [
  {
    id: 1,
    name: 'Medialunas de Manteca',
    description: 'Clásicas medialunas argentinas, doradas y hojaldradas',
    image: '/products/medialunas.jpg',
    price: 'Docena',
  },
  {
    id: 2,
    name: 'Torta de Chocolate',
    description: 'Bizcochuelo húmedo de chocolate con ganache',
    image: '/products/torta-chocolate.jpg',
    price: 'Desde',
  },
  {
    id: 3,
    name: 'Pastafrola',
    description: 'Tradicional pasta frola con membrillo casero',
    image: '/products/pastafrola.jpg',
    price: 'Unidad',
  },
  {
    id: 4,
    name: 'Tortas Personalizadas',
    description: 'Diseños únicos para tus momentos especiales',
    image: '/products/tortas-personalizadas.jpg',
    price: 'Consultar',
  },
];

export function Products() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 px-4 bg-cream-50" id="products">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-handwriting text-2xl text-primary-600 block mb-4">
            Nuestras Especialidades
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-primary-800 mb-4">
            Productos Destacados
          </h2>
          <p className="text-xl text-secondary-600">
            Elaborados con ingredientes seleccionados y mucho amor
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-warm hover:shadow-warm-lg transition-shadow duration-300 overflow-hidden group"
            >
              <div className="aspect-square relative overflow-hidden">
                <div className="absolute inset-0 bg-cream-200 group-hover:scale-105 transition-transform duration-300">
                  {/* Aquí iría la imagen cuando esté disponible */}
                </div>
              </div>
              <div className="p-6 bg-gradient-to-b from-cream-50 to-white">
                <h3 className="font-display text-xl text-primary-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-secondary-600 mb-4">
                  {product.description}
                </p>
                <p className="text-primary-600 font-medium font-handwriting text-xl">
                  {product.price}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 