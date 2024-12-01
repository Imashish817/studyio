import React from 'react'
import { Link } from 'react-router-dom'

const Btn = ({text,form}) => {

  const handleForm=(form)=>{
    if(form==="firststep")
    {

      <Link to="/FirstStep"></Link>
    }
  }
  return (

        // Button code
        <button onClick={handleForm} className="inline-flex h-12 animate-shimmer items-center justify-center rounded-full border border-white bg-[linear-gradient(110deg,#581c87,45%,#ef7f1a,55%,#581c87)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-white">
          {text}
        </button>
  
        // tailwind.config.js code
        
      
  )
}

export default Btn
