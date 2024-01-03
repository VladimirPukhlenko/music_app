"use client";

import React, { useState, createContext, useContext } from "react";
import { TStation, stationsList } from "@/assets/stationsData";

type Props = {
  activeStation: TStation;
  setActiveStation: React.Dispatch<React.SetStateAction<TStation>>;
  activeLink: string;
  setActiveLink: React.Dispatch<React.SetStateAction<string>>;
};

export const ActiveStation = createContext<Props>({} as Props);

const ActiveStationProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeStation, setActiveStation] = useState<TStation>(stationsList[0]);
  const [activeLink, setActiveLink] = useState(activeStation?.links[0]);

  return (
    <ActiveStation.Provider
      value={{ activeStation, setActiveStation, activeLink, setActiveLink }}
    >
      {children}
    </ActiveStation.Provider>
  );
};

export default ActiveStationProvider;

export const useActiveStation = (): Props => {
  return useContext(ActiveStation);
};
