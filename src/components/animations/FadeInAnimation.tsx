"use client";
import type { ReactNode } from "react";

import { motion } from "motion/react";

type Props = {
  children: ReactNode;
  delay: number;
  // x1?: number | string;
  // x2?: number | string;
  y1?: number;
  y2?: number;

  className?: string;
  duration?: number;
};

const FadeInAnimation = ({
  children,
  className,
  duration,

  delay,
  // x1,
  // x2,
  y1,
  y2,
}: Props) => {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          // x: x1,
          y: y1 ?? 0,
        },
        visible: {
          opacity: 1,
          // x: x2,
          y: y2 ?? 0,
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        delay: delay,
        ease: "easeInOut",
        duration: duration ?? 0.5,
      }}
      className={`${className}`}
    >
      {children}
    </motion.div>
  );
};
export default FadeInAnimation;
