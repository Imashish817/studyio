

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    (
    <div
      className="h-[40rem] rounded-md flex flex-col antialiased bg-white  items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto  px-4 md:px-8 lg:px-10 ">
      
        <p className="text-3xl text-purple-900 md:text-4xl mb-4  max-w-4xl font-semibold text-center">
        Hear From <span className="text-3xl text-orange-500 drop-shadow-xl md:text-4xl mb-4  max-w-4xl font-semibold">Our Students</span>
        </p>
       
      </div>      
      <InfiniteMovingCards items={testimonials} direction="right" speed="normal" />
    </div>)
  );
}

const testimonials = [
  {
    video:"https://www.youtube.com/shorts/86_Yy3f29ws",
    img:"https://i.ibb.co/jTQL7qq/Rohit.webp"

  },
  {
    video:"https://youtu.be/TmSLQghByMc?si=syW3DEU1nI_aOpYu",
    img:"https://i.ibb.co/tZvK6vc/Dolli.webp"

  },
  {
    video:"https://www.youtube.com/shorts/8KukOCJ3rRI",
    img:"https://i.ibb.co/cYCmwpz/Namita.webp"

  },
  {
    video:"https://www.youtube.com/@studycultureio",
    img:"https://i.ibb.co/2v7cWz8/Prateek.webp"

  },
  {
    video:"https://www.youtube.com/@studycultureio",
    img:"https://i.ibb.co/qn9VrwV/Sam.webp"

  },
  {
    video:"https://www.youtube.com/shorts/gtxt9RU84hU",
    img:"https://i.ibb.co/cYCmwpz/Namita.webp"

  },
  {
    video:"https://www.youtube.com/shorts/3JdpLwr5AUw",
    img:"https://i.ibb.co/fkv0b13/Sukhpreet.png"

  },

 
];
