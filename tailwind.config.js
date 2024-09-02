// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nanum': ['Nanum Gothic Coding', 'monospace'],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#570df8", 
          "secondary": "#f000b8", 
          "accent": "#37cdbe", 
          "neutral": "#3d4451", 
          "base-100": "#ffffff", // Set base background color to white
          // Add other custom theme colors as needed
        },
      },
      "light", // You can also include other DaisyUI themes if needed
    ],
  },
}
