import React from "react";

const SecondScreenGradientBg = () => {
  return (
    <>
      <div className="animate-slowPulseOne absolute top-1/4 left-0 w-1/3 h-2/3 border -translate-y-1/2 bg-gradient-to-r from-blue-400/30 to-red-600/30 blur-[120px] "></div>
      <div className="animate-slowPulseTwo absolute top-3/4  right-0 w-1/3 h-2/3 border -translate-y-1/2 bg-gradient-to-r from-pink-400/30 to-indigo-700/30 blur-[120px] "></div>
      <div className=" animate-slowBounce  absolute  -bottom-48 left-1/3  -translate-x-1/2 w-1/4 h-1/3  bg-gradient-to-r  from-white/25 to-blue-500/25  blur-[120px]"></div>
    </>
  );
};

export default SecondScreenGradientBg;
