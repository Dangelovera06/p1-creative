import React from "react";
import { motion } from "framer-motion";

export const TestimonialsColumn = ({
  className,
  testimonials,
  duration = 10,
}) => {
  return (
    <div className={className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {testimonials.map(({ text, image, name, role }, i) => (
                <div 
                  className="p-8 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-sm shadow-lg shadow-purple-500/5 max-w-xs w-full hover:border-purple-500/30 transition-all duration-300" 
                  key={i}
                >
                  <div className="text-white/70 text-sm leading-relaxed mb-5">
                    "{text}"
                  </div>
                  <div className="flex items-center gap-3">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full object-cover ring-2 ring-purple-500/20"
                    />
                    <div className="flex flex-col">
                      <div className="font-semibold tracking-tight leading-5 text-white">
                        {name}
                      </div>
                      <div className="text-sm leading-5 text-white/50 tracking-tight">
                        {role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

