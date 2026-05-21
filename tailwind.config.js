/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '400px',
      },
      colors: {
        gold: {
          50: '#FBF6E8',
          100: '#F5E6C4',
          200: '#E8CF8E',
          300: '#D4B05A',
          400: '#C9A227',
          500: '#B8860B',
          600: '#9A7209',
          glow: 'rgba(201, 162, 39, 0.35)',
        },
      },
      fontFamily: {
        display: ['"SF Pro Display"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        nepali: ['"Noto Sans Devanagari"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 40px rgba(201, 162, 39, 0.15), 0 0 80px rgba(201, 162, 39, 0.08)',
        'gold-glow-lg': '0 0 60px rgba(201, 162, 39, 0.25), 0 0 120px rgba(201, 162, 39, 0.12)',
      },
      animation: {
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
}
