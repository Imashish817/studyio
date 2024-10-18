
import React from "react";
import { WobbleCard } from "./wobblecard.tsx";

export function WobbleCardDemo() {
  return (
    (<>
      <div
        className="h-[10rem] rounded-md flex flex-col antialiased bg-white  items-center justify-center relative overflow-hidden mt-[10%]">
        <div className="max-w-2xl mx-auto  px-4 md:px-8 lg:px-10 ">
         
          <p className="text-3xl text-purple-900 md:text-4xl mb-4  max-w-4xl font-semibold">
          Our Bussiness  <span className="text-3xl text-orange-500 drop-shadow-xl md:text-4xl mb-4  max-w-4xl font-semibold">With Purpose</span>
          </p>

        </div>
      </div>
      <div
        className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">

        <WobbleCard
          containerClassName="col-span-1 lg:col-span-1 h-full bg-orange-500 min-h-[500px] lg:min-h-[300px]"
          className="">
          <div className="max-w-xs">
            <h2
              className="text-left text-balance text-base md:text-xl lg:text-2xl font-semibold tracking-[-0.015em] text-white">
              Funding Your Dreams: Scholarships Up To ₹1.5 Crore
            </h2>
            <p className="mt-4 text-left  text-base/6 text-neutral-200">
              Full scholarships up to ₹50k for test prep, counseling, and admissions.
              Up to ₹1L for your second year of study.
              Limited to 100 under-resourced, talented students.
              Starting November 1st.
            </p>
          </div>
          {/* <img
            src="https://firebasestorage.googleapis.com/v0/b/cdn-img-e077c.appspot.com/o/fp2.png?alt=media&token=29436ab9-7509-4d00-88b9-5439af789147"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-4 lg:-right-[10%]  -bottom-10 object-contain rounded-2xl" /> */}
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-orange-500">
          <h2
            className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            ⁠⁠Exclusive 50% Scholarship For Women
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            To support the Indian Government’s initiative of ‘Beti Bachao, Beti Padhao’, we will be offering 50% off on our Test Prep, Counselling and Admissions services to 200 Female students every year. Open to all Women.
          </p>
          {/* <img
            src="https://firebasestorage.googleapis.com/v0/b/cdn-img-e077c.appspot.com/o/pngwing.com.png?alt=media&token=f15f8ca4-b98a-4b7a-a511-6ba32156bae3"
            width={100}
            height={100}
            alt="linear demo image"
            className="absolute -right-0 lg:-right-[1%]  object-contain rounded-2xl" /> */}
        </WobbleCard>
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-1 bg-orange-500 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="max-w-sm">
            <h2
              className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              ⁠⁠Complete Refund Guarantee
            </h2>
            <p className="mt-4 max-w-[32rem] text-left  text-base/6 text-neutral-200">
              We're so confident in the quality and authenticity of our services that we offer a full refund guarantee. If you're not satisfied with our work or find any of our counseling or admission information inaccurate or misleading, we'll give you your money back without any questions.
            </p>
          </div>
          {/* <img
            src="https://firebasestorage.googleapis.com/v0/b/cdn-img-e077c.appspot.com/o/refund.png?alt=media&token=b7113002-c92e-4344-95cf-0b1745b0afd1"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-4 md:-right-[20%] lg:-right-[1%] -bottom-5 object-contain rounded-2xl" /> */}
        </WobbleCard>
      </div></>)
  );
}
