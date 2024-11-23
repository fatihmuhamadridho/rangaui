/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Semua file di dalam folder src
    './dist/**/*.{js,jsx,ts,tsx}', // File hasil build,
    './styles/**/*.{css,scss}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
