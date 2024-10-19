import React from 'react'
import home from "../data/img/home.jpg"
import { FlipWordsDemo } from './Flipwords'
import { TextGenerateEffectDemo } from './Textgenerate'
import { BorderButton } from './GlowButton'
import Btn from './Btn'
const HeroSection = () => {
  return (
    <div>
      <section className="relative">
        <div className=" flex flex-col-reverse lg:flex-row lg:items-start items-center md:mt-[6%] justify-around">
          <div className="flex lg:ml-10 lg:w-2/5  flex-col items-center lg:items-stretch lg:ml-30 xl:ml-0 xl:pl-0">
            <FlipWordsDemo />
            <TextGenerateEffectDemo />
            <div className="flex justify-center lg:justify-stretch flex-wrap lg:ml-5 gap-4">
              <Btn text="Talk Your First Step" />
              <Btn text="Get Your Scholarship Plan" />
            </div>
            <div className="flex justify-start my-5 mt-[5%]">
              <div className="flex flex-col items-center justify-center">
                <p className="font-bold px-5 text-center">50+ years</p>
                <p className="px-5 text-sm text-center"> of Experience in<br /> Education Industry</p>
              </div>
              <div className="border border-x-2 rounded-2xl border-purple-900"></div>
              <div className="flex flex-col items-center justify-center">
                <p className="font-bold px-5 text-center">Upto 1.5 Cr</p>
                <p className="px-5 text-sm text-center">Scholarship for <br />100 students per year</p>
              </div>
            </div>
          </div>
          
          <div className="relative flex justify-center mb-10 md:mb-16 lg:mb-0 z-10 ">
            <div className='bg-gradient-to-b  lg:bg-gradient-to-r from-white absolute top-0 bottom-0 left-0 right-0 z-10 opacity-100 '>
              
            </div>
            {/* <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-3/4 md:h-3/4 lg:w-full" src={home} alt="" /> */}
            <video width="100%" height="50vh" autoplay="autoplay" loop muted className=' rounded-r-3xl top-0 bottom-0 left-0 right-0' >
              <source src="https://firebasestorage.googleapis.com/v0/b/cdn-img-e077c.appspot.com/o/2002527-sd_640_360_30fps.mp4?alt=media&token=1b39410c-512e-4de9-8a29-f50c3bd9e0c7" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HeroSection
