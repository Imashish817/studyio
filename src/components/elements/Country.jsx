import React from 'react'
import PageNav from './PageNav'
import { Link } from 'react-router-dom'
import ThreeCards from './ThreeCards'
import ProcessCard from './ProcessCards'
import WCard from './WCard'
import { CanadaData } from '../../utils/constant'
import LogoAndName from './LogoAndName'
import { WobbleCard } from './wobblecard.tsx'
import Heading from './Heading.jsx'
const Canada = () => {
    return (

        <div>
            <WCard intro={CanadaData.intro} appProcess={CanadaData.appProcess} cources={CanadaData.cources} />
            <Heading first={"Top"} second={"Options"} />
            <LogoAndName data={CanadaData.universities} />


            <div className='w-fit mx-auto mt-[10%] '>
                <Heading first={"Visa"} second={"Requirements"} />
                <div className='flex gap-10 flex-wrap justify-center'>
                    {CanadaData.visa.map((r) => {
                        return (
                            <div className='border border-orange-600 w-1/5 rounded-l-full flex p-2 m-2  '>
                                <div className='w-16 h-16 bg-orange-600 rounded-full'>
                                    <img src={r.value} className='p-2' />
                                    </div>
                                <p
                                    className=" text-orange-600 text-center font-semibold rounded-full px-2 py-0.5 m-auto ">
                                    {r.key}
                                </p>
                            </div>)
                    })}
                </div>
            </div>
            <Heading first={"Scholarship"} second={"Options"} />
            <LogoAndName data={CanadaData.scholarship} />
            <Heading first={"Career"} second={"Options"} />
            <div className=' flex justify-center flex-wrap gap-10 mb-[7%]'>
                {CanadaData.Career.map((c) => {
                    return (
                        <div className="w-full max-w-xl  bg-white border border-gray-300 rounded-lg shadow-xl hover:shadow-2xl ">
                            <div className="flex flex-col items-center py-5 px-5">
                                <p
                                    className="border border-orange-500  text-orange-500 font-semibold rounded-full px-2 py-0.5 mt-4">
                                    {c.key}
                                </p>
                                {c.opt.map((option) => {
                                    return (<div className='bg-orange-200 w-full px-5 pb-4 mx-2 my-4 rounded-xl'>
                                        <p
                                            className="sm:text-sm text-lg font-semibold text-center underline text-neutral-500 mt-2 px-2">
                                            {option.key}
                                        </p>
                                        {option.value.map((v) => {
                                            return (
                                                <p className='sm:text-sm text-xs text-center  text-neutral-500 mt-2 px-2'>
                                                    ✔ {v}
                                                </p>
                                            )
                                        })}
                                    </div>)
                                })}
                            </div>
                        </div>
                    )
                })}




            </div>




        </div >
    )
}

export default Canada
