/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      translate: {
        'translateZ-0': 'translateZ(0)',
        'translateZ-10': 'translateZ(10px)',
        'translateZ-20': 'translateZ(20px)',
        'translateZ-50': 'translateZ(50px)',
      },
      transform: {
        'perspective': 'perspective(1000px)',
      },
    },
  },
  variants: {
    extend: {
      translate: ['hover', 'group-hover'],
    },
  },
  plugins: [],
}