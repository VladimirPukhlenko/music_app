"use client";

import React, { useEffect, useRef } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";

import animation from "../../public/animation/playerAnim.json";
import { useIsPlaying } from "@/context/PlayingContext";

const PlayerAnimation = () => {
  const { isPlaying, playerRef } = useIsPlaying();
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  useEffect(() => {
    lottieRef.current?.setSpeed(2);
    setTimeout(() => {
      if (playerRef.current?.paused) {
        lottieRef.current?.pause();
      } else {
        lottieRef.current?.play();
      }
    }, 0);
  }, [isPlaying]);
  return <Lottie lottieRef={lottieRef} animationData={animation} />;
};

export default PlayerAnimation;
