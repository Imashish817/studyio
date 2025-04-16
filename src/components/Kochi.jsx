import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { scrollToTop } from '../utils/ScrollToTop'
import ThreeCards from './elements/ThreeCards'
import { Services, WhyUs } from '../utils/constant'
import Carddetails from './elements/WhyUs'
import ContactWithSocialMedia from './ContactWithSocialMedia'

const Kochi = () => {
    useEffect(() => {
        scrollToTop()
    }, [])
    return (
        <div class=" lg:mt-0 md:mt-0 mt-[10%] " >
            <div class="bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://pagedone.io/asset/uploads/1717742431.png')", }} aria-label="Background image">
                <div class="flex items-center justify-center h-full bg-white bg-opacity-70">
                    <div class="text-center ">
                        <h1 class="lg:text-5xl text-xl font-bold text-purple-900">Kochi <span className="text-orange-500 lg:text-5xl text-xl font-bold">Experience Centre</span></h1>
                        <div className='lg:mx-[13%] mx-5 flex justify-center'>
                            <div className=''>
                                <h3 class="mt-4 text-sm lg:text-xl text-slate-700 ">Take the first step toward your global education journey with Study Culture. Our comprehensive support includes guidance throughout the entire process, ensuring you are well-prepared until you reach your campus.</h3>
                                <p class="mt-4 text-xs lg:text-xl text-slate-700 italic">**For more information, connect with Kochi's trusted experts in global education.</p>
                            </div>
                        </div>
                        <div className='my-10 flex justify-center'>
                            <Link target="_blank" to='https://portal.studyculture.io/enquiry-form'><img class="sm:mt-5 lg:w-56 rounded-2xl"
                                src="https://i.ibb.co/v68ngrkp/Whats-App-Image-2025-04-14-at-4-42-20-PM.jpg" alt="QR" /></Link>
                        </div>
                    </div>
                </div>
            </div>
            <ThreeCards h1={"How Can We"} h2={"Support You"} cards={Services} CSS={"shadow-orange-500 hover:shadow-2xl"} />
            <Carddetails />
            <ContactWithSocialMedia />
        </div>
    )
}

export default Kochi
