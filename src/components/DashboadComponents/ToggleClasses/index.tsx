import React from 'react'

import { MdVideoLibrary } from 'react-icons/md'
import { BsChevronDown } from 'react-icons/bs'
import ClassesContent from '../ClassesContent'

export type Classes = {
  id: number,
  title: string
}

export type Topic = {
  id: number,
  idTraining: number,
  title: string,
  description: string,
  totalVideos: number,
  totalTime: number,
  resources: {
    downloads: number,
    links: number
  },
  educator: {
    id: number,
    name: string,
    urlImage: string,
    about: string
  }
  classes: Classes[]
}

type ToggleClassesProps = {
  handleShowTopics: (idTopic: number | null) => void;
  topic: Omit<Topic, 'educator' | 'resources' | 'description'>; 
  showTopic: number | null
}

const ToggleClasses = ({ handleShowTopics, showTopic, topic }: ToggleClassesProps) => {
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
    <ClassesContent 
      topicId={topic.id} 
      topicClasses={topic.classes} 
      showTopic={showTopic} />
    </div>
  )
}

export default ToggleClasses