import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'waarm-oranje': '#ed6f1e',
        'waarm-antraciet': '#2d2d2d',
        'waarm-donker': '#1a1a1a',
      },
      fontFamily: {
        sans: ['Open Sans', 'Arial', 'sans-serif'],
        heading: ['Archivo', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
