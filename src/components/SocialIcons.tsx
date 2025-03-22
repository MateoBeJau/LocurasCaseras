'use client';

import { motion } from 'framer-motion';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const socialLinks = [
  {
    name: 'WhatsApp',
    icon: <FaWhatsapp size={26} />,
    href: 'https://wa.me/1234567890',
    bgColor: 'bg-green-500',
    hoverBgColor: 'hover:bg-green-600',
    label: 'Contactar por WhatsApp'
  },
  {
    name: 'Instagram',
    icon: <FaInstagram size={26} />,
    href: 'https://instagram.com/locurascaseras',
    bgColor: 'bg-gradient-to-tr from-purple-600 via-pink-600 to-orange-500',
    hoverBgColor: 'hover:opacity-90',
    label: 'Seguir en Instagram'
  }
];

export function SocialIcons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            w-14 h-14 rounded-full shadow-warm-lg flex items-center justify-center text-white
            ${social.bgColor} ${social.hoverBgColor}
            transition-all duration-300 relative group
          `}
          initial={{ opacity: 0, x: 50 }}
          animate={{ 
            opacity: 1, 
            x: 0,
            transition: { delay: index * 0.2 }
          }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          {social.icon}
          
          {/* Tooltip */}
          <span className="absolute right-full mr-3 px-3 py-1.5 min-w-max rounded-lg text-sm font-medium bg-gray-900/95 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-warm">
            {social.label}
          </span>

          {/* Indicador de pulso */}
          <span className="absolute inset-0 rounded-full animate-ping opacity-20 bg-white" />
        </motion.a>
      ))}
    </div>
  );
} 