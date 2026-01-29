import React from "react";
import Image, { StaticImageData } from "next/image";

interface CertificationProps {
  logo?: string | StaticImageData;
  title: string;
  provider: string;
  date: string;
  description: React.ReactNode;
  href?: string;
}

export function Certification({
  logo,
  title,
  provider,
  date,
  description,
  href,
}: CertificationProps) {
  const content = (
    <div className="flex gap-4 w-full">
      {/* Logo */}
      <div className="flex flex-col items-center w-10 shrink-0 pt-1">
         {logo ? (
          <div className="relative w-10 h-10 overflow-hidden bg-white p-1">
             <Image src={logo} alt="Provider Logo" fill className="object-contain" />
          </div>
        ) : (
           <div className="w-10 h-10 bg-gray-200 rounded-none" />
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 w-full">
        <div className="flex flex-col">
          <div className="flex items-center gap-2 group">
             <h4 className="text-[16px] font-medium tracking-[-0.02em] leading-[24px] text-foreground group-hover:underline decoration-1 underline-offset-4">
                {title}
             </h4>
             {href && (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-secondary group-hover:text-foreground transition-colors"
                >
                  <path
                    d="M6 18 18 6m0 0h-8m8 0v8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
             )}
          </div>
          <div className="flex items-center gap-1.5 text-[12px] font-mono font-normal tracking-[-0.02em] uppercase leading-[24px] text-secondary mt-1">
            <span>{provider}</span>
            <span>·</span>
            <span>{date}</span>
          </div>
        </div>
        <div className="text-[16px] font-normal tracking-[-0.01em] leading-[24px] text-secondary space-y-4">
          {description}
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block w-full">
        {content}
      </a>
    );
  }

  return content;
}
