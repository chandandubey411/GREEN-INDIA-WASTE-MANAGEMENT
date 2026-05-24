/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        green: {
          50:  '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float':         'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'pulse-slow':    'pulse 4s ease-in-out infinite',
        'spin-slow':     'spin 20s linear infinite',
        'bounce-slow':   'bounce 3s ease-in-out infinite',
        'slide-up':      'slideUp 0.6s ease-out',
        'fade-in':       'fadeIn 0.5s ease-out',
      },
      keyframes: {
        float:   { '0%, 100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-20px)' } },
        slideUp: { from: { opacity: '0', transform: 'translateY(30px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        fadeIn:  { from: { opacity: '0' }, to: { opacity: '1' } },
      },
      backdropBlur: { xs: '2px' },
      boxShadow: {
        'green-sm':  '0 1px 3px 0 rgba(34,197,94,0.1)',
        'green-md':  '0 4px 6px -1px rgba(34,197,94,0.15)',
        'green-lg':  '0 10px 15px -3px rgba(34,197,94,0.2)',
        'green-xl':  '0 20px 25px -5px rgba(34,197,94,0.25)',
        'green-2xl': '0 25px 50px -12px rgba(34,197,94,0.3)',
      },
    },
  },
  plugins: [],
}