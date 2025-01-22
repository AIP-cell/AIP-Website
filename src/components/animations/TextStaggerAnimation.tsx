"use client";
import cn from "@/utils/tailwind";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

type Props = {
  text: string;
  className?: string;
  splitTextClassName?: string;
  delay?: number;
};
const TextStaggerAnimation = ({
  text,
  className,
  splitTextClassName,
  delay,
}: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "0% 0% -50px 0%" });
  const words = text
    .replaceAll("<color>", " <color> ")
    .replaceAll("</color>", " </color> ")
    .split(" ")
    .filter(Boolean);
  let isColor = false;
  const variants = {
    initial: {
      y: 40,
    },
    visible: {
      y: 0,
      transition: {
        delay: delay,
        duration: 1.1,
        ease: [0.19, 1, 0.22, 1],
      },
    },
  };

  return (
    <p ref={ref} className={cn(className)}>
      {words.map((word, i: number) => {
        if (word == "<color>") {
          isColor = true;
          return "";
        }
        if (word == "</color>") {
          isColor = false;
          return "";
        }
        return (
          <span key={i} className={cn("inline-block masked-text")}>
            <motion.span
              variants={variants}
              initial="initial"
              animate={isInView ? "visible" : "initial"}
              className={cn(`inline-block`, splitTextClassName, {
                "text-textPurple font-playFairItalic": isColor,
              })}
            >
              {word}&nbsp;
            </motion.span>
          </span>
        );
      })}
    </p>
  );
};

export default TextStaggerAnimation;
