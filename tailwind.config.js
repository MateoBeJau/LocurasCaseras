/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FDF8F6',
          100: '#F9EDE8',
          200: '#F5DFD6',
          300: '#ECC9BA',
          400: '#E2B09B',
          500: '#D89679',
          600: '#C67D5E',
          700: '#B36545',
          800: '#8E4E35',
          900: '#6A3B28',
        },
        secondary: {
          50: '#F6F2F0',
          100: '#EBE5E1',
          200: '#D8CBC3',
          300: '#C5B1A5',
          400: '#B29787',
          500: '#9F7D69',
          600: '#8C634F',
          700: '#704F3F',
          800: '#543B2F',
          900: '#382720',
        },
        cream: {
          50: '#FFFBF7',
          100: '#FFF7EF',
          200: '#FFEEDD',
          300: '#FFE5CC',
          400: '#FFDCBB',
          500: '#FFD3AA',
          600: '#FFC999',
          700: '#FFBF88',
          800: '#FFB677',
          900: '#FFAD66',
        },
      },
      fontFamily: {
        sans: ['var(--font-quicksand)'],
        display: ['var(--font-playfair-display)'],
        handwriting: ['var(--font-dancing-script)'],
      },
      boxShadow: {
        'warm': '0 4px 14px 0 rgba(106, 59, 40, 0.1)',
        'warm-lg': '0 10px 25px 0 rgba(106, 59, 40, 0.15)',
      },
    },
  },
  plugins: [],
} 