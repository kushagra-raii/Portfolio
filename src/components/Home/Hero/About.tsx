"use client";
import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { Nunito_Sans } from "next/font/google";

const nunito = Nunito_Sans({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

// Hardcoded working hours for each timezone
const workingHours: { [key: string]: { zone: string; hours: string } } = {
  "Kolkata, India": { zone: "IST", hours: "07:30 PM - 02:30 AM" },
  "New York, USA": { zone: "EST", hours: "10:00 AM - 05:00 PM" },
  "London, UK": { zone: "GMT", hours: "03:00 PM - 10:00 PM" },
  "Berlin, Germany": { zone: "CET", hours: "04:00 PM - 11:00 PM" },
  "San Francisco, USA": { zone: "PST", hours: "07:00 AM - 02:00 PM" },
  "Sydney, Australia": { zone: "AEST", hours: "01:00 AM - 08:00 AM" },
  "Singapore": { zone: "SGT", hours: "10:00 PM - 05:00 AM" },
};

const About: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<string>("Kolkata, India");

  const { zone, hours } = workingHours[selectedCity];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedCity(value);
  };

  return (
    <div className="flex flex-col gap-2 border-b border-slate-600 text-gray-300 px-3 py-4 backdrop-blur-lg w-3/4 lg:w-1/2 mx-auto">
      <p className="text-gray-Light mx-2 font-medium">
        <strong className={nunito.className}>Hi! I’m Kushagra Rai</strong>
      </p>
      <p className="mx-2">
        As a Software Engineer, I’m specialized in building{" "}
        <strong className="text-gray-Light font-medium">
          high-performance, scalable web applications
        </strong>
        .
      </p>
      <div className="flex gap-1 mx-2 items-center">
        <FaLocationDot />
        <p>
          Based in <em className="text-gray-Light">Indore, India</em>.{" "}
        </p>
      </div>
      <p className="mx-2">Languages I Speak: English and Hindi</p>

      {/* Working Hours with Timezone Selector */}
      <div className="mx-2 flex flex-col md:flex-row gap-1 items-baseline">
  <label htmlFor="timezone" className="block mb-1">
    <strong className="font-normal">Working Hours:</strong>
  </label>
  <p className="mt-2 md:mt-0 md:mr-2">
    {hours}
  </p>
  <select
    id="timezone"
    value={selectedCity}
    onChange={handleChange}
    className="border border-slate-600 ml-2 bg-gray-Charcoal text-gray-Light p-1 text-sm rounded"
  >
    {Object.keys(workingHours).map((city) => (
      <option key={city} value={city}>
        {city} ({workingHours[city].zone})
      </option>
    ))}
  </select>
</div>

    </div>
  );
};

export default About;
