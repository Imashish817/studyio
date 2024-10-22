import React from 'react'
import { WobbleCardDemo } from './elements/WobbleCardDemo'
import { BentoGridDemo } from './elements/bento'
import Btn from './elements/Btn'
import { TimelineDemo } from './elements/TimeLine'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <div>
      <div class="bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/cdn-img-e077c.appspot.com/o/selected%5C%2Fs.jpg?alt=media&token=db212a8c-86db-453a-93fc-c3b1f1e81ec6')", }} aria-label="Background image">
        <div class="flex items-center justify-center h-full bg-white bg-opacity-70">
          <div class="text-center text-black ">
            <h1 class="text-5xl font-bold">Experience the Difference</h1>
            <p class="mt-4 text-xl">Join us and start your journey today.</p>
            <div className='my-10'>

              <Link to='/FirstStep'><button as={Link} className="inline-flex h-12 animate-shimmer items-center justify-center rounded-full border border-white bg-[linear-gradient(110deg,#581c87,45%,#ef7f1a,55%,#581c87)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-white">
                Take Your First Step
              </button></Link>
            </div>

          </div>
        </div>
      </div>

      {/* <WobbleCardDemo/> */}
      <div className="text-center flex justify-center md:-mb-32">

        <p className="text-3xl text-purple-900 md:text-4xl mb-4  max-w-4xl font-semibold">
          How Can We <span className="text-orange-500 text-3xl drop-shadow-xl md:text-4xl mb-4  max-w-4xl font-semibold"> Support You?</span>
        </p>

      </div>
      <TimelineDemo />
      {/* <BentoGridDemo/> */}
    </div>
  )
}

export default Services
