import React from "react";
import { stationsList } from "../assets/stationsData";
import StationItem from "./StationItem";
import SecondScreenGradientBg from "./SecondScreenGradientBg";

const StationList = () => {
  return (
    <div className=" relative w-full  h-full flex flex-col gap-14  justify-center items-center flex-1 p-24 ">
      <h2 className=" text-center text-5xl text-transparent py-2 bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-extrabold">
        Change Stations
      </h2>
      <SecondScreenGradientBg />

      <div className="flex items-center justify-center gap-4 flex-wrap  md:w-3/4">
        {stationsList.map((station) => (
          <StationItem {...station} key={station.id} />
        ))}
      </div>
    </div>
  );
};

export default StationList;
