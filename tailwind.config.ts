import fluid, { extract, screens, fontSize } from "fluid-tailwind";
import type { Config } from "tailwindcss";
const config: Config = {
  prefix: 'tw-',
  content: {
    files: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    extract:extract({ prefix: "tw-" }),
  },
  theme: {
    screens,
    fontSize,
    /** @type {import('fluid-tailwind').FluidThemeConfig} */
    fluid: ({ theme }: any) => ({
      defaultScreens: ["20rem", theme("screens.xl")],
    }),
    extend: {
      backgroundImage: {
        // "darkPurple": "#5E165B",
        // "bgLightPeach": "#D9D9D9",
        // "bgGray5": "#F0F0F2",
        // "bgSlatePurple":"#F0F0F21A",
        
        "purpleToPink":"linear-gradient(to right, #E24BDE , #A17FF0)",
        "purpleToBlue":"linear-gradient(to bottom, #91298C , #224193)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        
        "darkPurple": "#5E165B",
        "bgLightPeach": "#FFFDF7",
        "bgGray5": "#F0F0F2",
        "bgSlatePurple":"#F0F0F21A",
        "darkGray": "#282A20",
        "midGray": "#45484D",
        "textPurple":"#91298C",
        "gray10":"#DFE0E5",
        "gray20":"#C0C3CC",
        "gray40":"#81848F",
        "gray80":"#323538",
        "gray50":"#6A6D75",
        "gray60":"#575A61",
        "footerGray":"#DFE0E580",
        "purple10":"#E1CCED",
        "purple40":"#B861B3",
        "lightPurplePink":"#E0ABDE",
        "bgCollab":"#F3F3F3"
        
        
      },
      fontFamily: {
        inter: "var(--inter)",
        playFair: "var(--playfairDisplay)",
      },
      fontSize: {
        // Desktop
        h1: "3.375rem",
        h2: "3rem",
        h3: "2.5rem",
        h4: "2rem",
        h4a: "1.625rem",
        h5: "1.25rem",
        h6M: "1.125rem",

        h6Copy1: "1.5rem",
        h7Copy2: "1.25rem",
        h8Copy3: "1.125rem",
        h9Copy4: "1rem",
        h9Copy5: "0.875rem",
        h10Copy6: "0.75rem",
      },
    },
  },
  plugins: [fluid],
};
export default config;
