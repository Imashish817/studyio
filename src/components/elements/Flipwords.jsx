import React from "react";
import { FlipWords } from "../ui/flip-words";

export function FlipWordsDemo() {
  const words = ["experience", "Culture"];

  return (
    <div className="h-[15rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-white">
      Redefining the Study
        <FlipWords words={words} /> <br />
      
      </div>
    </div>
  );
}
