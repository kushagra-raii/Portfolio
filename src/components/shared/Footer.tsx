import React from "react";
import { Nunito_Sans } from "next/font/google";

const nunito = Nunito_Sans({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center justify-center pb-20 gap-2 py-4 px-4  text-gray-300">
      <p className={`${nunito.className} text-sm`}>
        Thanks for visiting my portfolio!
      </p>
      <p className="text-xs">
        &copy; {new Date().getFullYear()} Kushagra Rai. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
