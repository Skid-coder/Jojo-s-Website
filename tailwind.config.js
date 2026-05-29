/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#f3f1ff',
          100: '#ebe5ff',
          200: '#d9ceff',
          300: '#bda7ff',
          400: '#9b78ff',
          500: '#7c4dff',
          600: '#6b33f5',
          700: '#5a23d8',
          800: '#4a1eaf',
          900: '#3e1d8d',
        },
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(91, 33, 182, 0.18)',
        card: '0 4px 24px -6px rgba(17, 24, 39, 0.08), 0 12px 42px -4px rgba(17, 24, 39, 0.06)',
        'card-hover': '0 8px 32px -4px rgba(91, 33, 182, 0.14), 0 16px 48px -8px rgba(17, 24, 39, 0.1)',
        glow: '0 0 40px -8px rgba(124, 77, 255, 0.35)',
        'btn': '0 4px 14px -4px rgba(91, 33, 182, 0.4)',
        'btn-hover': '0 8px 24px -4px rgba(91, 33, 182, 0.5)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'shine': 'shine 1.5s ease-in-out',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 6s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        shine: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        'hero-radial':
          'radial-gradient(1200px 600px at 10% -10%, rgba(124,77,255,0.18), transparent 60%), radial-gradient(900px 500px at 100% 0%, rgba(59,130,246,0.15), transparent 60%)',
      },
    },
  },
  plugins: [],
};
