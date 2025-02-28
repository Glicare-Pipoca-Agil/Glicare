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
        'gray-dark': "var(--text-gray);",
        'blue-dark': "var(--text-blue);",
        'secondary-gray': "var(--secondary-gray)"
      },
      fontFamily: {
        roboto: "var(--font-roboto)",
        inter: "var(--font-inter)",
      },
      fontSize: {
        '28': '28px',  
      },
      width: {
        '36': '36px',
        '148': '148px', 
        '336': '336px',
        '400': '400px',
        '480': '480px',
        '700': '700px',
      },
      maxWidth: {
        '269': '269px',
        '624': '624px',
      },
      height: {
        '36': '36px',
        '74': '74px', 
        '148': '148px',
        '310': '310px',
      },
      spacing: {
        '17': '17px',
        '19': '19px',
        '33': '33px',
        '34': '34px',
        '35': '35px',
        '42': '42px',
        '45': '45px',
        '64': '64px',
        '68': '68px',
        '125': '125px',
      },
      lineHeight: {
        '34': '34px',  
      },
      backgroundImage: {
        'gradient-background': "linear-gradient(100deg, rgba(238,244,255,1) 19%, rgba(215,226,254,1) 43%, rgba(219,255,250,1) 57%, rgba(181,234,252,1) 85%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
