"use client";
import React from "react";
import { motion } from "framer-motion";

const info = [
  {
    title: "10",
    subtitle: "Stations",
    delay: 0.8,
  },
  {
    title: "30h+",
    subtitle: "Of Song",
    delay: 1,
  },
  {
    title: "Ꝏ",
    subtitle: "Joy",
    delay: 1.2,
  },
];
const AppDescription = () => {
  return (
    <div className="flex flex-col gap-5 h-full justify-center flex-1  items-center lg:items-start">
      <div className="text-3xl sm:text-4xl md:text-6xl flex flex-col gap-1 font-extrabold ">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Study & Work,
        </motion.h2>
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          and More with
        </motion.h2>
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="gradient-codetune"
        >
          <span className="text-transparent py-2 bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-black">
            MelodyMerge
          </span>
        </motion.h1>
      </div>

      <motion.div
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className=" flex flex-wrap w-[95%] text-center  md:text-lg md:text-start"
      >
        MelodyMerge lets you listen to music while you study, work, or do other
        tasks, boosting your focus, productivity, and creativity. Carefully
        curated tracks ensure an immersive experience without disrupting your
        workflow.
      </motion.div>

      <div className="flex gap-8 items-baseline text-xl font-bold   ">
        {info.map(({ title, subtitle, delay }, i) => (
          <motion.div
            key={subtitle}
            className="text-center"
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
          >
            <h1>{title}</h1>
            <h2 className="">{subtitle}</h2>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AppDescription;
