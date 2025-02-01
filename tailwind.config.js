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
        69:'400px',
        59:'500px',
      },
      screens: {
        'tablet': {min:'768px',max:'798px'},
        't1': {min:'799px',max:'810px'},

  
        'laptop': '1024px',
        'ipad': {raw:'(min-width:1024px) and (min-height:1366px)'},
        'ipad1': {raw:'(min-width:1194px) and (min-height:834px)'},
        'samsung': {raw:'(min-width:800px) and (min-height:1280px)'},

        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
        'dp':{min:'1500px',max:'1700px'},
        'dp1':{min:'1701px',max:'1900px'},
        'dp2':{min:'1901px',max:'2100px'},
        'dp3':{min:'2101px',max:'2500px'},



      },
    },
  },
  plugins: [],
}

