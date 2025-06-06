import React, { useState } from "react";

import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

export const TestimonialTooltip = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const springConfig = { stiffness: 100, damping: 5 };

  const x = useMotionValue(0); // going to set this value on mouse move

  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );

  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );

  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  const people = [
    {
      id: 1,
      name: "",
      designation: "Sign Up Now!",
      image:
        "https://i.ibb.co/b2tVmJ9/Newlogo-optimized.png",
    }
  ];

  return (
    <div className="flex flex-row items-center justify-center  mb-10 w-full">
      {people.map((testimonial, idx) => (
        <div
          className="-mr-4  relative group"
          key={testimonial.name}
          onMouseEnter={() => setHoveredIndex(testimonial.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
           <AnimatePresence mode="wait">
              {hoveredIndex === testimonial.id && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.6 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 260,
                      damping: 10,
                    },
                  }}
                  exit={{ opacity: 0, y: 20, scale: 0.6 }}
                  style={{
                    translateX: translateX,
                    rotate: rotate,
                    whiteSpace: "nowrap",
                  }}
                  className="absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs  flex-col items-center justify-center rounded-md bg-white z-50 shadow-xl px-4 py-2"
                >
                  <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " />
                  <div className="absolute  w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
                  {/* <div className="font-bold text-white relative z-30 text-base">
                    {testimonial.name}
                  </div> */}
                  <div className="text-black">
                    {testimonial.designation}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          <img
            onMouseMove={handleMouseMove}
            height={100}
            width={100}
            src={testimonial.image}
            alt={testimonial.name}
            className="object-scale-down !m-0 !p-0 object-top rounded-full h-[63px] w-[63px] bg-white border-orange-300 border-4 group-hover:scale-110 group-hover:z-30  relative transition duration-500"
          />
        </div>
      ))}
    </div>
  );
};

