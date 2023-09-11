/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        backgroundDark: '#141c2f',
        primaryDark: '#1f2a48',
        searchDark: '#0079fe',
        activeDark: '#0271ed',

        backgroundLight: '#ffff',
        primaryLight: '#809CF0',
        searchLight: '#0079fe',
        activeLight: '#0271ed'

      }
    }
  },
  plugins: []
}
