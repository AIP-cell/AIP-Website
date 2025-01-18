'use client'
import type { ReactNode } from 'react';

import { motion } from 'framer-motion';

type Props = {
    children: ReactNode;
    delay: number;
    x1?: number;
    x2?: number;
    y1?: number;
    y2?: number;
    className?: string;
};

const FadeInAnimation = ({ children,className, delay,x1,x2,y1,y2 }: Props) => {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, x: x1 ,y:y1},
                visible: { opacity: 1, x: x2,y:y2 },
            }}
            initial="hidden"
            animate="visible"
            // whileInView="visible"
            viewport={{once: true}}
            transition={{ delay: delay, ease: 'easeInOut',duration:0.5}}
            className={`${className}`}
        >
            {children}
        </motion.div>
    );
};
export default FadeInAnimation;
