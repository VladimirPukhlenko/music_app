import { useIsPlaying } from "@/context/PlayingContext";
import React, { FC, useEffect } from "react";
import { FaPause, FaPlay } from "react-icons/fa6";

const PlayerControls: FC = () => {
  const defaultVolume = 0.2;
  const { isPlaying, setIsPlaying, playerRef } = useIsPlaying();
  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.volume = defaultVolume;
    }
  }, []);
  const playToggle = () => {
    setIsPlaying((prev) => !prev);
    if (playerRef.current?.paused) {
      playerRef.current.play();
    } else {
      playerRef.current?.pause();
    }
  };
  return (
    <div className="z-20 border-2 border-white/30 rounded-xl w-[10rem] h-[3rem] sm:w-[13rem] sm:h-[5rem] martixTransform absolute top-[55%] -right-1/4 backdrop-blur-md flex items-center justify-center gap-4">
      <button className="cursor-pointer text-xl" onClick={playToggle}>
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
      <input
        type="range"
        min="0"
        max="1"
        step="0.1"
        defaultValue={defaultVolume}
        className="accent-pink-500 cursor-pointer w-2/4 sm:w-auto"
        onChange={(e) => {
          if (playerRef.current) {
            playerRef.current.volume = +e.target.value;
          }
        }}
      />
    </div>
  );
};

export default PlayerControls;
