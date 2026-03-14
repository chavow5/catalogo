/** @type {import('tailwindcss').Config} */
export default {
  // aplica tailwind a todos los archivos del proyecto
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      // paleta de colores del local
      colors: {
        naranja: {
          50:  '#fff7ed',
          100: '#ffedd5',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
        },
        dorado: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        },
        oscuro: {
          900: '#0f0a06',
          800: '#1a1009',
          700: '#261810',
          600: '#3a2416',
        },
      },
      // fuente principal
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      // animacones extra
      animation: {
        'slide-in-right': 'slideInRight 0.3s ease-out',
        'fade-in': 'fadeIn 0.4s ease-out',
        'bounce-soft': 'bounceSoft 0.5s ease-out',
      },
      keyframes: {
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.15)' },
        },
      },
    },
  },
  plugins: [],
}
