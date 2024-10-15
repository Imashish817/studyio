import React from "react";

export const BorderButton = ({name}) => {
  return (
    <button className="relative inline-flex h-14 mx-3 overflow-hidden rounded-full p-[3px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ef7f1a_0%,#393BB2_50%,#62287d_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-purple px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl text-nowrap">
       {name}
      </span>
    </button>
  );
};
