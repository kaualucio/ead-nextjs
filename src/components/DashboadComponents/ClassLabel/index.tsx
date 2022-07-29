import React, { useEffect, useState } from 'react'
import { useAuth } from '../../../context/AuthContext'
import { Classes, Topics, useTraining } from '../../../context/TrainingsContext'

type ClasseLabelProps = {
  data: Classes
}

const ClassLabel = ({ data}: ClasseLabelProps) => {
  const { user } = useAuth()
  const { currentVideoOnScreen, handleChangeVideo } = useTraining()
  let borderBulletDetail =''
  let bulletDetail = ''
  let textTitle = ''
    if(currentVideoOnScreen.id === data.id) {
      textTitle = 'text-text-color'
      bulletDetail = 'bg-white'
      borderBulletDetail = 'border-primary'
    }else {
      textTitle = 'text-secondary40'
      if(data.VideoWatched.length > 0 && data.VideoWatched[0].userId === user.id) {
        bulletDetail = 'bg-primary'
        borderBulletDetail = 'border-primary'
      }else {
        bulletDetail = 'bg-secondary60'
        borderBulletDetail = 'border-secondary60'
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
