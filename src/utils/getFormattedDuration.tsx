export const formatTime = (sec: number) => {
  if (isNaN(sec) || sec < 0) {
    return {
      hours: "--",
      minutes: "--",
      seconds: "--",
    };
  }

  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  const s = Math.floor(sec % 60);

  const hours = String(h).padStart(2, "0");
  const minutes = String(m).padStart(2, "0");
  const seconds = String(s).padStart(2, "0");

  return {
    hours,
    minutes,
    seconds,
  };
};
