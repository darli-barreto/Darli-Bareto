"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { useMotionPreference } from "./preferences";

export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const { enabled } = useMotionPreference();
  return (
    <motion.div className={className} initial={false}
      whileInView={enabled ? { opacity: [0, 1], y: [28, 0] } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: enabled ? 0.8 : 0, delay: enabled ? delay : 0, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}
