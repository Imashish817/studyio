
import { FloatingNavDemo } from "./components/elements/Floating.jsx";
import logo from "../src/components/data/img/logo.png"
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import WhatsApp from "./components/elements/whatsapp.jsx";
import ContactUs from "./components/ContactUs.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (<>
    <div className="min-h-screen text-black ">
      <div className="h-8 bg-purple-900 w-full rounded-t-xl mb-5">
        <h3 className="text-white text-center p-1">Some Great offers and seminar details....🎁</h3>
      </div>
      <div className="flex justify-center lg:grid lg:grid-cols-2 ">
        <div><img src={logo} className="h-16 mt-[30%] lg:mt-[1%] lg:ml-24"></img></div>
        <div className="self-end"> <FloatingNavDemo /></div>
      </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
    <WhatsApp/>
    <Footer/>
    </div>
  </>
  );
}

export default App;
