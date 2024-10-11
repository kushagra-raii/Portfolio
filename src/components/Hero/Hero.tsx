"use client";
import { Nunito_Sans } from "next/font/google";
import React, { useState } from "react";
import { aboutMeData } from "@/../public/data/aboutMe"; 
import "./hero.css";
import ForEveryone from "./TargetAudiencePropositions/ForEveryone"; 
import Developers from "./TargetAudiencePropositions/Developers";
import Founders from "./TargetAudiencePropositions/Founders";
import Recruiters from "./TargetAudiencePropositions/Recruiters";
import SDE from "./TargetAudiencePropositions/SDE";
const nunito = Nunito_Sans({ weight: ["300", "400","500", "700"], subsets: ["latin"] });


const HeroSection: React.FC = () => {
  const [selectedAudience, setSelectedAudience] = useState<string>("For Everyone");

  // Function to dynamically render the correct component based on the selected audience
  const renderAudienceComponent = () => {
    switch (selectedAudience) {
      case "For Everyone":
        return <ForEveryone />;
      case "Aspiring Developers":
        return <Developers />;
      case "Managers/Founders":
        return <Founders />;
      case "Recruiters":
        return <Recruiters />;
      case "Software Engineers":
        return <SDE />;
      default:
        return <ForEveryone />;
    }
  };

  return (
    <section className="flex flex-col backdrop-blur-lg border-b border-slate-600 items-center justify-center my-2 py-10  text-start w-3/4 lg:w-1/2 mx-auto px-4">
      <h2
        className={`font-mono text-lg self-start text-gray-Light`}
      >
        About
      </h2>
      {/* Audience Selection Nav */}
      <nav className="flex mb-6 text-nowrap self-center my-4 overflow-x-auto text-sm  w-full mx-auto scrollbar-hide ">
        {aboutMeData.map((audience) => (
          <button
            key={audience.audienceType}
            className={`px-2 py-1 underline rounded-md ${
              selectedAudience === audience.audienceType
                ? "text-gray-Light" // Selected state
                : "text-gray-400 hover:text-gray-Light" // Unselected with hover effect
            }  ${nunito.className}`}
            onClick={() => setSelectedAudience(audience.audienceType)}
          >
            {audience.audienceType}
          </button>
        ))}
      </nav>

      {/* Render the selected audience component */}
      {renderAudienceComponent()}
    </section>
  );
};

export default HeroSection;
