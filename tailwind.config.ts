import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"], // lub ["class", '[data-theme="dark"]'] jeśli używasz next-themes
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#FFF1E6",
          500: "#FF7000",
        },
        dark: {
          100: "#000000",
          200: "#0F1117",
          300: "#151821",
          400: "#212734",
          500: "#101012",
        },
        light: {
          400: "#858EAD",
          500: "#7B8EC8",
          700: "#DCE3F1",
          800: "#F4F6F8",
          850: "#FDFDFD",
          900: "#FFFFFF",
        },
        link: {
          100: "#1DA1F2",
        },
      },
      boxShadow: {
        "light-100":
          "0px 12px 20px 0px rgba(184, 184, 184, 0.03), 0px 6px 12px 0px rgba(184, 184, 184, 0.02), 0px 2px 4px 0px rgba(184, 184, 184, 0.03)",
        "light-200": "10px 10px 20px 0px rgba(218, 213, 213, 0.10)",
        "light-300": "-10px 10px 20px 0px rgba(218, 213, 213, 0.10)",
        "dark-100": "0px 2px 10px 0px rgba(46, 52, 56, 0.10)",
        "dark-200": "2px 0px 20px 0px rgba(39, 36, 36, 0.04)",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        "space-grotesk": ["var(--font-space-grotesk)"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      screens: {
        xs: "420px",
      },
      backgroundImage: {
        "auth-dark": "url(/images/auth-dark.png)",
        "auth-light": "url(/images/auth-light.png)",
      },
    },
  },
  plugins: [
    tailwindcssAnimate,
    plugin(function ({ addUtilities, theme }) {
      const newUtilities = {
        ".base-medium": {
          "@apply text-[18px] font-medium leading-[25.2px]": "",
        },

        ".base-semibold": {
          "@apply text-[18px] font-semibold leading-[25.2px]": "",
        },

        ".base-bold": {
          "@apply text-[18px] font-bold leading-[140%]": "",
        },

        ".paragraph-regular": {
          "@apply text-[16px] font-normal leading-[22.4px]": "",
        },

        ".paragraph-medium": {
          "@apply text-[16px] font-medium leading-[22.4px]": "",
        },

        ".paragraph-semibold": {
          "@apply text-[16px] font-semibold leading-[20.8px]": "",
        },

        ".body-regular": {
          "@apply text-[14px] font-normal leading-[19.6px]": "",
        },

        ".body-medium": {
          "@apply text-[14px] font-medium leading-[18.2px]": "",
        },

        ".body-semibold": {
          "@apply text-[14px] font-semibold leading-[18.2px]": "",
        },

        ".body-bold": {
          "@apply text-[14px] font-bold leading-[18.2px]": "",
        },

        ".small-regular": {
          "@apply text-[12px] font-normal leading-[15.6px]": "",
        },

        ".small-medium": {
          "@apply text-[12px] font-medium leading-[15.6px]": "",
        },

        ".small-semibold": {
          "@apply text-[12px] font-semibold leading-[15.6px]": "",
        },

        ".subtle-medium": {
          "@apply text-[10px] font-medium leading-[13px] !important": "",
        },

        ".subtle-regular": {
          "@apply text-[10px] font-normal leading-[13px]": "",
        },

        ".placeholder": {
          "@apply placeholder:text-light-400 dark:placeholder:text-light-500": "",
        },

        ".invert-colors": {
          "@apply invert dark:invert-0": "",
        },
        ".text-dark100_light900": {
          color: theme("colors.dark.100") as string,
        },
        ".dark .text-dark100_light900": {
          color: theme("colors.light.900") as string,
        },

        ".text-dark200_light900": {
          color: theme("colors.dark.200") as string,
        },
        ".dark .text-dark200_light900": {
          color: theme("colors.light.900") as string,
        },

        ".text-dark200_light800": {
          color: theme("colors.dark.200") as string,
        },
        ".dark .text-dark200_light800": {
          color: theme("colors.light.800") as string,
        },

        ".text-dark300_light700": {
          color: theme("colors.dark.300") as string,
        },
        ".dark .text-dark300_light700": {
          color: theme("colors.light.700") as string,
        },

        ".text-dark400_light700": {
          color: theme("colors.dark.400") as string,
        },
        ".dark .text-dark400_light700": {
          color: theme("colors.light.700") as string,
        },

        ".text-dark500_light700": {
          color: theme("colors.dark.500") as string,
        },
        ".dark .text-dark500_light700": {
          color: theme("colors.light.700") as string,
        },

        ".text-dark500_light500": {
          color: theme("colors.dark.500") as string,
        },
        ".dark .text-dark500_light500": {
          color: theme("colors.light.500") as string,
        },

        ".text-dark500_light400": {
          color: theme("colors.dark.500") as string,
        },
        ".dark .text-dark500_light400": {
          color: theme("colors.light.400") as string,
        },

        ".text-dark300_light900": {
          color: theme("colors.dark.300") as string,
        },
        ".dark .text-dark300_light900": {
          color: theme("colors.light.900") as string,
        },

        ".text-dark400_light800": {
          color: theme("colors.dark.400") as string,
        },
        ".dark .text-dark400_light800": {
          color: theme("colors.light.800") as string,
        },

        ".text-light400_light500": {
          color: theme("colors.light.400") as string,
        },
        ".dark .text-light400_light500": {
          color: theme("colors.light.500") as string,
        },

        ".text-dark400_light500": {
          color: theme("colors.dark.400") as string,
        },
        ".dark .text-dark400_light500": {
          color: theme("colors.light.500") as string,
        },

        ".text-dark400_light900": {
          color: theme("colors.dark.400") as string,
        },
        ".dark .text-dark400_light900": {
          color: theme("colors.light.900") as string,
        },
        ".light-border": {
          borderColor: theme("colors.light.800") as string,
        },
        ".light-border-dark": {
          borderColor: theme("colors.dark.300") as string,
        },
        ".light-border-2": {
          borderColor: theme("colors.light.700") as string,
        },
        ".light-border-2-dark": {
          borderColor: theme("colors.dark.400") as string,
        },
        ".h1-bold": {
          fontSize: "30px",
          fontWeight: "700",
          lineHeight: "42px",
          letterSpacing: "-0.02em", // odpowiada tracking-tighter
        },
        ".h2-bold": {
          fontSize: "24px",
          fontWeight: "700",
          lineHeight: "31.2px",
        },
        ".h2-semibold": {
          fontSize: "24px",
          fontWeight: "600",
          lineHeight: "31.2px",
        },
        ".h3-bold": {
          fontSize: "20px",
          fontWeight: "700",
          lineHeight: "26px",
        },
        ".h3-semibold": {
          fontSize: "20px",
          fontWeight: "600",
          lineHeight: "24.8px",
        },
        /* Background combinations */
        ".shadow-light100_dark100": {
          boxShadow: theme("boxShadow.light-100") as string,
        },

        ".shadow-light100_darknone": {
          boxShadow: theme("boxShadow.light-100") as string,
        },

        // DARK MODE
        ".dark .shadow-light100_dark100": {
          boxShadow: theme("boxShadow.dark-100") as string,
        },
        ".dark .shadow-light100_darknone": {
          boxShadow: "none",
        },
        ".background-light800_dark200": {
          backgroundColor: `${theme("colors.light.800")}`,
          "@apply dark:bg-dark-200": {},
        },
        ".background-light850_dark100": {
          backgroundColor: `${theme("colors.light.850")}`,
          "@apply dark:bg-dark-100": {},
        },
        ".background-light900_dark200": {
          backgroundColor: `${theme("colors.light.900")}`,
          "@apply dark:bg-dark-200": {},
        },
        ".background-light900_dark300": {
          backgroundColor: `${theme("colors.light.900")}`,
          "@apply dark:bg-dark-300": {},
        },
        ".background-dark400_light900": {
          backgroundColor: `${theme("colors.light.900")}`,
          "@apply dark:bg-dark-400": {},
        },
        ".background-light800_darkgradient": {
          backgroundColor: `${theme("colors.light.800")}`,
          background: "linear-gradient(232deg, rgba(23,28,35,0.41) 0%, rgba(19,22,28,0.7) 100%)",
        },
        ".primary-gradient": {
          background: "linear-gradient(129deg, #ff7000 0%, #e2995f 100%)",
        },
        ".dark-gradient": {
          background: "linear-gradient(232deg, rgba(23,28,35,0.41) 0%, rgba(19,22,28,0.7) 100%)",
        },
        ".light-gradient": {
          background: "linear-gradient(132deg, rgba(247,249,255,0.5) 0%, rgba(229,237,255,0.25) 100%)",
        },
        ".primary-text-gradient": {
          background: "linear-gradient(129deg, #ff7000 0%, #e2995f 100%)",
          "background-clip": "text",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
        },
        /* Flex utilities */
        ".flex-center": { display: "flex", justifyContent: "center", alignItems: "center" },
        ".flex-between": { display: "flex", justifyContent: "space-between", alignItems: "center" },
        ".flex-start": { display: "flex", justifyContent: "flex-start", alignItems: "center" },
        /* Scrollbars */
        ".custom-scrollbar::-webkit-scrollbar": { width: "3px", height: "3px", borderRadius: "2px" },
        ".custom-scrollbar::-webkit-scrollbar-track": { background: "#ffffff" },
        ".custom-scrollbar::-webkit-scrollbar-thumb": { background: "#888", borderRadius: "50px" },
        ".custom-scrollbar::-webkit-scrollbar-thumb:hover": { background: "#555" },
        ".no-scrollbar::-webkit-scrollbar": { display: "none" },
        ".no-scrollbar": { "-ms-overflow-style": "none", "scrollbar-width": "none" },
      };
      addUtilities(newUtilities);
    }),
  ],
};

export default config;
