"use client";
import type { ReactNode } from "react";

import { motion } from "motion/react";

type Props = {
  children: ReactNode;
  toggleValue: boolean;
};

const SideBarAnimation = ({ children, toggleValue }: Props) => {
  return (
    <motion.div
      variants={{
        initial: { opacity: 0, right: -300, top: 0 },
        animate: { opacity: 1, right: -300, top: 0 },
      }}
      initial="initial"
      animate={toggleValue ? "animate" : ""}
      transition={{ ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};
export default SideBarAnimation;
