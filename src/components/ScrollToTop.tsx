'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-32 left-6 z-50 w-12 h-12 rounded-full shadow-warm-lg flex items-center justify-center bg-white text-primary-600 hover:bg-primary-600 hover:text-white transition-all duration-300 border-2 border-primary-600 group"
          whileHover={{ y: -3, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
          whileTap={{ scale: 0.9 }}
        >
          <FaArrowUp className="text-xl group-hover:animate-bounce" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-400/0 via-primary-400/30 to-primary-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shine" />
          
          {/* Tooltip */}
          <span className="absolute right-full mr-3 px-3 py-1 min-w-max rounded-lg text-sm font-medium bg-gray-900 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Volver arriba
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
} 