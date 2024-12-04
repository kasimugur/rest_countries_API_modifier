import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "rest-darkBlue": "#2b3945",
        "rest-veryDarkBlue": "hsl(207, 26%, 17%)",
        "rest-veryTextBlue": "hsl(200, 15%, 8%)",
        "rest-darkGray": "hsl(0, 0%, 52%)",
        "rest-veryLightGray": "hsl(0, 0%, 80%)",
        "rest-white": "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
