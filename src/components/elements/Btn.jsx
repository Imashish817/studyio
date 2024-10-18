import React from 'react'

const Btn = ({text}) => {
  return (
    <a href="#_" class="relative px-3 py-2 font-bold text-white rounded-lg group">
<span class="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-purple-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
<span class="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-orange-500 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
<span class="relative">{text}</span>
</a>
  )
}

export default Btn
