"use client";

import React, { useState } from "react";
import { navData } from "../../../public/data/navData";
import Image from "next/image";
import heroImage from "@/../public/assets/HeroImage.png";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className=" w-full h-[4.5rem] flex items-center">
      <div className="mx-auto w-10/12 flex items-center justify-between">
        
        <div className="text-white text-xl">Kushagra Rai</div>
        <nav className=" hidden gap-10 md:flex py-4 px-16 rounded-full">
          {navData.map((nav, index) => {
            return (
              <Link
                href={nav.path}
                className=" text-gray-Light hover:text-pale-yellow "
                key={index}
              >
                {nav.title}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;
