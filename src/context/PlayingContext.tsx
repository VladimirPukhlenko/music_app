"use client";

import React, { useState, createContext, useContext, useRef } from "react";

type Props = {
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  playerRef: React.RefObject<HTMLAudioElement>;
};
export const IsPlayingContext = createContext<Props>({} as Props);

const IsPlayingProvider = ({ children }: { children: React.ReactNode }) => {
  const playerRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <IsPlayingContext.Provider value={{ isPlaying, setIsPlaying, playerRef }}>
      {children}
    </IsPlayingContext.Provider>
  );
};

export default IsPlayingProvider;

export const useIsPlaying = () => {
  return useContext(IsPlayingContext);
};
