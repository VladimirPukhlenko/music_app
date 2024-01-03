"use client";
import React, { FC } from "react";

import { TStation } from "@/assets/stationsData";
import { useActiveStation } from "@/context/ActiveStation";
import { useIsPlaying } from "@/context/PlayingContext";

const StationItem: FC<TStation> = ({ emoji, name, id, links }) => {
  const { setIsPlaying, playerRef } = useIsPlaying();
  const { activeStation, setActiveStation, setActiveLink } = useActiveStation();
  const isActive = id === activeStation.id;

  const handleClick = () => {
    const random = Math.floor(Math.random() * links.length);
    if (playerRef.current) {
      setIsPlaying(false);
      setActiveStation({ emoji, name, id, links });
      setActiveLink(links[random]);
      setIsPlaying(true);
      setTimeout(() => {
        playerRef.current?.play();
      }, 0);
    }
  };
  return (
    <button
      onClick={handleClick}
      className={`text-3xl backdrop-blur-md bg-gradient-to-r flex gap-2 items-center px-12 py-4 rounded-xl 
      cursor-pointer border-2 
      hover:scale-[1.01]
      ${isActive ? "border-pink-500" : "border-white/30"}
      hover:border-pink-500
      transition-all duration-200
      `}
    >
      <p>{emoji}</p>
      {name}
    </button>
  );
};

export default StationItem;
