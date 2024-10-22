
import React from "react";
import { WobbleCard } from "./wobblecard.tsx";

export function WobbleCardDemo() {
  return (
    (<>
      
      <div
        className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">

        <WobbleCard
          containerClassName="col-span-1 lg:col-span-1 h-full bg-white min-h-[400px] lg:min-h-[300px] border rounded-2xl shadow-xl"
          className="">
          <div className="max-w-xs ">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cdn-img-e077c.appspot.com/o/scollarship.png?alt=media&token=f740f7c8-bcce-4dfc-b054-fe4631b447bf"
            width={180}
            height={180}
            alt="linear demo image"
            className="absolute right-1 bottom-2 object-contain rounded-2xl" />
            <h2
              className="text-left text-balance text-base md:text-xl lg:text-2xl font-semibold tracking-[-0.015em] text-black">
              Scholarships Up To ₹1.5 Crore
            </h2>
            <p className="mt-4 text-left  text-gray-600 text-sm">
            We are Proud to offer full scholarship of up to 50k per student on our test prep, counselling and admission services. Along with that we will also pay up to 1L for student’s second year of education, who enrol through us. This is limited to max 100 students per year (Starting 1st Nov’24) and will only be offered to under-resourced and talented youth.
            </p>
          </div>
         
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-1 h-full bg-white min-h-[400px] lg:h-[450px] border rounded-2xl shadow-xl">
          <h2
            className="text-left text-balance text-base md:text-xl lg:text-2xl font-semibold tracking-[-0.015em] text-black">
            ⁠⁠Exclusive 50% Scholarship For Women
          </h2>
          <p className="mt-4 text-left   text-gray-600 text-sm">
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
          containerClassName="col-span-1 lg:col-span-1 h-full bg-white min-h-[450px]  lg:min-h-[250px] border rounded-2xl shadow-xl ">
          <div className="max-w-sm">
            <h2
              className="mtext-left text-balance text-base md:text-xl lg:text-2xl font-semibold tracking-[-0.015em] text-black">
              ⁠⁠Complete Refund Guarantee
            </h2>
            <p className="mt-4 text-left   text-gray-600 text-sm">
            Under Your Trust, Our Transparency Promise, we are confident about our authentic services, and will be happy to offer a full refund if any of our counselling or admission related shared information is found incorrect or misleading. 
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
