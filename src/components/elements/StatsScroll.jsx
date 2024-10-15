import lable from '../data/img/lable.png'
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";


export function StatsScroll() {
  return (
    (<div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
            Unlocking the Numbers Behind Our <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
              Study Culture
              </span>
            </h1>
          </>
        }>
        <img
          src={lable}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top bg-cover"
          draggable={true} />
      </ContainerScroll>
    </div>)
  );
}
