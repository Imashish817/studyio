import React, { useEffect } from 'react'
import { WobbleCardDemo } from './elements/WobbleCardDemowithContent'
import { ExpandableCardDemo } from './elements/Team'
import { Link } from 'react-router-dom'
import { BentoGridThirdDemo } from './elements/bento'
import ThreeCards from './elements/ThreeCards'
import { scrollToTop } from '../utils/ScrollToTop'

const About = () => {
    useEffect(() => {
        scrollToTop()
      }, [])
    return (
        // <div>
        //   <div className="text-center flex justify-center md:-mb-32">

        //   <p className="text-3xl text-purple-900 md:text-4xl mb-4  max-w-4xl font-semibold">
        //   Welcome to <span className="text-orange-500 text-3xl drop-shadow-xl md:text-4xl mb-4  max-w-4xl font-semibold">  Study Culture</span>
        //   </p>

        // </div>
        // </div>
        <div class=" lg:mt-0 md:mt-0 mt-[15%] " >
            <div class="bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://i.ibb.co/88Lz9mH/IMG-1645.jpg')", }} aria-label="Background image">
                <div class="flex items-center justify-center h-full bg-white bg-opacity-70">
                    <div class="text-center ">
                        <h1 class="lg:text-5xl text-xl font-bold text-purple-900">Welcome to <span className="text-orange-500 lg:text-5xl text-xl font-bold">Study Culture</span></h1>
                        <div className='lg:mx-[13%] mx-5 flex justify-center'>
                            <div className='hidden lg:block md:block'>
                                <h3 class="mt-4 text-xl text-slate-700 ">We aim to spread awareness on Education Opportunities Around the World!</h3>
                                <p class="mt-4 text-xl text-slate-700 ">With the support of the Richly Experienced Team from the Industry, we are setting a new culture in international education, which helps students define their careers in a meaningful way. Through our expert counselling, and holistic services, we ensure a seamless journey from selecting the right university to settling into a new country.</p>
                            </div>

                        </div>

                        <div className='my-10'>
                      
                            <Link target="_blank" to='https://agentportal.studyculture.io/'><button as={Link} className="inline-flex h-12 animate-shimmer items-center justify-center rounded-full border border-white bg-[linear-gradient(110deg,#581c87,45%,#ef7f1a,55%,#581c87)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-white">
                                Sign Up Now!
                            </button></Link>
                          
                        </div>

                    </div>
                </div>
            </div>

            
            <WobbleCardDemo />
            {/* <BentoGridThirdDemo/> */}
            <ThreeCards/>
            <ExpandableCardDemo />
        </div>
    )
}

export default About
