import React from 'react'
import home from "../data/img/home.jpg"
import { FlipWordsDemo } from './Flipwords'
import { TextGenerateEffectDemo } from './Textgenerate'
import { BorderButton } from './GlowButton'
import Btn from './Btn'
const HeroSection = () => {
  return (
    <div>
       <section class="relative">
      <div class="container flex flex-col-reverse lg:flex-row lg:items-start items-center mt-2">
        <div class="flex flex-1 flex-col items-center lg:items-start lg:mt-[10%] lg:ml-20 ">
        <FlipWordsDemo />
        <TextGenerateEffectDemo />
          <div class="flex justify-center flex-wrap gap-5 md:gap-10 lg:ml-5 ">
            <Btn text={"Start Your New Journey"}/>
            <Btn text={"Get Your personalised Plan for FREE "} />
          </div>
          <div className="flex justify-start my-5 mt-[10%]">
            <div>
              <p className="font-bold  px-5 text-center">1,45,000+</p>
              <p className=" px-5 text-sm text-center"> Success Stories</p>
            </div>
            <div className="border border-x-2 rounded-2xl border-purple-900"></div>
            <div>
              <p className="font-bold  px-5 text-center">2,400+</p>
              <p className="px-5 text-sm  text-center"> Partner Campuses</p>
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
