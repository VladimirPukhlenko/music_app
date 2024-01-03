"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";

import { useIsPlaying } from "@/context/PlayingContext";
import { useActiveStation } from "@/context/ActiveStation";
import { formatTime } from "@/utils/getFormattedDuration";
import { stationsList } from "@/assets/stationsData";
import PlayerAnimation from "./PlayerAnimation";
import WaveProgress from "./WaveProgress";
import PlayerControls from "./PlayerControls";
import PlayerTimeline from "./PlayerTimeline";

const Player = () => {
  const { setIsPlaying, playerRef } = useIsPlaying();
  const [durationProgress, setDurationProgress] = useState(0);
  const { activeStation, setActiveStation, activeLink, setActiveLink } =
    useActiveStation();
  const [timeLeft, setTimeLeft] = useState(formatTime(NaN));

  const handleTimeUpdate = () => {
    if (playerRef.current) {
      const currentTime = playerRef.current.currentTime;
      const duration = playerRef.current.duration;

      setDurationProgress((currentTime / duration) * 100);
      const formattedTime = formatTime(duration - currentTime);
      setTimeLeft(formattedTime);
    }
  };

  const handleEnd = () => {
    playerRef.current?.pause();
    setIsPlaying(false);
    const currentActiveLink = activeStation.links.findIndex(
      (link) => link === activeLink
    );

    if (currentActiveLink < activeStation.links.length - 1) {
      if (playerRef.current) {
        setActiveLink(activeStation.links[currentActiveLink + 1]);
      }
    } else {
      const currentStationIndex = stationsList.findIndex(
        (item) => activeStation.id === item.id
      );
      if (currentStationIndex === stationsList.length - 1) {
        setActiveStation(stationsList[0]);
        setActiveLink(stationsList[0].links[0]);
      } else {
        setActiveStation(stationsList[currentStationIndex + 1]);
        setActiveLink(stationsList[currentStationIndex + 1].links[0]);
      }
    }
    setTimeout(() => {
      playerRef.current?.play();
    }, 0);
    setIsPlaying(true);
  };

  return (
    <div className="justify-center items-center flex h-full flex-1 ">
      <motion.div
        initial={{ x: 20, y: 20, opacity: 0 }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="relative"
      >
        <div className="relative overflow-hidden z-10 border-2 border-white/30 backdrop-blur-2xl rounded-xl w-[13rem] h-[25rem]  sm:w-[18rem] sm:h-[32rem] flex justify-center items-start py-10 martixTransform">
          <PlayerAnimation />

          <WaveProgress durationProgress={durationProgress} />

          <audio
            ref={playerRef}
            onEnded={handleEnd}
            onTimeUpdate={handleTimeUpdate}
            src={activeLink}
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className=" z-0 border-2 border-white/30 rounded-xl  w-[13rem] h-[8rem] sm:w-[18rem] sm:h-[10rem] martixTransform  absolute -top-7 -left-2"
        ></motion.div>

        <div className=" text-base md:text-xl font-bold z-20 border-2 border-white/30 rounded-xl  w-[10rem] sm:w-[12rem] h-[3rem] sm:h-[5rem] martixTransform  absolute top-[40%] -left-1/3 backdrop-blur-md   flex items-center justify-center gap-1">
          <div className=" text-xl md:text-3xl">{activeStation?.emoji}</div>
          <div>{activeStation.name}</div>
        </div>
        <PlayerControls />
        <PlayerTimeline timeLeft={timeLeft} />
      </motion.div>
    </div>
  );
};

export default Player;
