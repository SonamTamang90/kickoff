"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedHeadingProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const AnimatedHeading = ({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  as = "h2",
}: AnimatedHeadingProps) => {
  const MotionComponent = motion[as];

  return (
    <MotionComponent
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
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

export default AnimatedHeading;