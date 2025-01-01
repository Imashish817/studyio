
import React from "react";
import { FloatingNav } from "../ui/floating-navbar";
import { IconHome, IconMessage, IconPlaneInflight, IconTools, IconUser } from "@tabler/icons-react";

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
    {
      name: "Destinations",
      link: "",
      icon: (
        <IconPlaneInflight className="h-5 w-5 text-neutral-500 " />
      ),
      subItems: [
        { name: "Canada", link: "/Study-in/Canada", img:"https://i.ibb.co/Mh9WDfq/flag-11785192.png" },
        { name: "USA", link: "/study-in/USA",  img:"https://i.ibb.co/1sGHkRc/flag-12361101-1.png" },
        { name: "Australia", link: "/study-in/Australia",  img:"https://i.ibb.co/vXh867K/australia-11700988-3.png" },
        { name: "United Kingdom", link: "/study-in/UK",  img:"https://i.ibb.co/G3D8crX/united-kingdom-555417.png" },
        { name: "Germany", link: "/study-in/Germany",  img:"https://i.ibb.co/JjtYbrT/world-16396730.png" },
        { name: "Europe", link: "/study-in/Europe",  img:"https://i.ibb.co/mFpXbfn/flag-11785075-1.png" },
      ],
    },
    
  ];

  return (
    <div className="relative w-full mt-2">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
