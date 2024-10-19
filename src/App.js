
import { FloatingNavDemo } from "./components/elements/Floating.jsx";
import logo from "../src/components/data/img/logo.png"
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import WhatsApp from "./components/elements/whatsapp.jsx";
import ContactUs from "./components/ContactUs.jsx";
import Footer from "./components/Footer.jsx";
import Services from "./components/Services.jsx";
import Marquee from "react-fast-marquee";
function App() {
  return (<>
    <div className="min-h-screen text-black ">
      <Marquee className="h-10 bg-purple-900 w-full rounded-t-xl mb-5 flex justify-evenly align-middle">
        <div className="mx-28 flex ">
          <h3 className="text-white text-center text-nowrap my-2 mx-1 px-1 ">Book your <span className="font-bold">FREE</span> consultation Now!!!</h3>
          <button className="text-sm rounded-xl  text-nowrap border  border-white text-white bg-orange-500 my-2 mx-1 px-1">Book Now</button>
        </div>
        <div  className="mx-28 flex ">
        <h3 className="text-white text-center text-nowrap my-2 mx-1 px-1 ">Book your doorStep consultation Now!!!</h3>
        <button className="text-sm rounded-xl  text-nowrap border  border-white text-white bg-orange-500 my-2 mx-1 px-1">Book Now</button>
        </div>

      </Marquee>
      <div className="flex justify-center lg:grid lg:grid-cols-2 ">
        <div><img src={logo} className="h-16 mt-[23%] lg:mt-[0%] lg:ml-[10%]"></img></div>
        <div className="self-end"> <FloatingNavDemo /></div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/Services" element={<Services />} />
      </Routes>
      <WhatsApp />
      <Footer />
    </div>
  </>
  );
}

export default App;
