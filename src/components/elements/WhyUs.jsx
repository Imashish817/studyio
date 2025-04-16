import React from 'react'

const Carddetails = () => {
  return (
    <section class="py-24 relative xl:mr-0 lg:mr-5 mr-0">
    <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div class="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
            <div class="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                <div class="w-full flex-col justify-center items-start gap-8 flex">
                    <div class="flex-col justify-start lg:items-start items-center gap-4 flex">
                        <div class="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                        <h1 class="lg:text-5xl text-xl font-bold text-purple-900">Why <span className="text-orange-500 lg:text-5xl text-xl font-bold">Us?</span></h1>
                        
                            <p
                                class="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                                Our achievement story is a testament to teamwork and perseverance. Together, we've
                                overcome challenges, celebrated victories, and created a narrative of progress and
                                success.</p>
                        </div>
                    </div>
                    <div class="w-full flex-col justify-center items-start gap-6 flex">
                        <div class="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                            <div
                                class="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                <h4 class="text-gray-900 text-2xl font-bold  leading-9">50+ Years of Experience</h4>
                                <p class="text-gray-500 text-base font-normal leading-relaxed">Over 50 Years of collective experience in the education industry</p>
                            </div>
                            <div
                                class="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                <h4 class="text-gray-900 text-2xl font-bold  leading-9">1,45,000+ Students Helped
                                </h4>
                                <p class="text-gray-500 text-base font-normal leading-relaxed">Over 1,45,000 students helped by the team collectively in last 15 Years</p>
                            </div>
                        </div>
                        <div class="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                            <div
                                class="w-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                <h4 class="text-gray-900 text-2xl font-bold  leading-9">International Collaboration</h4>
                                <p class="text-gray-500 text-base font-normal leading-relaxed">Partnered with top universities across the globe</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full lg:justify-start justify-center items-start flex">
                <div
                    class="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
                    <img class="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                        src="https://pagedone.io/asset/uploads/1717742431.png" alt="about Us image" />
                </div>
            </div>
        </div>
    </div>
</section>
                                        
  )
}

export default Carddetails
