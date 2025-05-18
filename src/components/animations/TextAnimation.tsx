"use client";
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(SplitText, ScrollTrigger);

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
function debounce(func: Function, wait: number) {
  let timeout: ReturnType<typeof setTimeout>;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function (...args: any[]) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

interface TextAnimationProps {
  children: React.ReactElement | React.ReactElement[];
  animateOnScroll?: boolean;
  delay?: number;
  className?: string;
}

export default function TextAnimation({
  children,
  animateOnScroll = true,
  delay = 0,
  className,
}: TextAnimationProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const elementRef = useRef<Element[]>([]);
  const splitRef = useRef<SplitText[]>([]);
  const lines = useRef<HTMLElement[]>([]);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const previousWidthRef = useRef(windowWidth);

  // Handle window resize
  useEffect(() => {
    const handleResize = debounce(() => {
      const currentWidth = window.innerWidth;

      // Only update if width has changed
      if (currentWidth !== previousWidthRef.current) {
        setWindowWidth(currentWidth);
        previousWidthRef.current = currentWidth;

        // Cleanup previous splits
        splitRef.current.forEach((split) => {
          if (split) {
            split.revert();
          }
        });

        // Clear arrays to prevent memory leaks
        splitRef.current = [];
        elementRef.current = [];
        lines.current = [];

        // Force GSAP to recalculate
        ScrollTrigger.refresh();
      }
    }, 250); // 250ms debounce

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      // Additional cleanup
      splitRef.current.forEach((split) => {
        if (split) {
          split.revert();
        }
      });
    };
  }, []);

  const memoizedChildren = React.useMemo(() => children, [children]);

  useGSAP(
    () => {
      if (!containerRef.current) return;
      splitRef.current = [];
      elementRef.current = [];
      lines.current = [];

      let elements = [];
      if (containerRef.current.hasAttribute("data-copy-wrapper")) {
        elements = Array.from(containerRef.current.children);
      } else {
        elements = [containerRef.current];
      }

      elements.forEach((element) => {
        elementRef.current.push(element);
        const split = SplitText.create(element, {
          type: "lines",
          mask: "lines",
          linesClass: "line++",
        });

        splitRef.current.push(split);

        const computedStyle = window.getComputedStyle(element);
        const textIndent = computedStyle.textIndent;

        if (textIndent && textIndent != "0px") {
          if (split.lines.length > 0) {
            (split.lines[0] as HTMLElement).style.paddingLeft = textIndent;
          }
          (element as HTMLElement).style.textIndent = "0";
        }

        lines.current.push(...split.lines.map((line) => line as HTMLElement));
      });
      gsap.set(lines.current, { y: "100%" });
      const animationProps = {
        y: "0%",
        duration: 1,
        stagger: 0.1,
        ease: "power4.out",
        delay: delay,
      };

      const scrollTriggers: (ScrollTrigger | undefined)[] = [];

      if (animateOnScroll) {
        const animation = gsap.to(lines.current, {
          ...animationProps,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            once: true,
          },
        });
        scrollTriggers.push(animation.scrollTrigger);
      } else {
        gsap.to(lines.current, animationProps);
      }

      return () => {
        // Kill ScrollTriggers
        scrollTriggers.forEach((trigger) => trigger?.kill());

        // Revert splits
        splitRef.current.forEach((split) => {
          if (split) {
            split.revert();
          }
        });
      };
    },
    {
      scope: containerRef,
      dependencies: [animateOnScroll, delay, windowWidth], // Changed from windowSize to windowWidth
    }
  );

  // Rest of the component remains unchanged
  if (React.Children.count(memoizedChildren) == 1) {
    return React.isValidElement(memoizedChildren)
      ? React.cloneElement(memoizedChildren, {
          ref: (node: HTMLDivElement | null) => {
            containerRef.current = node;
          },
        } as React.Attributes)
      : null;
  }

  return (
    <div ref={containerRef} data-copy-wrapper="true" className={cn(className)}>
      {memoizedChildren}
    </div>
  );
}
