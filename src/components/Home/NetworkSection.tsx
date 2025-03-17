import React from "react";
import { Nunito_Sans } from "next/font/google";
import Link from "next/link";

const nunito = Nunito_Sans({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

const NetworkSection: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 text-gray-300 border-b border-slate-600 py-6 px-4 backdrop-blur-lg w-3/4 lg:w-1/2 mx-auto">
      <h2 className={`font-mono text-lg self-start text-gray-Light`}>
        Network
      </h2>

      {/* Network cards */}
      <div className="flex flex-col gap-4">
        {/* Email Card */}
        <Link href="mailto:kushagrarai83@gmail.com">
          <div className="flex flex-col border p-4 border-slate-600 cursor-pointer rounded-lg hover:bg-gray-700 transition duration-200">
            <h3 className={`${nunito.className} text-lg font-semibold text-gray-Light`}>
              Send an Email
            </h3>
            <p className="text-sm">I will get back to you asap</p>
          </div>
        </Link>

        {/* LinkedIn and GitHub cards */}
        <div className="flex flex-row gap-4">
          {/* LinkedIn Card */}
          <Link className="w-1/2" target="_blank" href="https://linkedin.com/in/kushagra-raii">
            <div className="flex-1 flex flex-col border p-4 border-slate-600 cursor-pointer rounded-lg hover:bg-gray-700 transition duration-200">
              <h3 className={`${nunito.className} text-lg font-semibold text-gray-Light`}>
                LinkedIn
              </h3>
              <p className="text-sm">Lets Connect on linkedIn</p>
            </div>
          </Link>

          {/* GitHub Card */}
          <Link className="w-1/2" target="_blank" href="https://github.com/kushagra-raii">
            <div className="flex-1 flex flex-col border p-4 border-slate-600 cursor-pointer rounded-lg hover:bg-gray-700 transition duration-200">
              <h3 className={`${nunito.className} text-lg font-semibold text-gray-Light`}>
                GitHub
              </h3>
              <p className="text-sm">Checkout my github Profile</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NetworkSection;

