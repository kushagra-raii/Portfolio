import React from "react";
import { Nunito_Sans } from "next/font/google";

const nunito = Nunito_Sans({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});



const SkillCard: React.FC<{ name: string; img: string }> = ({ name, img }) => {
  return (
    <div className="flex items-center gap-2 border p-2  border-slate-600 rounded-lg bg-gray-700 transition duration-200">
      <img src={img} alt={name} className="rounded-sm" width={24} height={24}/>
      <span className={`${nunito.className} text-lg font-semibold text-gray-Light`}>{name}</span>
    </div>
  );
};

export default SkillCard;