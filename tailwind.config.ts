import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#420f12", // Red from the bot's speech bubbles
        secondery: "#e47100", // Orange from the bot's speech bubbles
        /* Extra Coolrs */
        white: "#FFFFFF", // Background color
        black: "#000000", // Text color
        // green: "#00FF00", // Dot indicating online status
        // gray: "#f3f4f6",
      },
      fontFamily: {
        jaldi: ["Jaldi", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
