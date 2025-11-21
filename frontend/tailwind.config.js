/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3C50E0',
        secondary: '#80CAEE',
        success: '#10B981',
        danger: '#F87171',
        warning: '#FBBF24',
        info: '#3ABFF8',
      },
    },
  },
  plugins: [],
}
