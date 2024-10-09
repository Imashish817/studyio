import React from "react";
import { FlipWordsDemo } from "./elements/Flipwords";
import { HeroScrollDemo } from "./elements/Containerscrollanimation";
import RotatingWords from "./RotatingWords";
import { TextGenerateEffectDemo } from "./elements/Textgenerate";
import { AnimatedPinDemo } from "./elements/ThreeDpin";

const Home = () => {
  const words = ["experience", "abroad journey", "Culture"]; // Add more words as needed
  return (
    // <div className="text-center">
    //   <h1 className="text-4xl font-bold text-white mt-14">
    //   Redefining the Study {" "}
    //     <RotatingWords words={words} interval={3000} />
    //   </h1>
    //   <div className=" mt-14">
    //     <TextGenerateEffectDemo />
    //   </div>
    //   <div className="flex justify-center items-center">
    //     <div className=" justify-center items-center ml-20 mt-0">
    //       <FlipWordsDemo />
    //       {/* <AnimatedPinDemo /> */}
    //     </div>
    //     <div className="justify-center items-center ml-20 mt-0">
    //       <AnimatedPinDemo />
    //     </div>
    //   </div>
    //   <HeroScrollDemo />
    // </div>

    <div className="p-2">
       <FlipWordsDemo />
       <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
        helo</button>
    </div>
  );
};

export default Home;
