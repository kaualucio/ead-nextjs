import Link from 'next/link'
import React from 'react'
import MobileNavbar from '../MobileNavbar'
import Navbar from '../Navbar'

const Header = () => {
  return (
    <div className="z-50 fixed top-0 left-0 w-full bg-secondary100 h-24 border-b border-b-highlight mb-10">
      <div className="container mx-auto px-3 md:px-5 h-full flex items-center justify-between ">
        <div>
          <Link href="/">
            <a className="text-4xl font-bold text-white">Logo</a>
          </Link>
        </div>
        <Navbar />
        <MobileNavbar />
      </div>
    </div>
  )
}

export default Header