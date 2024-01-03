import React from "react";

const Footer = () => {
  return (
    <div className="relative flex flex-col gap-2 text-center py-6 font-medium text-white/70">
      © 2023 MelodyMerge
      <div className="text-xs">
        Player issues? Probably Firebase limit. Try later. Sorry.
      </div>
    </div>
  );
};

export default Footer;
