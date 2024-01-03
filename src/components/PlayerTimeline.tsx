import { useActiveStation } from "@/context/ActiveStation";
import React, { FC } from "react";
type Props = {
  timeLeft: {
    hours: string;
    minutes: string;
    seconds: string;
  };
};
const PlayerTimeline: FC<Props> = ({ timeLeft }) => {
  const { activeStation, activeLink } = useActiveStation();
  const linksLeft =
    activeStation.links.length -
    activeStation.links.findIndex((link) => link === activeLink) -
    1;
  return (
    <div className="text-xs flex items-center justify-center sm:text-lg z-20 border border-white/30 rounded-xl w-[15rem]  h-[3rem] sm:w-[20rem] sm:h-[5rem] martixTransform  absolute top-3/4 -right-1/4 backdrop-blur-md">
      <div className=" relative w-full flex items-center justify-center gap-7">
        {Object.keys(timeLeft).map((key) => (
          <div className=" flex flex-col text-center" key={key}>
            <div> {timeLeft[key as keyof typeof timeLeft]}</div>
            <div>{key}</div>
          </div>
        ))}
        {!!linksLeft && (
          <div className="absolute -top-1 right-3 text-xs md:text-sm sm:font-bold ">
            +{linksLeft}
          </div>
        )}
      </div>
    </div>
  );
};

export default PlayerTimeline;
