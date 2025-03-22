'use client';

import { HTMLMotionProps, motion } from 'framer-motion';

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "className" | "children" | "onClick"> {
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export function Button({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  ...props 
}: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-full font-medium transition-all duration-300 ease-in-out transform';
  
  const variants = {
    primary: 'bg-primary-600 text-cream-50 hover:bg-primary-700 shadow-warm hover:shadow-warm-lg hover:-translate-y-0.5',
    secondary: 'bg-secondary-600 text-cream-50 hover:bg-secondary-700 shadow-warm hover:shadow-warm-lg hover:-translate-y-0.5',
    outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 hover:border-primary-700 hover:text-primary-700',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  );
} 