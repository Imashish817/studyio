import React from 'react'
import { WobbleCardDemo } from './elements/WobbleCardDemo'
import { BentoGridDemo } from './elements/bento'
import Btn from './elements/Btn'
import { TimelineDemo } from './elements/TimeLine'

const Services = () => {
  return (
    <div>
        <div class="bg-cover bg-center h-screen" style={{backgroundImage: "url('https://highgroveeducation.com/wp-content/uploads/2024/07/42-tmua.png')",}} aria-label="Background image">
  <div class="flex items-center justify-center h-full bg-white bg-opacity-70">
    <div class="text-center text-black ">
      <h1 class="text-5xl font-bold">Experience the Difference</h1>
      <p class="mt-4 text-xl">Join us and start your journey today.</p>
      <div className='my-10'>
      <Btn text={"Start Your New Journey"}/>
      </div>
      
    </div>
  </div>
</div>
        
      <WobbleCardDemo/>
      <TimelineDemo/>
      {/* <BentoGridDemo/> */}
    </div>
  )
}

export default Services
