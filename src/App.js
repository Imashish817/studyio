// import "./App.css";
// import { FlipWordsDemo } from "./components/elements/Flipwords.jsx";
// import { EvervaultCardDemo } from "./components/elements/Evervault.jsx";
// import { GlobeDemo } from "./components/elements/Globe.jsx";
// import { BentoGridDemo } from "./components/elements/Bentogrid.jsx";
// import { SparklesPreview } from "./components/elements/Sparkles.jsx";
import { FloatingNavDemo } from "./components/elements/Floating.jsx";
import logo from "../src/components/data/img/logo.png"
// import { ThreeDCardDemo } from "./components/elements/Threedcard.jsx";
// import { LampDemo } from "./components/elements/Lamp";
// import { AnimatedModalDemo } from "./components/elements/Animatedmodal.jsx";
// import { CardHoverEffectDemo } from "./components/elements/Cardhover.jsx";
// import { AnimatedTooltipPreview } from "./components/elements/Animatedtoolpit";
// import { CardStackDemo } from "./components/elements/Cardstack";
// import { HeroScrollDemo } from "./components/elements/Containerscrollanimation";
// import { InfiniteMovingCardsDemo } from "./components/elements/Infinitemovingcard";
// import { TypewriterEffectSmoothDemo } from "./components/elements/Typewriter";
// import { StickyScrollRevealDemo } from "./components/elements/Stickyscroll";
// import { AnimatedPinDemo } from "./components/elements/ThreeDpin";
// import { SignupFormDemo } from "./components/elements/SignForm";
// import { TextGenerateEffectDemo } from "./components/elements/Textgenerate";
// import { BorderButton } from "./components/elements/GlowButton";
// function App() {
//   return (
//     <div className="bg-black relative min-h-screen">
//       {" "}
//       <div className="absolute inset-0 z-0 ">
//         {" "}
//         <GlobeDemo />
//       </div>
//       <div className="z-00 relative">
//         {" "}
//         <div className="grid grid-cols-1 sm:grid-cols-1 gap-10 p-20">
//           <SparklesPreview />

//           <FloatingNavDemo />
//           <FlipWordsDemo />
//         </div>
//         {/* <SparklesPreview /> */}
//         <TypewriterEffectSmoothDemo />
//         <AnimatedModalDemo />
//         <CardHoverEffectDemo />
//         <HeroScrollDemo />
//         <InfiniteMovingCardsDemo />
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 p-20">
//           <AnimatedTooltipPreview />
//           <CardStackDemo />
//           <BorderButton />
//         </div>
//         <div className="p-20">
//           <p className="text-center font-bold text-lg text-white mb-8">
//             My Projects
//           </p>
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
//             <ThreeDCardDemo />
//             <ThreeDCardDemo />
//             <ThreeDCardDemo />
//           </div>
//         </div>
//       </div>
// {/* <TracingBeamDemo /> */}
//       <AnimatedPinDemo />
//       <BentoGridDemo />
//       <EvervaultCardDemo />
//       <StickyScrollRevealDemo />
//       <SignupFormDemo />
//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Components from "./components/Components";
import GitHubRepo from "./components/code";

import "./App.css";
import WhatsApp from "./components/elements/whatsapp.jsx";
import ContactUs from "./components/ContactUs.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (<>
    <div className=" min-h-screen text-black ">
      <div className="h-8 bg-purple-900 w-full rounded-t-xl mb-5">
        <h3 className="text-white text-center p-1">Some Great offers of seminar details....🎁</h3>
      </div>
      <div className="grid grid-cols-2 lg:grid lg:grid-cols-2">
        <div><img src={logo} className="h-16 mt-7 ml-24  self-start"></img></div>
        <div className="self-end"> <FloatingNavDemo /></div>
      </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/code" element={<GitHubRepo />} />
    </Routes>
    <WhatsApp/>
    <Footer/>
    </div>
  </>
  );
}

export default App;
