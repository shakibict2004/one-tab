import { Container } from "postcss";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        Container: "1140px",
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/banner.jpg')", // Fixed typo from 'hero-pettern'
        'shakib': "url('/src/assets/img-7.jpg')", // No extra colon
        'lasts': "url('/src/assets/img-8.jpg')", // Removed space before img-8.jpg
      },
    },
  },
  plugins: [],
}
