
import { FloatingNavDemo } from "./components/elements/Floating.jsx";
import logo from "../src/components/data/img/logo.png"
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import WhatsApp from "./components/elements/whatsapp.jsx";
import ContactUs from "./components/ContactUs.jsx";
import Footer from "./components/Footer.jsx";
import Services from "./components/Services.jsx";
import Marquee from "react-fast-marquee";
import 'react-toastify/dist/ReactToastify.css';
import { Bounce, ToastContainer } from "react-toastify";
import FirstStepForm from "./components/elements/FirstStepForm.jsx";
import ScholarshipForm from "./components/elements/ScholarshipForm.jsx";
import About from "./components/About.jsx";
function App() {
  return (<>
    <div className="min-h-screen text-black ">
      <Marquee className="h-10 bg-purple-900 w-full rounded-t-xl mb-5 grid grid-cols-2">
        <div className="mx-52 flex grid-cols-1">
          <h3 className="text-white text-center text-nowrap my-2 mx-1 px-1 ">Get Your Scholarship Plan!!!</h3>
          <Link to='/Scholarship'><button className="text-sm rounded-xl  text-nowrap border border-white text-white bg-orange-500 my-2 mx-1 px-1">Book Now</button></Link>
        </div>
        <div className="mx-52 flex grid-cols-1">
          <h3 className="text-white text-center text-nowrap my-2 mx-1 px-1 ">Book your Doorstep Counselling Now!!!</h3>
          <Link to='/FirstStep' className="cursor-pointer"><button className="text-sm rounded-xl  text-nowrap border  border-white text-white bg-orange-500 my-2 mx-1 px-1">Book Now</button></Link>
        </div>
      </Marquee>
      <div className="flex justify-center lg:grid lg:grid-cols-2 ">
        <Link to='/'><img src={logo} className="h-16 mt-[23%] lg:mt-[0%] lg:ml-[10%]"></img></Link>
        <div className="self-end"> <FloatingNavDemo /></div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/FirstStep" element={<FirstStepForm />} />
        <Route path="/Scholarship" element={<ScholarshipForm />} />
      </Routes>
      <WhatsApp />
      <Footer />
      <ToastContainer/>
      
    </div>
  </>
  );
}

export default App;
