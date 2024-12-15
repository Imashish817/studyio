import React from 'react'

const LogoAndName = ({data}) => {
  return (
    
      <div className='bg-gradient-to-tr from-orange-200 to-purple-200'>
                {/* <h1 className='text-center mt-[7%] py-5  text-2xl font-bold tracking-tight  text-purple-900'>Top <span className='text-orange-500'>Universities</span> </h1> */}
                <div className='flex flex-wrap mx-[5%] justify-around gap-5 py-5'>
                    {data.map((u) => {
                        return (
                            <div class=" shadow w-4/5 lg:w-1/6 bg-white rounded-2xl hover:scale-110">
                                <img class=" mx-auto h-3/5 w-full  rounded-2xl bg-cover mb-3 " src={u.value} alt="Bonnie image" />
                                <h5 class=" mx-auto text-lg font-semibold text-gray-900 my-auto text-center p-2">{u.key}</h5>
                            </div >
                        )
                    })}
                </div>
            </div>
    
  )
}

export default LogoAndName
