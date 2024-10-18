import React from "react";

import { GlobeDemo } from "./elements/Globe";

import { InfiniteMovingCardsDemo } from "./elements/Infinitemovingcard";

import { TimelineDemo } from "./elements/TimeLine";
import { ExpandableCardDemo } from "./elements/Team";
import HeroSection from "./elements/HeroSection";
import { ModalFooter } from "./ui/animated-modal";
import { WobbleCardDemo } from "./elements/WobbleCardDemo";


const Home = () => {
  return (
    <>
      <HeroSection />
      <InfiniteMovingCardsDemo />
      <TimelineDemo />
      <WobbleCardDemo/>
      <ExpandableCardDemo />
      <GlobeDemo />
      <ModalFooter/>
    </>
  );
};

export default Home;
