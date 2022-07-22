import Link from 'next/link'
import React, { useState } from 'react'
import { BiMenuAltRight , BiChevronDown, BiChevronUp} from 'react-icons/bi'
import { IoMdClose, IoMdPerson,  } from 'react-icons/io'

const MobileNavbar = () => {
  const [toggleNavbarMobile, setToggleNavbarMobile] = useState(false)
  return (
    <nav className="lg:hidden md:block">
      <button className="text-3xl text-primary" onClick={() => setToggleNavbarMobile(!toggleNavbarMobile)}>
        { toggleNavbarMobile ?
          <IoMdClose /> :
          <BiMenuAltRight />
        }
      </button>
        <div className={`${toggleNavbarMobile ? 'grid' : 'hidden'} gap-5 text-text-color sm:text-lg md:text-xl font-bold bg-secondary80  border-t border-t-gray absolute top-full left-0  w-full p-5`}>
          <div className="bg-secondary70 transition-all duration-200  rounded-md hover:text-white  hover:bg-primary ">
            <Link href="/">
              <a className="block p-3 md:p-5">Home</a>
            </Link>
          </div>
          <div className="bg-secondary60  transition-all duration-200  rounded-md hover:text-white  hover:bg-primary ">
            <Link href="/">
              <a className="block p-3 md:p-5 ">Nossos cursos</a>
            </Link>
            
          </div>
          <div className="bg-secondary60 transition-all duration-200  rounded-md hover:text-white  hover:bg-primary  ">
            <Link href="/">
              <a className="block p-3 md:p-5">Blog</a>
            </Link>
          </div>
          <div className="bg-secondary60 transition-all duration-200  rounded-md hover:text-white  hover:bg-primary ">
            <Link href="/">
              <a className="block p-3 md:p-5">Sobre</a>
            </Link>
          </div>

          <div className="border-primary border-2 rounded-lg text-center text-primary transition duration-200 hover:bg-primary hover:text-white">
            <Link href="/login">
              <a className="flex items-center gap-2 p-3 md:p-5">
                <IoMdPerson fontSize={20} /> 
                Login
              </a>
            </Link>
          </div>
        </div>
    </nav>
  )
}

export default MobileNavbar