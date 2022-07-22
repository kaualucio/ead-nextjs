import Link from 'next/link'
import React from 'react'
import { IoMdPerson } from 'react-icons/io'

const Navbar = () => {
  return (
    <nav className="hidden h-full lg:flex items-center gap-10 text-md font-bold text-text-color">
      <div className="relative h-full">
        <Link href="/">
          <a className="links-menu">Home</a>
        </Link>
      </div>
      <div className="relative h-full">
        <Link href="#trainings">
          <a className="links-menu">Nossos Cursos</a>
        </Link>
      </div>
      <div className="relative h-full">
        <Link href="/blog">
          <a className="links-menu">Blog</a>
        </Link>
      </div>
      <div className="relative h-full">
        <Link href="/about">
          <a className="links-menu">Sobre</a>
        </Link>
      </div>

      <Link href="/login">
        <a className="inline-block px-3 py-2 border-2 flex items-center gap-2 text-md border-primary rounded-lg text-center text-primary transition duration-200 hover:bg-primary hover:text-white">
          <IoMdPerson fontSize={20} /> 
          Login
        </a>
      </Link>
    </nav>
  )
}

export default Navbar