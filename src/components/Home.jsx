import React, { useEffect } from "react";

import { GlobeDemo } from "./elements/Globe";

import { InfiniteMovingCardsDemo } from "./elements/Infinitemovingcard";

import { TimelineDemo } from "./elements/TimeLine";
import { ExpandableCardDemo } from "./elements/Team";
import HeroSection from "./elements/HeroSection";
import { ModalFooter } from "./ui/animated-modal";
import { WobbleCardDemo } from "./elements/WobbleCardDemo";
import { scrollToTop } from "../utils/ScrollToTop";


const Home = () => {
  useEffect(() => {
    scrollToTop()
  }, [])
  
  return (
    <>
      <HeroSection />
      <WobbleCardDemo/>
      <InfiniteMovingCardsDemo />
      <div className="text-center flex justify-center md:-mb-32">
      
        <p className="text-3xl text-purple-900 md:text-4xl mb-4  max-w-4xl font-semibold">
        How Can We <span className="text-orange-500 text-3xl drop-shadow-xl md:text-4xl mb-4  max-w-4xl font-semibold"> Support You?</span>
        </p>
       
      </div> 
      <TimelineDemo />
      
      {/* <ExpandableCardDemo /> */}
      <GlobeDemo />
      <ModalFooter/>
    </>
  );
};

export default Home;
