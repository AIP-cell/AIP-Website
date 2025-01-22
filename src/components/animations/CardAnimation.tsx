"use client";
import { motion } from "framer-motion";
import { type ReactNode } from "react";

type Props = {
  children: ReactNode;
  index: number;
  delay: number;
  className?: string;
};

const CardAnimation = ({ children, className, index, delay }: Props) => {
  // const [value, setValue] = useState()
  return (
    <motion.div
      variants={{
        initial: {
          opacity: 0,
          y: 20,
        },
        animate: () => ({
          opacity: 1,
          y: 0,
          transition: {
            delay: delay * index,
            ease: "easeInOut",
            // duration: 0.8,
            // ease: [0.8, 0.5, 0.22, 1],
          },
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
export default CardAnimation;
