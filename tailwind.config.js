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
        card: '0 8px 30px -10px rgba(17, 24, 39, 0.15)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
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
