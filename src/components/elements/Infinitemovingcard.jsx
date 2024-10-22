

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
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
    img:"https://firebasestorage.googleapis.com/v0/b/cdn-img-e077c.appspot.com/o/testimonials%2FRohit.webp?alt=media&token=e223db0d-a32b-43bb-b82e-dd54a3cde5e4"

  },
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
    img:"https://firebasestorage.googleapis.com/v0/b/cdn-img-e077c.appspot.com/o/testimonials%2FDolli.webp?alt=media&token=dfa598ad-5dfc-49fa-ac20-22941d41caba"

  },
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
    img:"https://firebasestorage.googleapis.com/v0/b/cdn-img-e077c.appspot.com/o/testimonials%2FNamita.webp?alt=media&token=a5820628-5e6c-49a0-9164-98d916ba9d06"

  },
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
    img:"https://firebasestorage.googleapis.com/v0/b/cdn-img-e077c.appspot.com/o/testimonials%2FPrateek.webp?alt=media&token=a4df8e3a-1637-470c-a577-74123878818d"

  },
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
    img:"https://firebasestorage.googleapis.com/v0/b/cdn-img-e077c.appspot.com/o/testimonials%2FSam.webp?alt=media&token=157cbc0b-e4b2-4fd6-897e-425245a448a7"

  },

 
];
