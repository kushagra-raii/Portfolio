"use client";

import React, { useState } from "react";
import { navData } from "../../../public/data/navData";
import Image from "next/image";
import heroImage from "@/../public/assets/HeroImage.png";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  
  return (
    <nav
      className={`border-[0.2px] border-slate-800 fixed text-nowrap max-w-screen text-sm bottom-5 left-1/2 transform -translate-x-1/2 backdrop-blur-lg bg-black bg-opacity-30 rounded-lg px-1 py-1 flex justify-center gap-x-5 items-center `}
    >
      {navData.map((nav, index) => (
        <div key={index} className="flex items-center">
          <Link
            href={nav.path}
            className="text-white p-2  hover:text-pale-yellow"
          >
            {nav.title}
          </Link>
          <div className="w-[1px] bg-gray-Charcoal h-5 ml-1 -mr-3 "></div>
        </div>
      ))}
      <div className="mr-1">
      <Button text="Contact me" primary />
      </div>
    </nav>
  );
};

export default Navbar;
