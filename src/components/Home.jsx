import React from "react";
import { FlipWordsDemo } from "./elements/Flipwords";
import { HeroScrollDemo } from "./elements/Containerscrollanimation";
import RotatingWords from "./RotatingWords";
import { TextGenerateEffectDemo } from "./elements/Textgenerate";
import { AnimatedPinDemo } from "./elements/ThreeDpin";
import { GlobeDemo } from "./elements/Globe";
import home from "../components/data/img/home.jpg"
import { BorderButton } from "./elements/GlowButton";
// import { MovingBorderDemo } from "./elements/GlowButton";
import logo from "../components/data/img/logo.png"
import { CardHoverEffectDemo } from "./elements/Cardhover";
import { InfiniteMovingCardsDemo } from "./elements/Infinitemovingcard";
import Footer from "./Footer";
import certificate from "../components/data/img/certificate.png"
import { TimelineDemo } from "./elements/TimeLine";
import { ExpandableCardDemo } from "./elements/Team";
import HeroSection from "./elements/HeroSection";
import { ModalFooter } from "./ui/animated-modal";
import { StatsScroll } from "./elements/StatsScroll";
// import { TimelineDemo } from "./elements/TimeLine";
// import {  TracingBeamDemo } from "./elements/TracingBeam";
// import { TracingBeamDemo } from "./elements/TracingBeam";//src\components\elements\TracingBeam.jsx

const Home = () => {
  return (
    <>
      <HeroSection />
      <InfiniteMovingCardsDemo />
      <TimelineDemo />
      <StatsScroll/>
      <ExpandableCardDemo />
      <GlobeDemo />
      <ModalFooter/>
    </>
  );
};

export default Home;
