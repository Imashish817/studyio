
import React from "react";
import { Timeline } from "../../components/ui/timeline.tsx"
import Chips from "./Chips.jsx";
import { BorderButton } from "./GlowButton.jsx";
import Btn from "./Btn.jsx";

export function TimelineDemo() {
  const crack = ["Mock Exams", "Diagnostic Assessment", "Experienced Instructors", "Proven Results", "Regular Progress Tracking"];
  const college = ["Comparison Features", "Comprehensive College Database", "Expert Guidance", "AI-Powered Recommendations"];
  const Finance = ["Personalized Financial Planning", "⁠Scholarships Up to 1.5 Cr", " 50% Scholarship for Women", "Financial Literacy", "Complete Refund Guarantee"];
  const data = [
    {
      title: "Crack IELTS",
      content: (
        <div>
          <h1 className="mb-4 font-bold">Ace Your IELTS, PTE, and More with a Customized Preparation Plan</h1>
          <p
            className="text-netural   text-xs md:text-sm font-normal mb-1 ">
            Are you aiming to conquer the IELTS or PTE exams and secure admission to your dream university? Look no further! Our customized preparation plans are designed to cater to your unique needs and help you achieve your language goals
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/cdn-img-e077c.appspot.com/o/cartoon-graduate-celebrates-their-achievement-by-riding-scroll_875825-200589-removebg-preview.png?alt=media&token=d872403e-da9d-4ba4-8dc7-66f372a7f7f3"
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
          </div>
          <Chips items={crack} />
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
      title: "Shortlist Colleges",
      content: (
        <div>
        <h1 className="mb-4 font-bold">Find Your Perfect Fit: College Shortlisting Made Easy</h1>
        <p
          className="text-netural   text-xs md:text-sm font-normal mb-1 ">
Discover your dream college with our intuitive shortlisting tool. Explore top institutions worldwide, compare programs, and uncover the perfect match for your academic and career goals. Our expert guidance ensures you make informed decisions and embark on a fulfilling educational journey.        </p>
        <div className="grid grid-cols-2 gap-4">
        <img
            src="https://firebasestorage.googleapis.com/v0/b/cdn-img-e077c.appspot.com/o/search1.png?alt=media&token=7e5f923b-9095-4333-a6d1-ac0ddfc60024"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-3/4" />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cdn-img-e077c.appspot.com/o/3d-search-job-vacancy-illustration-employee-search-icon-candidate-vacancy-job-research-resume-trendy-modern-vector-3d-style_1036687-60082-removebg-preview.png?alt=media&token=4e33cd87-1d02-4fe3-b2d7-e79fc542d0c8"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-3/4 " />
          
        </div>
        <Chips items={college} />
      </div>
      ),
    },
    {
      title: "Financial Planning",
      content: (
        <div>
        <h1 className="mb-4 font-bold">Financial Planning for Your Overseas Adventure</h1>
        <p
          className="text-netural   text-xs md:text-sm font-normal mb-1 ">
            Secure your overseas education with a solid financial plan. Explore funding options, including scholarships, grants, loans, and part-time work. Create a budget to manage expenses effectively and avoid financial stress. Let us help you navigate the financial landscape and make your dream of studying abroad a reality.
          </p>
        <div className="grid grid-cols-2 gap-4">
        <img
            src="https://firebasestorage.googleapis.com/v0/b/cdn-img-e077c.appspot.com/o/fp2.png?alt=media&token=29436ab9-7509-4d00-88b9-5439af789147"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-3/4" />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cdn-img-e077c.appspot.com/o/fp1.png?alt=media&token=29436ab9-7509-4d00-88b9-5439af789147"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-3/4 " />
          
        </div>
        <Chips items={Finance} />
      </div>
      ),
    },
    {
      title: "SOP Review",
      content: (
        <div>
          <p
            className="text-netural  text-xs md:text-sm font-normal mb-4">
            Deployed 5 new components on Aceternity today
          </p>
          <div className="mb-8">
            <div
              className="flex gap-2 items-center text-neutral-700  text-xs md:text-sm">
              ✅ Card grid component
            </div>
            <div
              className="flex gap-2 items-center text-neutral-700  text-xs md:text-sm">
              ✅ Startup template Aceternity
            </div>
            <div
              className="flex gap-2 items-center text-neutral-700  text-xs md:text-sm">
              ✅ Random file upload lol
            </div>
            <div
              className="flex gap-2 items-center text-neutral-700  text-xs md:text-sm">
              ✅ Himesh Reshammiya Music CD
            </div>
            <div
              className="flex gap-2 items-center text-neutral-700  text-xs md:text-sm">
              ✅ Salman Bhai Fan Club registrations open
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {/* <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" /> */}
            <img
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
          </div>
        </div>
      ),
    },
    {
      title: "VISA Help",
      content: (
        <div>
          <p
            className="text-netural  text-xs md:text-sm font-normal mb-4">
            Deployed 5 new components on Aceternity today
          </p>
          <div className="mb-8">
            <div
              className="flex gap-2 items-center text-neutral-700  text-xs md:text-sm">
              ✅ Card grid component
            </div>
            <div
              className="flex gap-2 items-center text-neutral-700  text-xs md:text-sm">
              ✅ Startup template Aceternity
            </div>
            <div
              className="flex gap-2 items-center text-neutral-700  text-xs md:text-sm">
              ✅ Random file upload lol
            </div>
            <div
              className="flex gap-2 items-center text-neutral-700  text-xs md:text-sm">
              ✅ Himesh Reshammiya Music CD
            </div>
            <div
              className="flex gap-2 items-center text-neutral-700  text-xs md:text-sm">
              ✅ Salman Bhai Fan Club registrations open
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            {/* <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            <img
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" /> */}
          </div>
        </div>
      ),
    },
    {
      title: "Get a Coach",
      content: (
        <div>
          <p
            className="text-netural  text-xs md:text-sm font-normal mb-4">
            Deployed 5 new components on Aceternity today
          </p>
          <div className="mb-8">
            <div
              className="flex gap-2 items-center text-neutral-700  text-xs md:text-sm">
              ✅ Card grid component
            </div>
            <div
              className="flex gap-2 items-center text-neutral-700  text-xs md:text-sm">
              ✅ Startup template Aceternity
            </div>
            <div
              className="flex gap-2 items-center text-neutral-700  text-xs md:text-sm">
              ✅ Random file upload lol
            </div>
            <div
              className="flex gap-2 items-center text-neutral-700  text-xs md:text-sm">
              ✅ Himesh Reshammiya Music CD
            </div>
            <div
              className="flex gap-2 items-center text-neutral-700  text-xs md:text-sm">
              ✅ Salman Bhai Fan Club registrations open
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {/* <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" /> */}
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            <img
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
          </div>
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
