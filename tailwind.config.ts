/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'eb-garamond': ['var(--font-eb-garamond)', 'serif'],
        sans: ['var(--font-eb-garamond)', 'serif'],
      },
    },
  },
  plugins: [],
}