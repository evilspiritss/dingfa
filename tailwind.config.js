// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'theme-gradient': "linear-gradient(90deg, #011132 0%, #0d3c84 47%, #0d3c84 53%, #011132 100%)",
      },
    },
  },
  plugins: [],
}