import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1E2A4A",
          soft: "#2A3A62",
          muted: "#3D4D73",
        },
        coral: {
          DEFAULT: "#E8734A",
          dark: "#D45E35",
          light: "#F4A07C",
        },
        turquoise: {
          DEFAULT: "#2F9B9F",
          light: "#5EC8C5",
        },
        sand: {
          DEFAULT: "#F7F1E8",
          dark: "#E8DCC8",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "var(--font-arabic)", "system-ui", "sans-serif"],
        heading: ["var(--font-poppins)", "var(--font-arabic)", "sans-serif"],
        arabic: ["var(--font-arabic)", "sans-serif"],
      },
      boxShadow: {
        card: "0 12px 40px -16px rgba(30, 42, 74, 0.18)",
        lift: "0 20px 50px -20px rgba(30, 42, 74, 0.28)",
      },
      backgroundImage: {
        sandfade: "linear-gradient(180deg, #F7F1E8 0%, #FFFFFF 42%, #FFFFFF 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
