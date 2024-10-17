import React from 'react'
import home from "../data/img/home.jpg"
import { FlipWordsDemo } from './Flipwords'
import { TextGenerateEffectDemo } from './Textgenerate'
import { BorderButton } from './GlowButton'
const HeroSection = () => {
  return (
    <div>
       <section class="relative">
      <div class="container flex flex-col-reverse lg:flex-row lg:items-start items-center mt-2 lg:mt-1">
        <div class="flex flex-1 flex-col items-center lg:items-start lg:mt-32 lg:ml-20 ">
        <FlipWordsDemo />
        <TextGenerateEffectDemo />
          <div class="flex justify-center flex-wrap gap-2 md:gap-5">
         
            <BorderButton name={"Start Your New Journy"} />
            <BorderButton name={"Get Your personalised Plan for FREE "} />
         
          </div>
          <div className="flex justify-start my-5 mt-15">
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

        <div class="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10 ">
          <img class="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-3/4 md:h-3/4 lg:w-full" src={home} alt="" />
        </div>
      </div>

     
    </section>

    </div>
  )
}

export default HeroSection
