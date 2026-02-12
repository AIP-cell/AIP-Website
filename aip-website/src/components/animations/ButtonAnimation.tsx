"use client";
import type { MouseEventHandler } from "react";

import { motion } from "motion/react";

export const ButtonAnimation = ({
  children,
  className,
  onClick,
  type,
  disabled,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  type?: "button" | "reset" | "submit" | undefined;
  disabled?: boolean;
}) => {
  return (
    <motion.button
      type={type ?? "button"}
      disabled={disabled}
      onClick={onClick}
      className={className ?? ""}
    >
      {children}
    </motion.button>
  );
};
