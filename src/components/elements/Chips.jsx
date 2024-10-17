import React from 'react'

const Chips = ({items}) => {
    return (
        <div class="py-5">
            <div class="flex flex-wrap justify-left">
        {items.map((ele)=>{
            return <div class="flex justify-evenly items-center  font-medium  px-2 m-2 rounded-full shadow-xl text-black bg-orange-300 border border-gray-300 ">
                    <div class="text-xs font-medium leading-none max-w-full flex-initial p-1 m-1">{ele}</div>
                </div>
        })}

            </div>
        </div>
    )
}

export default Chips
