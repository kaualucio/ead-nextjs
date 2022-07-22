import { useRouter } from 'next/router'
import React, { ReactNode } from 'react'
import { HeaderDashboard } from '../DashboadComponents/Header'

type LayoutProps = { 
  children: ReactNode
}

export const LayoutDashboard = ({children}: LayoutProps) => {  

  return (
    <div className="bg-secondary100">
      <HeaderDashboard />
      <main className="">
        {children}
      </main>
    </div>
  )
}
