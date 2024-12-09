import React from 'react'

const Heading = ({first,second}) => {
    return (
        <div
            className=" rounded-md flex flex-col antialiased bg-white  items-center justify-center relative overflow-hidden mt-[5%] mb-6">
            <div className="max-w-2xl mx-auto  px-4 md:px-8 lg:px-10 ">

                <p className="text-3xl text-purple-900 md:text-4xl mb-4  max-w-4xl font-semibold">
                    {first}
                    <span className="text-orange-500 text-3xl drop-shadow-xl md:text-4xl mb-4  max-w-4xl font-semibold"> {second}</span>
                </p>

            </div>
        </div>
    )
}

export default Heading
