
import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from '../../utils/cn.js';
import { Link } from "react-router-dom";
import DropDown from "../elements/DropDown.jsx";

export const FloatingNav = ({ navItems, className }) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border my-2 border-transparent mt-2 rounded-full bg-white shadow-[0px_4px_6px_-2px_rgba(0,0,0,0.1),0px_2px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_2px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <div key={`link=${idx}`} className="relative group">
            <Link to={navItem.link} className={cn("relative items-stretch flex text-neutral-600 hover:text-neutral-500 -ml-4 mr-4")}>
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block text-sm">{navItem.name}</span>
            </Link>

            {/* Dropdown logic */}
            {navItem.subItems && (
              <div className="absolute lg:top-full my-[1px] lg:-left-1/3 md:top-full md:-left-1/3 top-8 right-0 hidden group-hover:block bg-white shadow-lg rounded-lg border min-w-max ">
                {navItem.subItems.map((subItem, subIdx) => (
                  <Link key={`sub-link=${subIdx}`} to={subItem.link}
                    className=" px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100 flex hover:rounded-lg">
                    <img src={subItem.img} className="h-7 w-10"/><h3 className="text-nowrap my-auto px-5">{subItem.name}</h3>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* <button className="border text-sm font-medium relative border-neutral-200  text-black  px-4 py-2 rounded-full">
          <span>Services</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
        </button> */}
      </motion.div>
    </AnimatePresence>
  );
};
