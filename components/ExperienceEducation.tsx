import React from "react";
import Image, { StaticImageData } from "next/image";

interface Position {
  title: string;
  company: string;
  date: string;
  description: React.ReactNode;
}

interface ExperienceEducationProps {
  logo?: string | StaticImageData;
  positions: Position[];
}

export function ExperienceEducation({ logo, positions }: ExperienceEducationProps) {
  return (
    <div className="flex gap-3">
      {/* Logo Column */}
      <div className="flex flex-col items-center w-12 shrink-0">
        {logo ? (
          <div className="relative w-12 h-12 rounded-none overflow-hidden bg-white mb-2 p-1">
             <Image src={logo} alt="Company Logo" fill className="object-contain" />
          </div>
        ) : (
           <div className="w-12 h-12 bg-gray-200 rounded-none mb-2" />
        )}
        {/* Line - Dashed Border */}
        <div className="w-[1px] border-l border-dashed border-border-dashed flex-grow h-full min-h-[20px]" />
      </div>

      {/* Content Column */}
      <div className="flex flex-col gap-8 pb-8 w-full">
        {positions.map((pos, index) => (
          <div key={index} className="flex flex-col gap-2">
            <div className="flex flex-col">
              <h4 className="text-[16px] font-medium tracking-[-0.02em] leading-[24px] text-foreground">
                {pos.title}
              </h4>
              <div className="flex items-center gap-1.5 text-[12px] font-mono font-normal tracking-[-0.02em] uppercase leading-[24px] text-secondary mt-1">
                <span>{pos.company}</span>
                <span>·</span>
                <span>{pos.date}</span>
              </div>
            </div>
            <div className="text-[16px] font-normal tracking-[-0.01em] leading-[24px] text-secondary space-y-4">
              {pos.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
