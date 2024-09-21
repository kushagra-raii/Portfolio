"use client";

import React, { useState } from "react";
import { navData } from "../../../public/data/navData";
import Image from "next/image";
import heroImage from "@/../public/assets/HeroImage.png";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav
      className={`fixed text-nowrap bottom-5 left-1/2 transform -translate-x-1/2 backdrop-blur-lg bg-gray-Charcoal bg-opacity-5 rounded-md px-1 py-1 flex justify-center gap-x-5 items-center ${
        // Responsive width adjustment (optional)
        isOpen
          ? "max-w-full" // Full width for mobile menu
          : "max-w-md" // Custom width for desktop nav
      }`}
    >
      {navData.map((nav, index) => (
        <Link
          href={nav.path}
          className="text-white opacity-100 hover:text-pale-yellow"
          key={index}
        >
          {nav.title}
        </Link>
      ))}
      <Button text="Download Resume" primary/>
    </nav>
  );
};

export default Navbar;
