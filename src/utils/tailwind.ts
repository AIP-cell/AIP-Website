import type { ClassValue } from 'clsx';

import { clsx } from 'clsx';
import { createTailwindMerge, getDefaultConfig, mergeConfigs } from 'tailwind-merge';

const tailwindMerge = createTailwindMerge(getDefaultConfig, config =>
    mergeConfigs(config, {
        extend: {
            classGroups: {
                backgroundImage: [
                    // 'global-gradient-card'
                ],
                colors: [
                    //'color-global-main',
                    //'color-global-light-grey',
                    //'color-global-grey',
                ],

                fontSize: [
                    //'text-font-global-body1',
                    //'text-font-global-body2',
                    //'text-font-global-body3',
                    //'text-font-global-headline1',
                    //'text-font-global-headline2',
                ],
            },
        },
    }),
);

export default function cn(...input: ClassValue[]) {
    return tailwindMerge(clsx(input));
}
