import React from 'react'

const ProcessCard = () => {
    const cards = [
        {
            title: "Proof of Acceptance",
            img: "https://i.ibb.co/MGcKj6t/University-of-Toronto-Logo-wine.png"

        },
        {
            title: "50+ Years of Experience",
            para: "Over 50 Years of collective experience in the education industry ",
            img: "https://i.ibb.co/2csP0jv/8992931.png"

        }, {
            title: "50+ Years of Experience",
            para: "Over 50 Years of collective experience in the education industry ",
            img: "https://i.ibb.co/2csP0jv/8992931.png"

        },

        {
            title: "1,45,000+ Students Helped",
            para: "Over 1,45,000 students helped by the team collectively in last 15 Years",
            img: "https://i.ibb.co/Ks6c8Qq/aim-3.png"

        },
        {
            title: "International Collaboration",
            para: " Partnered with top universities across the globe",
            img: "https://i.ibb.co/8K4wPyP/pp.png"

        }
    ]
    return (
        <>
            <div
                className=" rounded-md flex flex-col antialiased bg-white  items-center justify-center relative overflow-hidden mt-[10%] mb-12">
                <div className="max-w-2xl mx-auto  px-4 md:px-8 lg:px-10 ">

                    <p className="text-3xl text-purple-900 md:text-4xl mb-4  max-w-4xl font-semibold">
                        Visa
                        <span className="text-orange-500 text-3xl drop-shadow-xl md:text-4xl mb-4  max-w-4xl font-semibold"> Requirements</span>
                    </p>

                </div>
            </div>
            <div className=' flex justify-center flex-wrap gap-10'>
                {cards.map((card) => {
                    return (<div className="w-full max-w-sm  bg-white border border-gray-300 rounded-lg shadow-xl hover:shadow-2xl ">
                        <div className="flex flex-col items-center pb-10">
                            <img class="w-24 h-auto mb-3 -mt-[10%] rounded-full shadow-lg border" src={card.img} alt="Bonnie image" />
                            <p
                                className="border border-orange-500  text-orange-500 font-semibold rounded-full px-2 py-0.5 mt-4">
                                {card.title}
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

export default ProcessCard
