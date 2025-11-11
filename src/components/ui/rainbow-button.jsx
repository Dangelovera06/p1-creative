import React from "react";
import { cn } from "@/lib/utils";

export function RainbowButton({
  children,
  className,
  ...props
}) {
  return (
    <button
      className={cn(
        "group relative inline-flex h-11 cursor-pointer items-center justify-center rounded-xl border-0 px-8 py-2 font-bold text-white transition-all hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006eff] disabled:pointer-events-none disabled:opacity-50 overflow-hidden",

        // Glowing blue background with gradient
        "bg-gradient-to-b from-[#0080ff] via-[#006eff] to-[#0050cc]",
        
        // Blue glow effect
        "shadow-[0_0_20px_rgba(0,110,255,0.5),0_0_40px_rgba(0,110,255,0.3),0_0_60px_rgba(0,110,255,0.2)]",
        
        // Reflection effect on top
        "after:absolute after:inset-0 after:rounded-xl after:bg-gradient-to-b after:from-white/20 after:via-transparent after:to-transparent after:pointer-events-none",
        
        // Shimmer effect
        "before:absolute before:inset-0 before:translate-x-[-100%] before:animate-[shimmer_2.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent",

        className,
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
}

