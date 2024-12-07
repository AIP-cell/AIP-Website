import fluid, { extract, screens, fontSize } from "fluid-tailwind";
import type { Config } from "tailwindcss";
const config: Config = {
  darkMode: ["class"],
  prefix: "tw-",
  content: {
    files: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    extract: extract({ prefix: "tw-" }),
  },
  theme: {
    screens,
    fontSize,
    /** @type {import('fluid-tailwind').FluidThemeConfig} */
    fluid: ({ theme }: any) => ({
      defaultScreens: ["24.375rem", theme("screens.xl")],
    }),
    extend: {
      backgroundImage: {
        purpleToPink: "linear-gradient(to right, #A17FF0,#E24BDE)",
        purpleToBlue: "linear-gradient(to bottom, #91298C , #224193)",
        founderGradient: "linear-gradient(to bottom, #792e8e , #3a3b91)",
        toRightPurpleToBlue: "linear-gradient(to right, #91298C , #224193)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        lightPeach: "#121314",
        fivePBackground: "#fcf6e4",
        darkPurple: "#5E165B",
        bgLightPeach: "#FFFDF7",
        bgGray5: "#F0F0F2",
        bgSlatePurple: "#F0F0F21A",
        darkGray: "#282A20",
        midGray: "#45484D",
        textPurple: "#91298C",
        gray10: "#DFE0E5",
        gray20: "#C0C3CC",
        gray40: "#81848F",
        gray80: "#323538",
        gray90: "#222426",
        gray50: "#6A6D75",
        gray60: "#575A61",
        footerGray: "#DFE0E580",
        purple10: "#E1CCED",
        purple40: "#B861B3",
        lightPurplePink: "#E0ABDE",
        bgCollab: "#F3F3F3",
        lightgrey: "#D9D9D9",
        darkBlack: "#2A2820",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        inter: "var(--inter)",
        playFair: "var(--playfairDisplay)",
        playFairItalic: "var(--playfairDisplayItalic)",
      },
      fontSize: {
        h1: "3.375rem",
        h2: "3rem",
        h3: "2.5rem",
        h4: "2rem",
        h4a: "1.625rem",
        h6Copy1: "1.5rem",
        h7Copy3: "1.375rem",
        h7Copy2: "1.25rem",
        h5: "1.25rem",
        h8Copy3: "1.125rem",
        h6M: "1.125rem",
        h9Copy4: "1rem",
        h9Copy5: "0.875rem",
        h10Copy6: "0.75rem",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [fluid, require("tailwindcss-animate")],
};
export default config;
