/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1.25rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1160px',
        '2xl': '1280px',
      },
    },
    extend: {
      colors: {
        midway: {
          red: '#D62B2B',
          'red-dark': '#A81F1F',
          'red-light': '#F4544B',
          navy: '#0F1B3D',
          'navy-light': '#1B2A55',
          gold: '#F2B233',
          'gold-light': '#FBD873',
          cream: '#FFF9EF',
        },
      },
      fontFamily: {
        display: ['"Anton"', '"Poppins"', 'sans-serif'],
        heading: ['"Poppins"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 30px -12px rgba(15, 27, 61, 0.25)',
        'card-hover': '0 20px 40px -12px rgba(15, 27, 61, 0.35)',
      },
      backgroundImage: {
        'stripe-diag':
          'repeating-linear-gradient(45deg, rgba(255,255,255,0.06) 0, rgba(255,255,255,0.06) 10px, transparent 10px, transparent 20px)',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'fade-up': 'fadeUp 0.6s ease-out both',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
