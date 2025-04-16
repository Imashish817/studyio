import React from 'react'

const ThreeCards = ({h1,h2, cards, CSS}) => {
    return (
        <>
        <div
        className=" rounded-md flex flex-col antialiased bg-white  items-center justify-center relative overflow-hidden mt-[10%] mb-12">
        <div className="max-w-2xl mx-auto  px-4 md:px-8 lg:px-10 ">
          
          <p className="text-3xl text-purple-900 md:text-4xl mb-4  max-w-4xl font-semibold">
          {h1} <span className="text-orange-500 text-3xl drop-shadow-xl md:text-4xl mb-4  max-w-4xl font-semibold"> {h2}</span>
          </p>

        </div>
      </div>
        <div className=' flex justify-center flex-wrap gap-10'>
            {cards.map((card) => {
                return (<div className="w-full max-w-sm mb-10 bg-white border border-gray-300 rounded-lg shadow-xl hover:shadow-2xl ">
                    <div className="flex flex-col items-center pb-10">
                        {CSS ? 
                        <img class="w-24 h-24 mb-3 -mt-[10%] rounded-full shadow-lg shadow-orange-500 hover:shadow-2xl bg-white hover:cursor-pointer" src={card.img} alt="Bonnie image" />
                    : <img class="w-24 h-24 mb-3 -mt-[10%] rounded-full shadow-lg  bg-white hover:cursor-pointer" src={card.img} alt="Bonnie image" />
                    }
                        <p
                            className="border border-orange-500  text-orange-500 font-semibold rounded-full px-2 py-0.5 mt-4">
                           { card.title}
                        </p>
                        <p
                            className="sm:text-sm text-xs text-center  text-neutral-500 mt-4 px-2">
                           {card.para}
                        </p>
                    </div>
                </div>)
            })}



        </div></>
        



    )
}

export default ThreeCards
