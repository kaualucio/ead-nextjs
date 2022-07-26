import React, { useState } from 'react'
import Link from 'next/link'
import {IoMdNotifications} from 'react-icons/io'
import {MdHelpCenter} from 'react-icons/md'

import Dropdown from '../Dropdown'
import { Frame } from '../../Frame'
import { useAuth } from '../../../context/AuthContext'


const HeaderDashboard = () => {
  const [showDropdown, setShowDropdown] = useState(false)
  const { user } = useAuth()
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
                urlImage={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png'}
                size="small"
                alt={'dwde'}
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