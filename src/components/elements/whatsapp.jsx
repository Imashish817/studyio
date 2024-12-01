import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { TestimonialTooltip } from '../Tooltip.tsx'
// import chirag from '../data/img/ChiragMehta.JPG'
export default function WhatsApp() {

  return (
    <>
      <FloatingWhatsApp phoneNumber="+919992330440" accountName="Study Buddy" chatMessage="Hello there! 🤝 How can we help?" allowEsc allowClickAway avatar="https://i.ibb.co/b2tVmJ9/Newlogo-optimized.png" />
      </>
  )
}