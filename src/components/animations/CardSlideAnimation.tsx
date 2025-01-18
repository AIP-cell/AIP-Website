"use client";
import { motion } from "framer-motion";
import { type ReactNode } from "react";

type Props = {
  children: ReactNode;
  index: number;
  delay: number;
  className?: string;
};

const CardSlideAnimation = ({ children, className, index, delay }: Props) => {
  // const [value, setValue] = useState()
  const even = index % 2 === 0;
  return (
    <motion.div
      variants={{
        initial: {
          opacity: 0,
          x: even ? "100%" : "-100%",
        },
        animate: () => ({
          opacity: 1,
          x: 0,
          transition: { delay: delay * index, ease: "easeIn", duration: 0.6 },
        }),
      }}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className={`${className}`}
    >
      {children}
    </motion.div>
  );
};
export default CardSlideAnimation;
