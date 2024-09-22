"use client";

import React, { useState } from "react";
import { aboutMeData } from "@/../public/data/aboutMe"; 
import "./hero.css"

const HeroSection: React.FC = () => {
  const [selectedAudience, setSelectedAudience] = useState<string>("For Everyone");

  // Find the current intro based on the selected audience
  const currentIntro = aboutMeData.find(
    (audience) => audience.audienceType === selectedAudience
  )?.intro;

  return (
    <section className="flex flex-col backdrop-blur-lg bg-black bg-opacity-30  items-center justify-center my-2 py-10 shadow-md  shadow-black/50 text-start w-3/4 lg:w-1/2 mx-auto  px-4">
      {/* Audience Selection Nav */}
      <nav className="flex mb-6 text-nowrap self-center overflow-x-auto text-sm -mr-3 w-full mx-auto scrollbar-hide font-[cursive]">
        {aboutMeData.map((audience) => (
          <button
            key={audience.audienceType}
            className={`px-2 py-1 underline rounded-md ${
              selectedAudience === audience.audienceType
                ? " text-gray-Light" // Selected state
                : "text-gray-500  hover:text-gray-Light" // Unselected with hover effect
            }`}
            onClick={() => setSelectedAudience(audience.audienceType)}
          >
            {audience.audienceType}
          </button>
        ))}
      </nav>

      {/* Intro Text */}
      <p className="font-medium text-justify text-gray-Light mx-2">{currentIntro}</p>
    </section>
  );
};

export default HeroSection;
