'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  price: string;
  category: string;
}

const products: Product[] = [
  // Alfajores
  {
    id: 'alfajor1',
    name: 'Alfajor de Chocolate',
    description: 'Delicioso alfajor relleno de dulce de leche y bañado en chocolate',
    image: '/products/alfajorUno_opt.jpg',
    price: '$500',
    category: 'Alfajores'
  },
  {
    id: 'alfajor2',
    name: 'Alfajor de Maicena',
    description: 'Clásico alfajor de maicena con dulce de leche y coco rallado',
    image: '/products/alfajorDos_opt.jpg',
    price: '$450',
    category: 'Alfajores'
  },
  {
    id: 'alfajor3',
    name: 'Alfajor Triple',
    description: 'Triple capa de placer con dulce de leche y chocolate',
    image: '/products/alfajorTres_opt.jpg',
    price: '$600',
    category: 'Alfajores'
  },
  {
    id: 'alfajor4',
    name: 'Alfajor Especial',
    description: 'Alfajor premium con chocolate blanco y negro',
    image: '/products/alfajorCuatro_opt.jpg',
    price: '$650',
    category: 'Alfajores'
  },

  // Medialunas
  {
    id: 'medialuna1',
    name: 'Medialunas de Manteca',
    description: 'Clásicas medialunas argentinas de manteca',
    image: '/products/medialunaUno_opt.jpg',
    price: '$200',
    category: 'Medialunas'
  },
  {
    id: 'medialuna2',
    name: 'Medialunas Dulces',
    description: 'Medialunas con un toque dulce y glaseado',
    image: '/products/medialunaDos_opt.jpg',
    price: '$220',
    category: 'Medialunas'
  },
  {
    id: 'medialuna3',
    name: 'Medialunas Rellenas',
    description: 'Medialunas rellenas de jamón y queso',
    image: '/products/medialunaTres_opt.jpg',
    price: '$250',
    category: 'Medialunas'
  },
  {
    id: 'medialuna4',
    name: 'Mini Medialunas',
    description: 'Pack de mini medialunas perfectas para eventos',
    image: '/products/medialunaCuatro_opt.jpg',
    price: '$180',
    category: 'Medialunas'
  },

  // Tortas
  {
    id: 'torta1',
    name: 'Torta de Chocolate',
    description: 'Exquisita torta de chocolate con ganache',
    image: '/products/tortaUno_opt.jpg',
    price: '$3500',
    category: 'Tortas'
  },
  {
    id: 'torta2',
    name: 'Cheesecake',
    description: 'Cheesecake con frutos rojos',
    image: '/products/tortaDos_opt.jpg',
    price: '$3800',
    category: 'Tortas'
  },
  {
    id: 'torta3',
    name: 'Torta de Vainilla',
    description: 'Torta de vainilla con crema y duraznos',
    image: '/products/tortaTres_opt.jpg',
    price: '$3200',
    category: 'Tortas'
  },
  {
    id: 'torta4',
    name: 'Torta Especial',
    description: 'Torta personalizada para ocasiones especiales',
    image: '/products/tortaCuatro_opt.jpg',
    price: '$4000',
    category: 'Tortas'
  }
];

export function ProductGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categories = ['all', ...new Set(products.map(product => product.category))];

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Filtros de categoría */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map(category => (
          <motion.button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full text-lg font-medium transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category === 'all' ? 'Todos' : category}
          </motion.button>
        ))}
      </div>

      {/* Grid de productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group cursor-pointer"
            onClick={() => setSelectedProduct(product)}
          >
            <div className="relative aspect-square overflow-hidden rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
              <p className="text-primary-600 font-medium">{product.price}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal de producto */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-6 max-w-2xl w-full relative"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="relative w-full md:w-1/2 aspect-square rounded-xl overflow-hidden">
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{selectedProduct.name}</h3>
                  <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
                  <p className="text-2xl font-bold text-primary-600">{selectedProduct.price}</p>
                  <button
                    onClick={() => {
                      const message = encodeURIComponent(
                        `¡Hola! Me interesa el producto "${selectedProduct.name}" por ${selectedProduct.price}`
                      );
                      window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
                    }}
                    className="mt-6 w-full bg-primary-600 text-white py-3 px-6 rounded-lg hover:bg-primary-700 transition-colors duration-300"
                  >
                    Consultar por WhatsApp
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 