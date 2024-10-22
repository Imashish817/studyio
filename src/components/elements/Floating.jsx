
import React from "react";
import { FloatingNav } from "../ui/floating-navbar";
import { IconHome, IconMessage, IconTools, IconUser } from "@tabler/icons-react";

export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-5 w-5 text-neutral-500 " />,
    },
    
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-5 w-5 text-neutral-500 " />,
    },
    {
      name: "Services",
      link: "/Services",
      icon: (
        <IconTools className="h-5 w-5 text-neutral-500 " />
      ),
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage className="h-5 w-5 text-neutral-500 " />
      ),
    },
    
  ];

  return (
    <div className="relative w-full mt-2">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
