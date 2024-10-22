import React from 'react'
import { WobbleCardDemo } from './elements/WobbleCardDemowithContent'
import { ExpandableCardDemo } from './elements/Team'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        // <div>
        //   <div className="text-center flex justify-center md:-mb-32">

        //   <p className="text-3xl text-purple-900 md:text-4xl mb-4  max-w-4xl font-semibold">
        //   Welcome to <span className="text-orange-500 text-3xl drop-shadow-xl md:text-4xl mb-4  max-w-4xl font-semibold">  Study Culture</span>
        //   </p>

        // </div>
        // </div>
        <div class=" lg:mt-0 md:mt-0 mt-[15%] " >
            <div class="bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/cdn-img-e077c.appspot.com/o/selected%5C%2FIMG_1645.JPG?alt=media&token=e561e386-16e7-4897-9f3a-7f1f80a029ef')", }} aria-label="Background image">
                <div class="flex items-center justify-center h-full bg-white bg-opacity-70">
                    <div class="text-center ">
                        <h1 class="lg:text-5xl text-xl font-bold text-purple-900">Welcome to <span className="text-orange-500 lg:text-5xl text-xl font-bold">Study Culture</span></h1>
                        <div className='lg:mx-[13%] mx-5 flex justify-center'>
                            <div className='hidden lg:block md:block'>
                                <p class="mt-4 text-xl text-slate-700 ">At Study Culture, we believe in more than just helping you study abroad-we're here to redefine your global career.

                                    With the support of the Richly Experienced Team from the Industry, we are setting a new culture in international education, which helps students define their careers in a meaningful way. Through our expert counselling, and holistic services, we ensure a seamless journey from selecting the right university to settling into a new country
                                </p>
                            </div>

                        </div>

                        <div className='my-10'>

                            <Link to='/contact'><button as={Link} className="inline-flex h-12 animate-shimmer items-center justify-center rounded-full border border-white bg-[linear-gradient(110deg,#581c87,45%,#ef7f1a,55%,#581c87)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-white">
                                Contact Us Now
                            </button></Link>
                        </div>

                    </div>
                </div>
            </div>


            <WobbleCardDemo />
            <ExpandableCardDemo />
        </div>
    )
}

export default About
