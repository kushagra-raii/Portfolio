import React from "react";
import Image from "next/image";
import profilePic from "@/../public/assets/HeroImage.png";
import locationIcon from "@/../public/assets/icons/location.svg";
import { FaLocationDot } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <header className=" w-full pt-4 text-gray-Light font-medium">
      {/* Profile Picture */}
      <div className="w-3/4 lg:w-1/2 backdrop-blur-lg bg-black bg-opacity-30 shadow-md shadow-black/50 mx-auto">
        <div className="  border-b border-slate-600 flex items-center justify-between pr-6 px-3 py-2">
          <div>
            <Image
              src={profilePic}
              alt="Kushagra's Profile Picture"
              className="rounded-full"
              width={40}
              height={40}
            />
          </div>

          {/* Open to Work Status */}
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#00ffff] rounded-full animate-pulse shadow-[0_0_8px_3px_rgba(16,185,129,0.6)]"></div>
            <div className="text-gray-Light font-medium">Open to remote work</div>
          </div>
        </div>

        
      </div>
    </header>
  );
};

export default Header;
