"use client";
import React from "react";

import { useIsPlaying } from "@/context/PlayingContext";

const FistScreenGradientBg = () => {
  const { isPlaying } = useIsPlaying();
  return (
    <div
      className={`w-2/3 h-1/2 blur-[120px] ${
        isPlaying && "animate-mainPulse"
      } bg-gradient-to-r 
     from-pink-500/50 to-purple-700/50  absolute top-1/2 left-1/2 -translate-y-1/2
      rounded-full  -translate-x-1/3`}
    ></div>
  );
};

export default FistScreenGradientBg;
