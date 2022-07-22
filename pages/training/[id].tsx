import React, { ReactElement, useEffect, useState } from 'react'
import { LayoutDashboard } from '../../src/components/LayoutDashboard'
import ReactPlayer from 'react-player'

const Training = () => {
  const [urlVideo, setUrlVideo] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setUrlVideo('https://www.youtube.com/watch?v=ysz5S6PUM-U')
      setIsLoading(false)
    }, 1000)
  }, [])

  if(isLoading) return <h1>Carregando</h1>

  return (
    <section className="mx-auto px-5 py-10 max-w-screen-lg">
      <div className="container mx-auto grid grid-cols-3 gap-5">
        <div className="col-span-2 h-[450px]">
          <ReactPlayer 
            url={urlVideo} 
            controls
            width="100%"
            height="100%"
          />
        </div>
        <div className="col-span-1 bg-secondary90 h-[450px] rounded-lg">

        </div>
      </div>
    </section>
  )
}

Training.getLayout = function getLeyout(page: ReactElement) {
  return ( 
    <LayoutDashboard>
      {page}
    </LayoutDashboard>
  )
}

export default Training