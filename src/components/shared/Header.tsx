import React from "react";
import Image from "next/image";
import profilePic from "@/../public/assets/HeroImage.png"; 

const Header: React.FC = () => {
  return (
    <header className=" fixed  w-full  bg-gray-Charcoal">
      {/* Profile Picture */}
      <div className="w-3/4 lg:w-1/2 mx-auto flex items-center justify-between pr-6 px-3 py-4">
      <div className="flex items-center gap-4">
        <Image
          src={profilePic}
          alt="Kushagra's Profile Picture"
          className="rounded-full"
          width={35}
          height={35}
        />
        <div className="text-gray-Light font-medium">Kushagra Rai</div>
      </div>

      {/* Open to Work Status */}
      <div className="flex items-center gap-2">
      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_3px_rgba(16,185,129,0.6)]"></div>
      <div className="text-gray-Light font-medium">Open to work</div>
      </div>
      </div>
    </header>
  );
};

export default Header;
