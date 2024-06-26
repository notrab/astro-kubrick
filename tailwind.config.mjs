/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        boulder: "#777777",
        "chathams-blue": "#114477",
        "science-blue": "#0066CC",
        "mine-shaft": "#333333",
      },
      fontFamily: {
        sans: ["Lucida Grande", "Verdana", "Arial", "Sans-Serif"],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.mineshaft"),
            a: {
              color: theme("colors.science-blue"),
              "&:hover": {
                color: theme("colors.chathams-blue"),
              },
            },
            ul: {
              "> li": {
                "&::before": {
                  content: "\\00BB \\0020",
                },
              },
            },
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar-hide"),
  ],
};
