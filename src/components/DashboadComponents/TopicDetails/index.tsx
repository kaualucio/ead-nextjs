import React from 'react'
import { Topic } from '../ToggleClasses'

import { RiTimeLine } from 'react-icons/ri'
import { MdOutlineOndemandVideo } from 'react-icons/md'
import { Frame } from '../../Frame'
import Link from 'next/link'

type TopicDetailsProps = {
  data: Topic
}

const TopicDetails = ({ data }: TopicDetailsProps) => {
  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <h2 className="text-text-color text-xl font-bold mb-5">{data.title}</h2>
        <p className="text-sm text-secondary50">{data.description}</p>
        <div className="flex items-center gap-5 mt-3 mb-5">
          <div className="flex items-center gap-2 text-primary">
            <p>
              <MdOutlineOndemandVideo fontSize={20} />
            </p>
            <p className="text-text-color">{data.totalVideos} videos</p>
          </div>
          <div className="flex items-center gap-2 text-primary">
            <p>
              <RiTimeLine fontSize={20} />
            </p>
            <p className="text-text-color">{data.totalTime}:00 minutos</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Frame urlImage={data.educator.urlImage} size="small" alt={data.educator.name} />
          <div>
            <h3 className="font-bold text-text-color">{data.educator.name}</h3>
            <p  className="italic text-sm text-text-color">{data.educator.about}</p>
          </div>
        </div>
      </div>
     <div className="self-end">
      <Link href={`/training/${data.idTraining}`}>
        <a className="inline-block w-40 text-center font-bold text-text-color bg-primary py-4 rounded-lg transition duration-200 hover:bg-primary-dark">Assistir</a>
      </Link>
     </div>
    </div>
  )
}

export default TopicDetails