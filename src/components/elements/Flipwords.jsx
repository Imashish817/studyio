import React from "react";
import { FlipWords } from "../ui/flip-words";

export function FlipWordsDemo() {
  const words = ["experience", "Culture...."];

  return (
    <div className="h-[4rem] flex  items-center ">
      <div className="text-4xl font-semibold text-nowrap text-orange-500 m-5">
      Redefining the Study
        <FlipWords words={words} /> <br />


      </div>
    </div>
  );
}
