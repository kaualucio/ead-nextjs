import Link from 'next/link'
import React from 'react'
import { BsFillTriangleFill, BsFillPersonFill, BsFillGearFill } from 'react-icons/bs'
import { RiLogoutCircleLine } from 'react-icons/ri'
import { useAuth } from '../../../context/AuthContext'
type DropdownProps = {
  showDropdown: boolean
}

const Dropdown = ({ showDropdown }: DropdownProps) => {
  
  const { handleLoggout } = useAuth()

  return (
    <div 
      aria-labelledby="dropdownMenuButton"
      className={`${showDropdown ? 'block' : 'hidden'} z-50 w-56 transition-all duration-200 top-20 absolute right-0 py-4 px-3 bg-secondary90 rounded-md`}>
      <span className="text-sm absolute text-secondary90 right-5 top-[-10px]">
        <BsFillTriangleFill />
      </span>
      <nav className="flex flex-col gap-5">
          <Link href="/#">
            <a className="flex items-center gap-5 font-bold text-primary-dark hover:text-primary ">
              <BsFillPersonFill fontSize={20} />
              <p className="text-text-color text-md">Meu perfil</p>
            </a>
          </Link>          
          <Link href="/#">
            <a className="flex items-center gap-5 font-bold text-primary-dark hover:text-primary ">
              <BsFillGearFill fontSize={20} />
              <p className="text-text-color text-md">Configurações</p>
            </a>
          </Link>          

            <button type="button" onClick={handleLoggout} className="flex items-center gap-5 font-bold text-primary-dark hover:text-primary ">
              <RiLogoutCircleLine fontSize={20} />
              <p className="text-text-color text-md">Sair</p>
            </button>

          <Link href="/#">
            <a className="mt-2 text-center bg-primary transition duration-200 hover:bg-primary-dark text-text-color font-bold rounded-lg px-3 py-4">
              Tenho uma sugestão
            </a>
          </Link>      
      </nav>
    </div>
  )
}

export default Dropdown