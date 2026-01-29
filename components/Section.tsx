"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  gap?: string;
  id?: string;
}

export function Section({ children, className = "", title, gap = "gap-8", id }: SectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id={id} className={`w-full flex flex-col items-center ${gap} ${className}`}>
      <motion.div 
        ref={ref}
        className={`w-full max-w-[720px] px-2 py-8 flex flex-col ${gap}`}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {title && (
          <motion.h3 
            className="font-mono text-[14px] font-medium tracking-[-0.02em] uppercase leading-[1.6em] text-foreground"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{
              duration: 0.5,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {title}
          </motion.h3>
        )}
        {children}
      </motion.div>
    </section>
  );
}
