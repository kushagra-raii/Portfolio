import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { navData } from '../../../public/data/navData'

const Footer = () => {
  return (
    <footer className='w-full py-2'>
        <div className='grid grid-cols-1 sm:grid-cols-2 text-gray-Light w-10/12 mx-auto gap-y-2'>
        <div className='flex justify-self-center sm:justify-self-start gap-x-5'>
            <Link href="https://www.linkedin.com/in/kushagra-raii/">
              <FaLinkedin className=' text-gray-Light text-3xl hover:text-pale-yellow'/>
            </Link>
            <Link href="https://www.github.com/kushagra-raii/">
              <FaGithub className=' text-gray-Light text-3xl hover:text-pale-yellow'/>
            </Link>

        </div>
        <div className=' justify-self-center sm:justify-self-end'>
        <nav className="   gap-x-10 gap-y-2 sm:flex grid grid-cols-2  rounded-full">
        {navData.map((nav, index) => {
          return (
            <Link href={nav.path} className=" text-gray-Light hover:text-pale-yellow " key={index}>
              {nav.title}
            </Link>
          );
        })}
         <Link href="">Admin</Link>
      </nav>
        </div>
        <div className='justify-self-center sm:justify-self-start'>
         
        </div>
        <div className='justify-self-center sm:justify-self-end hover:text-pale-yellow decoration-pale-yellow'>
        <Link href="mailto:kushagrarai83@gmail.com">kushagrarai83@gmail.com</Link>
        </div>
        </div>
    </footer>
  )
}

export default Footer