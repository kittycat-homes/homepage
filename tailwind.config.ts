import type { Config } from "tailwindcss";

const themeShape = {
  "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
  "--rounded-btn": "9099999rem", // border radius rounded-btn utility class, used in buttons and similar element
  "--rounded-badge": "2rem", // border radius rounded-badge utility class, used in badges and similar
  "--animation-btn": "0.25s", // duration of animation when you click on button
  "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
  "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
  "--border-btn": "1px", // border width of buttons
  "--tab-border": "1px", // border width of tabs
  "--tab-radius": "0.5rem", // border radius of tabs
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      black: ["CODEBold"],
      bold: ["CODELight"],
      sans: ["Josefin"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#59ae59",
          secondary: "#9dda9d",
          accent: "#6cd66c",
          neutral: "#2140B0",
          "base-100": "#FFE6A4",
          ...themeShape,
          ".drop-shadow-neutral": {
            filter: "drop-shadow(0 10px 8px #2140B0)",
          },
        },
      },
      {
        dark: {
          primary: "#aacdaa",
          secondary: "#4b6566",
          accent: "#78919c",
          neutral: "#FFE6A4",
          "base-100": "#2140B0",
          ...themeShape,
          ".drop-shadow-neutral": {
            filter: "drop-shadow(0 10px 8px #ffe6A4)",
          },
        },
      },
    ],
  },
};
export default config;
