import React, { FC } from "react";
import Wave from "react-wavify";
type Props = {
  durationProgress: number;
};
const WaveProgress: FC<Props> = ({ durationProgress }) => {
  return (
    <Wave
      fill="rgb(244 114 182 / 0.1)"
      paused={false}
      style={{ height: `${durationProgress}%` }}
      className="-z-10 absolute bottom-0 flex justify-start h-[80%] left-0 w-full"
      options={{
        height: 0.5,
        amplitude: 10,
        speed: 0.2,
        points: 4,
      }}
    />
  );
};

export default WaveProgress;
