import Link from 'next/link'
import React from 'react'
import { IconType } from 'react-icons'

type LinkIconProps = {
  icon: IconType,
  url: string
}

export const LinkIcon = ({ icon: Icon, url }: LinkIconProps) => {
  return (
    <Link href={url}>
      <a className="w-8 h-8 rounded-md border-2 border-primary text-primary flex items-center justify-center transition duration-200 hover:text-white hover:bg-primary">
        <Icon fontSize={20} />
      </a>
    </Link>
  )
}

