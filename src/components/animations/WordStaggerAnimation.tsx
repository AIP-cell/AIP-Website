"use client";
import cn from "@/utils/tailwind";
import { motion, Variants } from "motion/react";

type Props = {
  text: string;
  className?: string;
  splitTextClassName?: string;
  delay?: number;
  duration?: number;
  staggerChildren?: number;
};
const WordStaggerAnimation = ({
  text,
  className,
  splitTextClassName,
  delay,
  duration,
  staggerChildren,
}: Props) => {
  const words = text
    .replaceAll("<br>", " <br> ")
    .replaceAll("<br/>", " <br> ")
    .replaceAll("<color>", " <color> ")
    .replaceAll("</color>", " </color> ")
    .split(" ")
    .filter(Boolean);
  let isColor = false;

  const italicWordStagger: Variants = {
    hidden: {
      y: 50,
    },
    visible: {
      y: 0,
      transition: {
        delay: delay,
        duration: (duration ?? 1) * 1.1,
        ease: [0.19, 1, 0.22, 1],
      },
    },
  };
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerChildren ?? 0.25,
        delayChildren: delay,
      },
    },
  };
  return (
    <motion.h6
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0% 0% -50px 0%" }}
      className={cn(className)}
      style={{ willChange: "transform, opacity" }}
    >
      {words.map((word: string, index: number) => {
        if (word == "<br>") {
          return <span className="block" key={index}></span>;
        }
        if (word == "<color>") {
          isColor = true;
          return "";
        }
        if (word == "</color>") {
          isColor = false;
          return "";
        }
        return (
          <span className="inline-block masked-text-word" key={index}>
            <motion.span
              className={cn("inline-block", splitTextClassName, {
                "text-textPurple font-playFairItalic": isColor,
              })}
              key={index}
              variants={italicWordStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{ willChange: "transform" }}
            >
              {word.split("").map((letter, letterIndex) => (
                <motion.span
                  key={letterIndex}
                  initial={{ opacity: 0, y: 3 }}
                  transition={{
                    opacity: {
                      delay:
                        (delay ?? 0) * 0.05 + index * 0.05 + letterIndex * 0.04,
                      duration: 0.35,
                      ease: "easeIn",
                    },
                    y: {
                      delay:
                        (delay ?? 0) * 0.05 + index * 0.05 + letterIndex * 0.04,
                      duration: 0.8,
                      ease: [0.215, 0.61, 0.355, 1],
                    },
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="leading-[1.1] inline-block"
                  style={{ willChange: "transform, opacity" }}
                >
                  {letter}
                </motion.span>
              ))}
              &nbsp;
            </motion.span>
          </span>
        );
      })}
    </motion.h6>
  );
};

export default WordStaggerAnimation;
