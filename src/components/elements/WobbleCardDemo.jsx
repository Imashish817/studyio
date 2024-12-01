
import React from "react";
import { moneyback, scollarship, women } from "../../utils/constant";

export function WobbleCardDemo() {
  return (
    <>
      <div
        className=" rounded-md flex flex-col antialiased bg-white  items-center justify-center relative overflow-hidden mt-[10%]">
        <div className="max-w-2xl mx-auto  px-4 md:px-8 lg:px-10 ">

          <p className="text-3xl text-purple-900 md:text-4xl  max-w-4xl font-semibold text-center">
            Our Business  <span className="text-3xl text-orange-500 drop-shadow-xl md:text-4xl  max-w-4xl font-semibold text-center">With Purpose</span>
          </p>

        </div>
      </div>

      <section class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center  gap-x-14 gap-y-14 ">

        <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl lg:my-20">
          <a >
            <img src={scollarship} alt="Product" class="h-50 w-72 object-cover rounded-t-xl" />
            <div class="lg:px-4 lg:py-10 text-center w-50">
            </div> <p class="text-lg font-semibold text-orange-500 truncate block capitalize text-center">Scholarships Up To ₹1.5 Crore</p>
          </a>
        </div>
        <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl  lg:my-20 ">
          <a >
            <img src={women} alt="Product" class="h-45 -mt-7 w-45 object-cover rounded-t-xl lg:scale-75" />
            <div class="lg:px-4 lg:py-8 text-center w-50">
              <p class="text-lg font-semibold text-orange-500 truncate block capitalize text-center">⁠Exclusive 50% Scholarship</p>
            </div>
          </a>
        </div>
        <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl  lg:my-20">
          <a >
            <img src={moneyback} alt="Product" class="h-50 w-72 object-cover rounded-t-xl" />
            <div class="lg:px-4 lg:py-16 text-center w-50">

              <p class="text-lg font-semibold text-orange-500 truncate block capitalize text-center">⁠⁠Complete Refund Guarantee</p>

            </div>

          </a>
        </div>
      </section>
      
    </>
  )

}
