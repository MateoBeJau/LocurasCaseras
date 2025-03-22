'use client';

import { motion } from 'framer-motion';
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-white">
      {/* Wave Separator */}
      <div className="relative h-20 overflow-hidden">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-full"
        >
          <path
            d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            className="fill-primary-900"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Columna 1: Logo y descripción */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <Image
                  src="/LogoLocuras.png"
                  alt="Locuras Caseras Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
              <span className="ml-3 text-xl font-bold">Locuras Caseras</span>
            </motion.div>
            <p className="text-primary-100">
              Deliciosas creaciones artesanales hechas con amor y los mejores ingredientes.
            </p>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {[
                { label: 'Inicio', id: 'inicio' },
                { label: 'Nosotros', id: 'nosotros' },
                { label: 'Productos', id: 'productos' },
                { label: 'Contacto', id: 'contacto' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-primary-100 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-primary-300" />
                <span className="text-primary-100">Buenos Aires, Argentina</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaWhatsapp className="text-primary-300" />
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-100 hover:text-white transition-colors duration-300"
                >
                  +54 123 456 7890
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-primary-300" />
                <a
                  href="mailto:contacto@locurascaseras.com"
                  className="text-primary-100 hover:text-white transition-colors duration-300"
                >
                  contacto@locurascaseras.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaInstagram className="text-primary-300" />
                <a
                  href="https://instagram.com/locurascaseras"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-100 hover:text-white transition-colors duration-300"
                >
                  @locurascaseras
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Separador */}
        <div className="border-t border-primary-800 my-8" />

        {/* Copyright */}
        <div className="text-center text-primary-200 text-sm">
          <p>© {currentYear} Locuras Caseras. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
} 