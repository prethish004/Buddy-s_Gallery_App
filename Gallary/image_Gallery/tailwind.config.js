import daisyui from 'daisyui';
// /** @type {import('tailwindcss').Config} */
export default {
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'file-selected': '#4caf50', // Define a color for file selected
      },
    },
  },
  plugins:[require('tailwindcss'),
    require('autoprefixer'),daisyui]
};

