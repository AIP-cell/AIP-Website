import type { ClassValue } from "clsx";

import { clsx } from "clsx";
import {
  createTailwindMerge,
  getDefaultConfig,
  mergeConfigs,
} from "tailwind-merge";

const tailwindMerge = createTailwindMerge(getDefaultConfig, (config) =>
  mergeConfigs(config, {
    extend: {
      classGroups: {
        backgroundImage: [],
        colors: [
          "lightPeach",
          "fivePBackground",
          "darkPurple",
          "bgLightPeach",
          "bgGray5",
          "bgSlatePurple",
          "darkGray",
          "midGray",
          "textPurple",
          "gray10",
          "gray20",
          "gray40",
          "gray80",
          "gray90",
          "gray50",
          "gray60",
          "footerGray",
          "purple10",
          "purple40",
          "lightPurplePink",
          "bgCollab",
          "lightgrey",
          "darkBlack",
        ],

        fontSize: [
          "h1",
          "h2",
          "h3",
          "h4",
          "h4a",
          "h6Copy",
          "h7Copy3",
          "h7Copy2",
          "h5",
          "h8Copy3",
          "h6M",
          "h9Copy4",
          "h9Copy5",
          "h10Copy6",
        ],
      },
    },
  })
);

export default function cn(...input: ClassValue[]) {
  return tailwindMerge(clsx(input));
}
