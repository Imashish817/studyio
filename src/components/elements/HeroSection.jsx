import React from 'react'
import home from "../data/img/home.jpg"
import { FlipWordsDemo } from './Flipwords'
import { TextGenerateEffectDemo } from './Textgenerate'
import { BorderButton } from './GlowButton'
import Btn from './Btn'
import { Link } from 'react-router-dom'
import { scrollToTop } from '../../utils/ScrollToTop'
const HeroSection = () => {
  return (
    // <div>
    //   <section className="relative">
    //     <div className=" flex flex-col-reverse lg:flex-row lg:items-start items-center md:mt-[6%] justify-around">
    //       <div className="flex lg:ml-10 lg:w-2/5  md:w-2/5 flex-col items-center lg:items-stretch lg:ml-30 xl:ml-0 xl:pl-0 ">
    //         <FlipWordsDemo />
    //         <TextGenerateEffectDemo />
    //         <div className="flex justify-center lg:justify-stretch flex-wrap lg:ml-5 gap-6 lg:my-6 ">
    //           <Link to='/FirstStep'><button as={Link} className="inline-flex h-12 animate-shimmer items-center justify-center rounded-full border border-white bg-[linear-gradient(110deg,#581c87,45%,#ef7f1a,55%,#581c87)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-white">
    //             Take Your First Step
    //           </button></Link>
    //           <Link to='/Scholarship'><button as={Link} className="inline-flex h-12 animate-shimmer items-center justify-center rounded-full border border-white bg-[linear-gradient(110deg,#581c87,45%,#ef7f1a,55%,#581c87)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-white">
    //             Get Your Scholarship Plan
    //           </button></Link>

    //         </div>
    //         <div className="flex justify-start my-5 mt-[5%]">
    //           <div className="flex flex-col items-center justify-center">
    //             <p className="font-bold px-5 text-center">50+ years</p>
    //             <p className="px-5 text-sm text-center"> of Experience in<br /> Education Industry</p>
    //           </div>
    //           <div className="border border-x-2 rounded-2xl border-purple-900"></div>
    //           <div className="flex flex-col items-center justify-center">
    //             <p className="font-bold px-5 text-center">Upto 1.5 Cr</p>
    //             <p className="px-5 text-sm text-center">Scholarship for <br />100 students per year</p>
    //           </div>
    //         </div>
    //       </div>

    //       <div className="relative flex justify-center mb-10 md:mb-16 lg:mb-0 z-10 ">
    //         <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-3/4 md:h-3/4 lg:w-full" src={home} alt="" />
    //         {/* <video width="100%" height="100%" autoplay="autoplay" loop muted className=' rounded-r-3xl top-0 bottom-0 left-0 right-0' >
    //           <source src="https://firebasestorage.googleapis.com/v0/b/cdn-img-e077c.appspot.com/o/2002527-sd_640_360_30fps.mp4?alt=media&token=1b39410c-512e-4de9-8a29-f50c3bd9e0c7" type="video/mp4" />
    //         </video> */}
    //       </div>
    //     </div>
    //   </section>
    // </div>
    <div class="container mx-auto flex flex-col-reverse px-5 md:flex-row  items-center lg:h-[80vh] md:-[60vh] mt-[3%] lg:mt-[0%]">
      
      <div class="lg:flex-grow md:w-1/2 lg:pr-30 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center lg:-mt-10">
        <FlipWordsDemo />
        <TextGenerateEffectDemo />
        <div class="flex flex-wrap justify-center gap-2 lg:gap-7 my-6 lg:ml-5">
        
          <Link to='/FirstStep'><button as={Link} className="text-nowrap inline-flex h-14 animate-shimmer items-center justify-center rounded-full border border-white bg-[linear-gradient(110deg,#581c87,45%,#ef7f1a,55%,#581c87)] bg-[length:200%_100%] px-6 font-semibold text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-white">
            Take Your First Step
          </button></Link>
          
          <Link to='/Scholarship'><button as={Link} className="inline-flex h-14 animate-shimmer items-center justify-center rounded-full border border-white bg-[linear-gradient(110deg,#581c87,45%,#ef7f1a,55%,#581c87)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-white">
            Get Your Scholarship Plan
          </button></Link>
        </div>
        <div class="flex flex-wrap justify-center lg:gap-4 mt-10 ">
          <div className="flex flex-col items-center justify-start text-left">
            <p className="font-bold lg:px-5 sm:px-0 text-center">Over 50 Years</p>
            <p className="lg:px-5  sm:px-0 text-sm text-center"> of Combined Expertise <br /> in the Education Industry</p>
          </div>
          <div className="border border-x-2 rounded-2xl border-purple-900"></div>
          <div className="flex flex-col items-center justify-start text-left">
            <p className="font-bold lg:px-5  sm:px-0 text-center">Upto 1.5 Cr</p>
            <p className="lg:px-5 text-sm  sm:px-0 text-center">Scholarship for <br />100 students per year</p>
          </div>
        </div>
      </div>
      <div class="lg:max-w-2xl lg:w-full md:w-1/2 w-6/6">
        <img class="object-cover object-center rounded" alt="hero" src="https://i.ibb.co/D1xzMz9/home.jpg" />
      </div>
    </div>
  )
}

export default HeroSection
