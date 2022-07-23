import React from 'react'
import { Classes, Topics, useTraining } from '../../../context/TrainingsContext'

type ClasseLabelProps = {
  data: Classes
  topic: Topics,
}

const ClassLabel = ({ data, topic}: ClasseLabelProps) => {
  const { currentVideoOnScreen, handleNextVideo, trainings } = useTraining()
  console.log(currentVideoOnScreen.watched)
  return (
    <button onClick={() => handleNextVideo({
      classSlug: data.slug,
      topicSlug: topic.slug,
      trainingSlug: trainings?.find(training => training.id === topic.idTraining)?.id
    })} className="flex items-center gap-3 ">
      <div className={`p-5 rounded-full border-2  ${currentVideoOnScreen?.id === data.id ? 'border-primary' : 'border-secondary60'} p-1`}>
        <div className={`w-2 h-2 rounded-full ${data.watched && 'bg-primary'}  ${currentVideoOnScreen?.id === data.id ? 'bg-white' : 'bg-secondary60'}`} />
      </div>
      <p className={`text-sm hover:text-text-color ${currentVideoOnScreen?.id === data.id ? 'text-text-color' : 'text-secondary40'}`}>{data.title}</p>
    </button>
  )
}

export default ClassLabel