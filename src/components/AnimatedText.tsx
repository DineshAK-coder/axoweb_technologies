import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText = ({ text, className = "" }: AnimatedTextProps) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const words = text.split("");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  return (
    <p ref={containerRef} className={`relative ${className}`}>
      {words.map((char, index) => {
        const start = index / words.length;
        const end = (index + 1) / words.length;
        return (
          <span key={index} className="relative inline-block">
            <span className="opacity-20">{char === " " ? "\u00A0" : char}</span>
            <motion.span
              style={{ opacity: useTransform(scrollYProgress, [start, end], [0, 1]) }}
              className="absolute left-0 top-0 text-[#D7E2EA]"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          </span>
        );
      })}
    </p>
  );
};
