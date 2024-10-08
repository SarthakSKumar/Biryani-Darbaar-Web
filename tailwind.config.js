/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit', // Ensure JIT mode is enabled
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      colors:{
        primary:"#EA1F27",
        secondaryRed:"#EA1F27",
        primaryYellow:"#F4C145",
        shade: "rgba(253, 197, 94, 1)",
        shader: "rgba(234, 31, 39, 0.3)"
      },
      height:{
        79:'550px',
        69:'600px',
        11:'22px',
      },
      width:{
        11:'22px',
        69:'400px'
      }
    },
  },
  plugins: [],
}

