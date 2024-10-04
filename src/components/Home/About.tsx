import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'

const About = () => {
  return (
    <div className="flex flex-col gap-2 text-gray-300 r-6 px-3 py-4 backdrop-blur-lg bg-black bg-opacity-30 w-3/4 lg:w-1/2 shadow-md shadow-black/50 mx-auto">
    <p className="text-gray-Light mx-2">
      <strong className='font-medium'>Hi! I’m Kushagra Rai</strong>
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
  </div>
  )
}

export default About    