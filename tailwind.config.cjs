/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-desktop': "url('./src/assets/home/backround-home-desktop.jpg')",
        'hero-tablet': "url('./src/assets/home/background-home-tablet.jpg')",
        'hero-mobile': "url('./src/assets/home/background-home-mobile.jpg')",

        'destination-desktop': "url('./src/assets/destination/background-destination-desktop.jpg')",
        'destination-tablet': "url('./src/assets/destination/background-destination-tablet.jpg')",
        'destination-mobile': "url('./src/assets/destination/background-destination-mobile.jpg')",

        'crew-desktop': "url('./src/assets/crew/background-crew-desktop.jpg')",
        'crew-tablet': "url('./src/assets/crew/background-crew-tablet.jpg')",
        'crew-mobile': "url('./src/assets/crew/background-crew-mobile.jpg')",

        'tech-desktop': "url('./src/assets/technology/background-technology-desktop.jpg')",
        'tech-tablet': "url('./src/assets/technology/background-technology-tablet.jpg')",
        'tech-mobile': "url('./src/assets/technology/background-technology-mobile.jpg')",
      },
      screens: {
        'sm' : "300px",
        '2sm' : "416px",
      },
      backgroundColor: {
        'hover': '#979797'
      },
      fontFamily: {
        'barlow' : 'Barlow, sans-serif',
        'barlow-cond' : 'Barlow Condensed, sans-serif',
        'belle' : 'Bellefair, sans-serif',
      },
      colors: {
        'hover': '#979797'
      }
    },
  },
  plugins: [],
}


