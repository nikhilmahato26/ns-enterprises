/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand palette extracted from the NS ENTERPRISES logo
        walnut: {
          50: '#f6f1ec',
          100: '#e9ddd1',
          200: '#d2b9a3',
          300: '#b89274',
          400: '#9c6f4f',
          500: '#7d5337',
          600: '#6f4e37',
          700: '#5c3d2e',
          800: '#432c22',
          900: '#2c1d16',
        },
        gold: {
          50: '#fbf6e9',
          100: '#f3e6c2',
          200: '#e7cd8c',
          300: '#d9b45c',
          400: '#cda247',
          500: '#bf9b5f',
          600: '#a07e3c',
          700: '#7d6230',
          800: '#5a4623',
          900: '#3a2d16',
        },
        ivory: {
          50: '#fefcf9',
          100: '#faf6f0',
          200: '#f5efe6',
          300: '#ece2d3',
          400: '#ddccb6',
        },
        matte: {
          DEFAULT: '#161412',
          900: '#161412',
          800: '#211d19',
          700: '#2c2722',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        luxe: '0.25em',
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(44, 29, 22, 0.18)',
        luxe: '0 20px 60px -15px rgba(44, 29, 22, 0.35)',
        gold: '0 10px 40px -10px rgba(191, 155, 95, 0.45)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #e7cd8c 0%, #bf9b5f 50%, #a07e3c 100%)',
        'walnut-gradient': 'linear-gradient(135deg, #6f4e37 0%, #432c22 100%)',
        'ivory-overlay':
          'linear-gradient(105deg, rgba(250,246,240,0.96) 0%, rgba(245,239,230,0.72) 45%, rgba(245,239,230,0.10) 100%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        shimmer: 'shimmer 6s linear infinite',
      },
    },
  },
  plugins: [],
}
