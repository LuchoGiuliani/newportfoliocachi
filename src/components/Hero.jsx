import React, { useState, useEffect } from "react";
import SplitType from "split-type";
import { motion } from "framer-motion";

const Hero = () => {
  const text = new SplitType(".cursor-text");
  return (
    <>
      <div className="bg-black flex items-center justify-center h-screen z-40 hero-section">
        <h1
          className="text-white text-8xl cursor-text"
          style={{ position: "relative" }}
        >
          CARLA GIULIANI
        </h1>
      </div>
    </>
  );
};

export default Hero;
