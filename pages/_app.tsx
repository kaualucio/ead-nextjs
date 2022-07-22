import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

import '../styles/globals.css'
import { Layout } from '../src/components/Layout'
import { AuthContextProvider } from '../src/context/AuthContext'
import { TrainingsContextProvider } from '../src/context/TrainingsContext'

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <AuthContextProvider>
      <TrainingsContextProvider>
        {
          getLayout(<Component {...pageProps} />)
        }
      </TrainingsContextProvider>
    </AuthContextProvider>
  )
}

export default MyApp
