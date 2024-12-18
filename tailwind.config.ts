import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        courier: ['"Courier New"', "Courier", "monospace"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customOrange: '#FFA500',
        customRed: '#FF4500',
        customGray: '#708090',
      },
    },
  },
  darkMode: "class",
 plugins: [],
};
export default config;
