
import React from "react";
import { WobbleCard } from "./wobblecard.tsx";

export function WobbleCardDemo() {
  return (
    (<>
      <div
        className="h-[10rem] rounded-md flex flex-col antialiased bg-white  items-center justify-center relative overflow-hidden mt-[10%]">
        <div className="max-w-2xl mx-auto  px-4 md:px-8 lg:px-10 ">
         
          <p className="text-3xl text-purple-900 md:text-4xl mb-4  max-w-4xl font-semibold text-center">
          Our Bussiness  <span className="text-3xl text-orange-500 drop-shadow-xl md:text-4xl mb-4  max-w-4xl font-semibold text-center">With Purpose</span>
          </p>

        </div>
      </div>
      <div
        className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">

        <WobbleCard
          containerClassName="col-span-1 lg:col-span-1 h-full bg-orange-200 min-h-[400px] lg:min-h-[300px]"
          className="">
          <div className="max-w-xs">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cdn-img-e077c.appspot.com/o/scollarship.png?alt=media&token=f740f7c8-bcce-4dfc-b054-fe4631b447bf"
            width={180}
            height={180}
            alt="linear demo image"
            className="absolute right-1 bottom-2 object-contain rounded-2xl" />
            <h2
              className="text-left text-balance text-base md:text-xl lg:text-2xl font-semibold tracking-[-0.015em] text-black">
              Funding Your Dreams: Scholarships Up To ₹1.5 Crore
            </h2>
            <p className="mt-4 text-left  text-base/6 text-gray-900">
              Full scholarships up to ₹50k for test prep, counseling, and admissions.
              Up to ₹1L for your second year of study.
              Limited to 100 under-resourced, talented students.
              Starting November 1st.
            </p>
          </div>
         
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-1 h-full bg-orange-200 min-h-[400px] lg:h-[450px]">
          <h2
            className="text-left text-balance text-base md:text-xl lg:text-2xl font-semibold tracking-[-0.015em] text-black">
            ⁠⁠Exclusive 50% Scholarship For Women
          </h2>
          <p className="mt-4 text-left  text-base/6 text-gray-900">
            To support the Indian Government’s initiative of ‘Beti Bachao, Beti Padhao’, we will be offering 50% off on our Test Prep, Counselling and Admissions services to 200 Female students every year. Open to all Women.
          </p>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cdn-img-e077c.appspot.com/o/women.png?alt=media&token=742fd139-0d49-438b-9246-c6ac7b658d6c"
            width={150}
            height={150}
            alt="linear demo image"
            className="absolute right-2 bottom-1 -mt-3 object-contain rounded-2xl" />
        </WobbleCard>
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-1 h-full bg-orange-200 min-h-[450px]  lg:min-h-[250px]">
          <div className="max-w-sm">
            <h2
              className="mtext-left text-balance text-base md:text-xl lg:text-2xl font-semibold tracking-[-0.015em] text-black">
              ⁠⁠Complete Refund Guarantee
            </h2>
            <p className="mt-4 text-left   text-gray-900 text-base/6">
            We're so confident in the quality and authenticity of our services that we offer a full refund guarantee. If you're not satisfied with our work or find any of our counseling or admission information inaccurate or misleading, we'll give you your money back without any questions.
            </p>
          </div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cdn-img-e077c.appspot.com/o/moneyback.png?alt=media&token=a5770b94-3fa1-47da-ab55-1c9fb7d04b61"
            width={205}
            height={205}
            alt="linear demo image"
            className="absolute right-0 bottom-2 -mt-7 object-contain rounded-2xl" />
        </WobbleCard>
      </div></>)
  );
}
