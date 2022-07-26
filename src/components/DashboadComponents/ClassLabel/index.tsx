import React from 'react'
import { Classes, Topics, useTraining } from '../../../context/TrainingsContext'

type ClasseLabelProps = {
  data: Classes
  topic: Topics,
}

const ClassLabel = ({ data, topic}: ClasseLabelProps) => {
  const { currentVideoOnScreen, handleChangeVideo } = useTraining()
  let borderBulletDetail = ''
  let bulletDetail = ''
  let textTitle = ''
  if(currentVideoOnScreen && currentVideoOnScreen.id === data.id) {
    textTitle = 'text-text-color'
    if(data.watched) {
      borderBulletDetail = 'border-primary'
      bulletDetail = 'bg-primary'
    }else {
      borderBulletDetail = 'border-primary'
      bulletDetail = 'bg-white'
    }
  }else if(currentVideoOnScreen && currentVideoOnScreen.id !== data.id) {
    textTitle = 'text-secondary40'
    if(data.watched) {
      borderBulletDetail = 'border-primary'
      bulletDetail = 'bg-primary'
    }else {
      borderBulletDetail = 'border-secondary60'
      bulletDetail = 'bg-secondary60'
    }
  }

  return (
    <button onClick={() => handleChangeVideo(data)} className="flex items-center gap-3 ">
      <div className={`p-5 rounded-full border-2 ${borderBulletDetail}  p-1`}>
        <div className={`w-2 h-2 rounded-full ${bulletDetail} `} />
      </div>
      <p className={`text-sm hover:text-text-color ${textTitle}`}>{data.title}</p>
    </button>
  )
}

export default ClassLabel