import React from 'react'

import { MdVideoLibrary } from 'react-icons/md'
import { BsChevronDown } from 'react-icons/bs'
import { Topics, useTraining } from '../../../context/TrainingsContext'
import ClassLabel from '../ClassLabel'


type ToggleClassesProps = {
  topic: Topics; 
}

const ToggleClasses = ({ topic }: ToggleClassesProps) => {
  const {showTopic, handleShowTopics} = useTraining()
  
  return (
    <div className="rounded-lg bg-secondary100">
      <button
        onClick={() => handleShowTopics(topic.id)} 
        className="w-full px-5 py-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="text-primary">
            <MdVideoLibrary fontSize={30} />
          </div>
          <div className="grid gap-1">
            <h3 className="text-text-color text-lg font-bold">{topic.title}</h3>
            <div className="flex items-center justify-start font-bold text-secondary50 text-xs">
              {topic.totalVideos} aulas | {topic.totalTime}:00 min
            </div>
          </div>
        </div>
        <div className="text-primary">
          <BsChevronDown fontSize={20} />
        </div>
      </button>
      <div 
        className={`${showTopic === topic.id ? 'block' : 'hidden'} transition-all duration-200 px-5  pt-3 pb-5  bg-secondary100 grid gap-5 rounded-b-lg`}>
        {
          topic.classes.map((classSingle) => (
            <ClassLabel 
              key={classSingle.id} 
              data={classSingle}
              topic={topic}  
            />
          ))
        }
      </div>
    </div>
  )
}

export default ToggleClasses