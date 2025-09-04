"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  as?: "p" | "span" | "div";
}

const AnimatedText = ({
  children,
  className = "",
  delay = 0.1,
  duration = 0.6,
  as = "p",
}: AnimatedTextProps) => {
  const MotionComponent = motion[as];

  return (
    <MotionComponent
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </MotionComponent>
  );
};

export default AnimatedText;