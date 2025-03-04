// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        'custom': '1600px', // 自定义屏幕断点
      },
      backgroundImage: {
        'theme-gradient': "linear-gradient(90deg, #011132 0%, #0d3c84 47%, #0d3c84 53%, #011132 100%)",
      },
    },
  },
  plugins: [],
}