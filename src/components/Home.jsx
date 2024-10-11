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
// import { TimelineDemo } from "./elements/TimeLine";
// import {  TracingBeamDemo } from "./elements/TracingBeam";
// import { TracingBeamDemo } from "./elements/TracingBeam";//src\components\elements\TracingBeam.jsx

const Home = () => {
  const words = ["experience", "abroad journey", "Culture"]; // Add more words as needed
  return (

    <>
      <div className="flex justify-center align-middle m-10">
        <div className="mt-16 ml-16  ">
          {/* <img src={logo} className="h-20 mt-1 ml-auto mr-auto block"></img> */}
          <FlipWordsDemo />
          <TextGenerateEffectDemo />
          {/* <p className="font-light ">With the support of the Richly Experienced Team from the Industry, we are setting a new culture in international education, which helps students define their careers in a meaningful way</p> */}
          <div className=" flex my-5">
            <BorderButton name={"Start Your New Journy"} />
            <BorderButton name={"Get Your personalised Plan for FREE "} />
          </div>
          <div className="flex justify-start my-5 mt-20">
            <div>
              <p className="font-bold  px-2 text-center">1,00,000+</p>
              <p className=" px-2"> Success Stories</p>
            </div>
            <div className="border border-x-2 rounded-2xl border-purple-900"></div>
            <div>
              <p className="font-bold  px-2 text-center">10,000+</p>
              <p className="px-2"> Preferred Courses</p>
            </div>


          </div>
        </div>

        <div style={{
          backgroundImage: `url(${home})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '50%',
          height: '80vh', // Adjust as needed
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          {/* Add any text or content you want on the cover page */}

        </div>
      </div>
      <InfiniteMovingCardsDemo />
      <TimelineDemo />
      <GlobeDemo className="" />
      <CardHoverEffectDemo />
      <Footer />

    </>
  );
};

export default Home;
