"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ProjectProps {
  title: string;
  description: string;
  href: string;
  index?: number;
}

export function Project({ title, description, href, index = 0 }: ProjectProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex gap-3 group"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ x: 4, transition: { duration: 0.3 } }}
    >
      {/* Content */}
      <div className="flex flex-col gap-2 w-full">
        {/* Title with Arrow */}
        <div className="flex items-center gap-2">
          <h4 className="text-[16px] font-medium tracking-[-0.02em] leading-[24px] text-foreground group-hover:underline decoration-1 underline-offset-4">
            {title}
          </h4>
          <motion.svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-secondary group-hover:text-foreground transition-colors"
            style={{ transform: "rotate(45deg)" }}
            whileHover={{ 
              scale: 1.2,
              rotate: 90,
              transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
            }}
          >
            <path
              d="M6 18 18 6m0 0h-8m8 0v8"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </div>
        
        {/* Description */}
        <motion.div 
          className="text-[16px] font-normal tracking-[-0.01em] leading-[24px] text-secondary"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{
            duration: 0.6,
            delay: index * 0.15 + 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {description}
        </motion.div>
      </div>
    </motion.a>
  );
}
