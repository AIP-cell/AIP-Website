import type { ClassValue } from "clsx";

import { clsx } from "clsx";
import { withFluid } from "@fluid-tailwind/tailwind-merge";

import { createTailwindMerge, getDefaultConfig } from "tailwind-merge";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

// Resolve your actual Tailwind config
const resolvedConfig = resolveConfig(tailwindConfig);

const tailwindMerge = createTailwindMerge(() => {
  const defaultConfig = getDefaultConfig();

  return {
    ...defaultConfig,
    theme: {
      ...defaultConfig.theme,

      colors: Object.keys(resolvedConfig.theme.colors ?? {}),
      fontSize: Object.keys(resolvedConfig.theme?.fontSize ?? {}),
    },
  };
}, withFluid);

export function cn(...input: ClassValue[]) {
  return tailwindMerge(clsx(input));
}