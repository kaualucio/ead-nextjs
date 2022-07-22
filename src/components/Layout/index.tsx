import { useRouter } from 'next/router'
import React, { ReactNode } from 'react'
import {HeaderDashboard} from '../DashboadComponents/Header'
import { Footer } from '../Footer'
import Header from '../Header'

type LayoutProps = { 
  children: ReactNode
}

export const Layout = ({children}: LayoutProps) => {

  return (
    <div id="home" className=" bg-secondary100 ">
      <Header />
      <main className="mt-24">
        {children}
      </main>
      <Footer />
    </div>
  )
}
