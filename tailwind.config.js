/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "clamp-sm": "clamp(1.2rem, 0.45vw + 1rem, 1.9rem)",
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