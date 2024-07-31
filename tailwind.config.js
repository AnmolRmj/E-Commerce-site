module.exports = {
  mode: 'jit', // Just-in-Time mode
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
    // Add any other files that contain your HTML/JSX/TSX/Vue templates
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      

      // You can extend the default Tailwind CSS theme here
    },
  },
  variants: {
    extend: {
      // You can extend or customize the default variants here
    },
  },
  plugins: [
    // You can add custom plugins here
  ],
};
