
import React from "react";
import { Timeline } from "../../components/ui/timeline.tsx"
import Chips from "./Chips.jsx";
import { BorderButton } from "./GlowButton.jsx";
import Btn from "./Btn.jsx";

export function TimelineDemo() {
  const pcc = ["Comprehensive Assessment", "Career Path Mapping", "Goal Setting and Action Planning", "Career Transition Support", "Skill Assessment and Gap Analysis"];
  const tp = ["Mock Tests", "Question Banks", "Performance Analytics", "Adaptive Learning","Community Forum"];
  const va = ["Mock Interviews", "Application Guidance", "Visa Requirements", "Country-Specific Information", "Post-Visa Support"];
  const ela = ["Utility Bill Assistance", "Hostel/PG Listings", "Repayment Plans", "Safety and Security", "Accommodation Verification"];
  const sfs = ["Scholarship Database", "Remittance Services", "Customer Support", "Financial Aid Calculator", "Eligibility Checker"];
  const data = [
    {
      title: "Personalized Career Counselling",
      content: (
        <div>
          <h1 className="mb-4 font-bold">Expert Guidance, Personalized Solutions.</h1>
          <p
            className="text-netural   text-xs md:text-sm font-normal mb-1 ">We offer personalized guidance to students, helping them align their academic goals with their desired career path. By assisting them in finding suitable courses and institutions, we empower students to make informed decisions that set them up for future success.        </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://i.ibb.co/4tvbXT5/cc.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-3/4 " />
            <img
              src="https://i.ibb.co/r5t8462/cc2-removebg-preview.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-3/4" />
          </div>
          <Chips items={pcc} />
          {/* <div className="grid grid-cols-2 gap-4">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/cdn-img-e077c.appspot.com/o/view-3d-book-with-globe.jpg?alt=media&token=9c9891d5-7196-49dd-833d-103fb701d4a8"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-3/4 " />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/cdn-img-e077c.appspot.com/o/10473220-removebg-preview.png?alt=media&token=721467cd-a62f-4f7f-8a4b-56743a11cec1"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-3/4" />
          </div> */}
          
                     {/*<img
              src="https://assets.aceternity.com/templates/startup-3.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            <img
              src="https://assets.aceternity.com/templates/startup-4.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" /> */}
        </div>

      ),
    },
    {
      title: "Test Preparation",
      content: (
        <div>
        <h1 className="mb-4 font-bold">The Ultimate Test Prep Experience</h1>
        <p
          className="text-netural   text-xs md:text-sm font-normal mb-1 ">Are you feeling overwhelmed by the upcoming exams? Don't worry, we're here to help. Our expert tutors offer personalized guidance and effective strategies to help you ace your exams. With our comprehensive test preparation courses, you'll gain the confidence and skills needed to excel. Learn from experienced educators, practice with realistic exam simulations, and discover proven techniques to maximize your performance.</p>
        <div className="grid grid-cols-2 gap-4">
        <img
            src="https://i.ibb.co/GvvGsjT/exam-removebg-preview.png"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-3/4" />
          <img
            src="https://i.ibb.co/sbXFjjQ/OIP.jpg"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-3/4 " />
          
        </div>
        <Chips items={tp} />
      </div>
      ),
    },
    {
      title: "Visa Assistance",
      content: (
        <div>
        <h1 className="mb-4 font-bold">Navigate the Visa Process with Confidence</h1>
        <p
          className="text-netural   text-xs md:text-sm font-normal mb-1 ">
            Our team is dedicated to guiding you through the visa application process. We offer comprehensive support, including expert assistance with visa documentation and intensive interview preparation. Our goal is to ensure a seamless and stress-free experience, helping you navigate every step of the journey with confidence.
          </p>
        <div className="grid grid-cols-2 gap-4">
        <img
            src="https://i.ibb.co/vmkkktb/VISA-2.png"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-3/4" />
          <img
            src="https://i.ibb.co/60x76Qt/VISA.png"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-3/4 " />
          
        </div>
        <Chips items={va} />
      </div>
      ),
    },
    {
      title: "Education Loans & Accommodation",
      content: (
        <div>
        <h1 className="mb-4 font-bold">Tailored Loan Solutions, Reliable Accommodation</h1>
        <p
          className="text-netural   text-xs md:text-sm font-normal mb-1 ">
            We connect students with trusted lenders for the best education loans and accommodations. Our team provides personalized guidance to help students secure the necessary resources for their academic journey.
          </p>
        <div className="grid grid-cols-2 gap-4">
        <img
            src="https://i.ibb.co/kJrMVDR/LOAN.png"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-3/4" />
          <img
            src="https://i.ibb.co/Ky19xNz/hotel.png"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-3/4 " />
          
        </div>
        <Chips items={ela} />
      </div>
      ),
    },
    {
      title: "Scholarships & Forex Services",
      content: (
        <div>
        <h1 className="mb-4 font-bold">Scholarships & Forex: Your Gateway to Success.</h1>
        <p
          className="text-netural   text-xs md:text-sm font-normal mb-1 ">
           Explore scholarship options and access efficient foreign exchange services for easy financial planning.
          </p>
        <div className="grid grid-cols-2 gap-4">
        <img
            src="https://i.ibb.co/f2dFLQH/scholarship.jpg"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-3/4" />
          <img
            src="https://i.ibb.co/PY6WdSN/9319770-4136942.jpg"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-3/4 " />
          
        </div>
        <Chips items={sfs} />
      </div>
      ),
    },
    
  ];
  return (
    (<div className="w-full">
      <Timeline data={data} />
    </div>)
  );
}
