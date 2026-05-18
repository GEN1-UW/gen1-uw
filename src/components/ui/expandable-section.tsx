import { useState, ReactNode } from "react";

interface ExpandableSectionProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

export function ExpandableSection({
  title,
  children,
  defaultOpen = false,
}: ExpandableSectionProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="w-full">
      {/* Toggle Button */}
      <div className="group flex justify-center mt-10">
        <button
          onClick={() => setOpen(!open)}
          className="group flex items-center gap-3 px-5 py-2 rounded-full 
                    bg-purple-50 text-purple-700 
                    hover:bg-purple-100 hover:text-purple-800 
                    transition-all duration-200 
                    font-medium shadow-sm hover:shadow-md 
                    active:scale-[0.98]"
          aria-expanded={open}
        >
          {/* Left icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            fill="currentColor"
            viewBox="0 0 16 16"
            className={`animate-bounce [animation-duration:1.8s] leading-none opacity-70 group-hover:opacity-100 transition ${
              open ? "rotate-180" : ""
            }`}
          >
            <path
              fillRule="evenodd"
              d={
                open
                  ? "M1.646 11.354a.5.5 0 0 0 .708 0L8 5.707l5.646 5.647a.5.5 0 0 0 .708-.708l-6-6a.5.5 0 0 0-.708 0l-6 6a.5.5 0 0 0 0 .708"
                  : "M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
              }
            />
          </svg>

          <span className="text-sm">{title}</span>

          {/* Right icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            fill="currentColor"
            viewBox="0 0 16 16"
            className={`animate-bounce [animation-duration:1.8s] [animation-delay:150ms] leading-none opacity-70 group-hover:opacity-100 transition ${
              open ? "rotate-180" : ""
            }`}
          >
            <path
              fillRule="evenodd"
              d={
                open
                  ? "M1.646 11.354a.5.5 0 0 0 .708 0L8 5.707l5.646 5.647a.5.5 0 0 0 .708-.708l-6-6a.5.5 0 0 0-.708 0l-6 6a.5.5 0 0 0 0 .708"
                  : "M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
              }
            />
          </svg>
        </button>
      </div>

      {/* Expandable content */}
      <div
        className={`transition-all duration-500 ${
          open ? "opacity-100 mt-8" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        {children}
      </div>
    </div>
  );
}