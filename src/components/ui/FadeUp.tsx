"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function FadeUp({
  children,
  delay = 0,
  duration = 0.8,
  y = 40,
  once = true,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  once?: boolean;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.18 }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}


