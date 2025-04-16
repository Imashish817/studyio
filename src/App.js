
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
import { IconHeartFilled } from "@tabler/icons-react";
import FloatingBTN from "./components/FloatingBTN.jsx";
import StudyInCountry from "./components/elements/Country.jsx";
import Undermaintanace from "./components/Undermaintanace.jsx";
import Kochi from "./components/Kochi.jsx";
function App() {
  const space=" &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;"
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
        <Route path="/Study-in/Canada" element={<StudyInCountry />} />
        <Route path="/Study-in/USA" element={<StudyInCountry />} />
        <Route path="/Study-in/Australia" element={<StudyInCountry />} />
        <Route path="/Study-in/UK" element={<StudyInCountry />} />
        <Route path="/Study-in/Germany" element={<StudyInCountry />} />
        <Route path="/Study-in/Europe" element={<StudyInCountry />} />
        <Route path="/center/kochi" element={<Kochi />} />
      </Routes>
      
      <WhatsApp />
      <Footer />
      <FloatingBTN/>
      <ToastContainer/>
      <div class="lg:px-[9%] py-1 ">
        <div class=" bg-gradient-to-r from-white via-orange-300 to-white lg:bg-gradient-to-r lg:from-orange-300 lg:via-white lg:to-orange-300 rounded-full lg:p-2">
          <div className="hidden lg:flex justify-around font-semibold text-sm text-center py-1 text-gray-800 ">
            <div>TEAMS AVAILABLE IN- </div>
            <div>HISAR </div>
            <div>|  </div>
            <div> KARNAL </div>
            <div>|  </div>
            <div> NOIDA  </div>
            <div>|  </div>
            <div> MORADABAD </div>
          </div>
        <div >
          <h1 className="text-sm text-center py-1 text-gray-800 lg:hidden ">TEAMS AVAILABLE IN- HISAR | KARNAL | NOIDA | MORADABAD</h1>
        </div>
        </div>
          
          </div>
         
            <h3 class="text-sm text-center py-1 font-extralight text-gray-800 ">© 2024 StudyCulture.io. All Rights Reserved.</h3>
          
    </div>
  </>
  );
}

export default App;
