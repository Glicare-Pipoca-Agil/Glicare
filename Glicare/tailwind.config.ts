  import type { Config } from "tailwindcss";

  export default {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
          background: "var(--background)",
          foreground: "var(--foreground)",
          primary: "var(--primary)",
          'primary-gray': "var(--primary-gray)",
          secondary: "#4568FC",
          textColor: "var(--color-text-gray)",
        },
        fontFamily: {
          roboto: "var(--font-roboto)",
          inter: "var(--font-inter)",
        },
        fontSize: {
          '28': '28px',  
        },
        width: {
          '336': '336px', 
          '700': '700px',
          '36': '36px', 
        },
        height: {
          '310': '310px',
          '36': '36px', 
        },
        spacing: {
          '64': '64px',
          '34': '34px',
          '125': '125px',
        },
        lineHeight: {
          '34': '34px',  
        },
      },
    },
    plugins: [],
  } satisfies Config;
  