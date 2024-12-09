import React from 'react'
import { WobbleCard } from './wobblecard.tsx'

const WCard = ({ intro, appProcess, cources }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full my-[5%]">
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-orange-500 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-2xl ">
          <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            {intro.key}
          </h2>
          <p className="mt-4 max-w-[50rem] text-left  text-base/6 text-neutral-200">{intro.value}
          </p>
        </div>
        <img
          src="https://i.ibb.co/dGJJH45/pngegg.png"
          width={400}
          height={400}
          alt="linear demo img"
          className="absolute lg:top-0 right-0 lg:right-14 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-purple-500 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="">
          <h2 className="text-center text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-neutral-900">
            Application Process
          </h2>
          {appProcess.map((p) => {
            return (<p className="mt-4 text-left  text-base/2  p-2 border bg-purple-200  rounded-xl flex text-neutral-800">
              <img src={p.img} className='h-14 mx-2' />
              <div className='mx-2'><span className='font-semibold  '>{p.key}</span> <br></br>{p.value}</div>

            </p>)
          })}

        </div>

      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-purple-500">
        <h2 className="max-w-80  text-center text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-neutral-900">
          Variety of Courses
        </h2>
        {cources.map((p) => {
          return (<p className="mt-4 py-3  text-base/2  text-white bg-black rounded-lg p-2 ">
            <span className='font-semibold text-left '>{p.key}</span > <span className='font-semibold text-right flex justify-end '>{p.value}</span >
          </p>)
        })}
      </WobbleCard>


    </div>
  )
}

export default WCard
