import React from 'react'
import Link from 'next/link'
import { IconType } from 'react-icons'

type LinkProps = {
  label: string, 
  url: string, 
  icon?: IconType,
  cta?: boolean,
  outlined?: boolean
}

export const LinkButton = ({ label, url, icon: Icon, cta = false, outlined = false }: LinkProps) => {
  return (
    <Link href={url}>
      <a className={`flex items-center justify-center gap-2 w-60 text-white text-center px-4 py-5 rounded-lg font-bold transition duration-200 ${cta ? 'bg-primary hover:bg-primary-dark ' : 'bg-secondary50 text-white'} `}>
        {label}
        {
          Icon && <Icon fontSize={20} />  
        }
      </a>
    </Link>
  )
}
