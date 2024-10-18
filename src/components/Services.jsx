import React from 'react'
import { WobbleCardDemo } from './elements/WobbleCardDemo'
import { BentoGridDemo } from './elements/bento'
import Btn from './elements/Btn'

const Services = () => {
  return (
    <div>
        <div class="bg-cover bg-center h-screen" style={{backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/cdn-img-e077c.appspot.com/o/home.jpg?alt=media&token=3d0fa57c-06ae-48e4-8e1e-78db5cfa0289')",}} aria-label="Background image">
  <div class="flex items-center justify-center h-full bg-white bg-opacity-80">
    <div class="text-center text-black ">
      <h1 class="text-5xl font-bold">Experience the Difference</h1>
      <p class="mt-4 text-xl">Join us and start your journey today.</p>
      <div className='my-10'>
      <Btn text={"Start Your New Journey"}/>
      </div>
      
    </div>
  </div>
</div>
        <BentoGridDemo/>
      <WobbleCardDemo/>
    </div>
  )
}

export default Services
