"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface DividerProps {
  className?: string;
}

export function Divider({ className = "" }: DividerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div 
      ref={ref}
      className={`w-full border-t border-dashed border-border-dashed ${className}`}
      initial={{ scaleX: 0, opacity: 0 }}
      animate={isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{ transformOrigin: "left" }}
    />
  );
}
