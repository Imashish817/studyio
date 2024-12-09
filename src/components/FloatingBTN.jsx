import React from 'react'
import { useState } from 'react'
import { TestimonialTooltip } from './Tooltip.tsx'
import { Link } from 'react-router-dom'
import { scrollToTop } from '../utils/ScrollToTop.js'

const FloatingBTN = () => {
    const [show, setShow] = useState(false)
    return (
        <div class="relative" onMouseEnter={() => setShow(true)} onMouseOut={() => setShow(false)} >
            <div className='fixed bottom-[10%] cursor-pointer right-11 '>
               <Link target="_blank" to={'https://agentportal.studyculture.io/'}><TestimonialTooltip /></Link>
            </div>
        </div>


    )
}

export default FloatingBTN

