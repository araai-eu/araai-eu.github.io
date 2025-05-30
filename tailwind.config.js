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
          50: '#eafff1',
          100: '#6afeff',
          200: '#9ddfff',
          300: '#70fcfe',
          400: '#85fcfe',
          500: '#2afefe',
          600: '#26e4e7',
          700: '#1ea2b4',
          800: '#1f788c',
          900: '#12696b',
        },
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#06121c',
        }
      },
      fontFamily: {
        'signika': ['Signika', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'oxygen': ['Oxygen', 'sans-serif'],
      }
    },
  },
  plugins: [],
} 