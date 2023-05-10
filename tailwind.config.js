/** @type {import('tailwindcss').Config} */
export default {
 
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    screens: {
      'xl': '1280px',
      'lg': '1024px',
      'md': '768px',
      'sm': '640px',
      'ssm': '420px'
    },
    extend: {
      // Primary:'#DF6751',
      // Secondary:'#F8F9FB',
      // BoldText:'#000000',
      // NormalText:'#75797F',
      // CardText:'#191D23',
      // WhiteBoldText:'#FFFFFF',
      // WhiteNormalText:'#EDEDED',
      // white:'rgba(255, 255, 255, 1)',
      // label:' #344054'
    },
      fontFamily:{
        IBM:['IBM Plex Sans', 'sans-serif'],
        Playfair:['Playfair Display', 'serif']
      },
    },

  plugins: [],
}

