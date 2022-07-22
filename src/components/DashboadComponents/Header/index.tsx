import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {IoMdNotifications} from 'react-icons/io'
import {MdHelpCenter} from 'react-icons/md'

import Dropdown from '../Dropdown'
import { Frame } from '../../Frame'


const HeaderDashboard = () => {
  const [showDropdown, setShowDropdown] = useState(false)

  return (
    <div className="w-full bg-secondary90 h-20 ">
      <div className="container mx-auto px-3 md:px-5 h-full flex items-center justify-between ">
        <div>
          <Link href="/">
            <a className="text-4xl font-bold text-white">Logo</a>
          </Link>
        </div>

        <div className="flex items-center gap-3">
            <Link  href="/support">
              <a title="Central de Ajuda" className="cursor-pointer p-2 rounded-md hover:bg-secondary100 hover:text-primary text-primary-dark text-2xl">
                <MdHelpCenter />
              </a>
            </Link>
          <button className="p-2 rounded-md hover:bg-secondary100 hover:text-primary text-primary-dark text-2xl">
            <IoMdNotifications/>
          </button>
          <div className="relative">
            <button
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
              onClick={() => setShowDropdown(!showDropdown)}  
            >
              <Frame 
                urlImage="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                size="small"
                alt="Foto de perfil"
              />
            </button>
              <Dropdown showDropdown={showDropdown} />
          </div>
        </div>
      </div>
    </div>
  )
}

export {HeaderDashboard}