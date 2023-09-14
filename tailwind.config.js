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
        infoDark: '#141c2f',

        backgroundLight: '#f4fff8',
        primaryLight: '#547aa5',
        searchLight: '#0079fe',
        activeLight: '#0271ed',
        infoLight: '#313849'

      }
    }
  },
  plugins: []
}
