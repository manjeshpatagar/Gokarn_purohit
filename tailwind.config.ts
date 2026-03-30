import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#ea580c",
          secondary: "#f59e0b",
          surface: "#fff8f1",
          accent: "#7c2d12",
        },
      },
      boxShadow: {
        soft: "0 18px 45px -24px rgba(124, 45, 18, 0.35)",
      },
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(135deg, rgba(28, 25, 23, 0.88), rgba(154, 52, 18, 0.72))",
      },
    },
  },
  plugins: [],
};

export default config;
