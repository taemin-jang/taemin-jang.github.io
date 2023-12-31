/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
    `./src/template/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
          green: "#A4BC9C",
          green_hover: "#8CA68B",
          green_bg: "#D6F5CB",
          project2: "#bebfff",
          project3: "#EFEDEF",
        },
        badge: {
          vue: "#4FC08D",
          vuetify: "#1867C0",
          js: "#F7DF1E",
          ts: "#3178C6",
          express: "#000000",
          node: "#339933",
          html: "#E34F26",
          css: "#1572B6",
          git: "#F05032",
          webrtc: "#333333",
          socket: "#010101",
        },
      },
      dropShadow: {
        customRD: "50px 50px 0 #A4BC9C", // x y blur color
        shadowRD: "20px 20px 15px #000000", // x y blur color
      },
      screens: {
        "7xl": {
          max: "2300px",
        },
        "6xl": {
          max: "2000px",
        },
        "5xl": {
          max: "1800px",
        },
        "4xl": {
          max: "1700px",
        },
        "3xl": {
          max: "1600px",
        },
        "2xl-m": {
          max: "1536px",
        },
      },
    },
    fontFamily: {
      body: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      sans: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
    },
  },
  plugins: [],
};
