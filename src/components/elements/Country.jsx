import React from 'react'
import PageNav from './PageNav'
import { Link } from 'react-router-dom'
import ThreeCards from './ThreeCards'
import ProcessCard from './ProcessCards'
import WCard from './WCard'
import { AustraliaData, CanadaData, EuropeData, GermanyData, UKData, USAData } from '../../utils/constant'
import LogoAndName from './LogoAndName'
import { WobbleCard } from './wobblecard.tsx'
import Heading from './Heading.jsx'
const StudyInCountry = () => {
    let country = window.location.pathname.split("/")[2];
    console.log(country)
    let CountryData;
    if (country.toLowerCase() === "canada") {
        CountryData = CanadaData;
    }
    else if (country.toLowerCase() === "usa") {
        CountryData = USAData;
    }
    else if (country.toLowerCase() === "australia") {
        CountryData = AustraliaData;
    }
    else if (country.toLowerCase() === "uk") {
        CountryData = UKData;
    }
    else if (country.toLowerCase() === "germany") {
        CountryData = GermanyData;
    }
    else if (country.toLowerCase() === "europe") {
        CountryData = EuropeData;
    }
    console.log(CountryData)
    return (
        <div>
            <div class="bg-cover bg-center h-[80vh] lg:h-[60vh] mt-10" style={{ backgroundImage: `url('${CountryData.intro.flag}')`, }} aria-label="Background image">
                <div class="flex items-center justify-center h-full bg-white bg-opacity-70">
                    <div class="text-center m-auto">
                        <h1 class="lg:text-5xl text-xl font-bold text-purple-900">Why Choose <span className="text-orange-500 lg:text-5xl text-xl font-bold">{CountryData?.intro?.key}</span></h1>
                        <div className='lg:mx-[13%] mx-5 flex justify-center'>
                            <div className=''>
                                <h3 class="mt-4 lg:text-xl lg:font-semibold text-slate-700 ">{CountryData?.intro?.value}</h3>
                            </div>
                        </div>
                        <div className='my-10'>

                            <Link target="_blank" to='https://agentportal.studyculture.io/'><button as={Link} className="inline-flex h-12 animate-shimmer items-center justify-center rounded-full border border-white bg-[linear-gradient(110deg,#581c87,45%,#ef7f1a,55%,#581c87)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-white">
                                Sign Up Now!
                            </button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <WCard appProcess={CountryData.appProcess} cources={CountryData.cources} flag={"https://i.ibb.co/dGJJH45/pngegg.png"} />
            <Heading first={"Top"} second={"Options"} />
            <LogoAndName data={CountryData.universities} />


            <div className='w-fit mx-auto mt-[10%] '>
                <Heading first={"Visa"} second={"Requirements"} />
                <div className='flex lg:gap-10 flex-wrap justify-center'>
                    {CountryData.visa.map((r) => {
                        return (
                            <div className='border border-orange-600 w-full lg:w-1/4  md:w-1/3 rounded-l-full flex p-2 m-2 hover:scale-110 '>
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
            <LogoAndName data={CountryData.scholarship} />
            <Heading first={"Career"} second={"Options"} />
            <div className=' flex justify-center flex-wrap gap-10 mb-[7%]'>
                {CountryData.Career.map((c) => {
                    return (
                        <div className="w-full max-w-xl  bg-gradient-to-tr from-orange-500 to-white border border-white rounded-lg shadow-xl hover:shadow-2xl ">
                            <div className="flex flex-col items-center py-5 px-5">
                                <p
                                    className="border bg-orange-500  text-white w-4/6 text-center font-semibold rounded-full px-2 py-2 -mt-10 mb-5">
                                    {c.key}
                                </p>
                                {c.opt.map((option) => {
                                    return (<div className='bg-orange-200  px-5 pb-4 mx-2 my-4 rounded-xl mb-4 border border-white hover:scale-110 w-full'>
                                        <p
                                            className="sm:text-sm text-lg font-semibold text-center mx-auto w-fit border border-orange-200 text-white -mt-4 px-10 py-2 rounded-full bg-orange-500">
                                            {option.key}
                                        </p>
                                        {option.value.map((v) => {
                                            return (
                                                <p className='sm:text-sm text-xs text-center  text-neutral-800 mt-2 px-2'>
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

export default StudyInCountry
