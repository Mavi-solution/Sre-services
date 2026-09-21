/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './App.tsx',
    './index.tsx',
    './components/**/*.{ts,tsx}',
    './routes/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'void-navy': '#050B14',
        'neon-green': '#42E695',
        'tech-blue': '#2E7CF6',
      },
    },
  },
  plugins: [],
};
