
import React from "react";
import { PinContainer } from "../ui/3d-pin";
import certificate from "../../components/data/img/certificate.png"
export function AnimatedPinDemo({title,desc,img}) {
  return (
    <div className="h-[25rem] w-full flex items-center justify-center">
      <PinContainer
        title={title}
        href="https://twitter.com/"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight  sm:basis-1/2 w-[20rem] h-[20rem] bg-purple">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-white text-center">
           {title}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-100 text-center">
              {desc}
            </span>
          </div>
          
          <div  />
        </div>
      </PinContainer>
    </div>
  );
}
