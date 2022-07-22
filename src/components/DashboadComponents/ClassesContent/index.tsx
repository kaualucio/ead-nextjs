import React from 'react'
import ClasseLabel from '../ClasseLabel'
import { Classes } from '../ToggleClasses'

type ClassesContentProps = {
  topicClasses: Classes[],
  topicId: number,
  showTopic: number | null,
}

const ClassesContent = ({ topicClasses, topicId, showTopic }: ClassesContentProps) => {
  return (
    <div 
      className={`${showTopic === topicId ? 'block' : 'hidden'} transition-all duration-200 px-5  pt-3 pb-5  bg-secondary100 grid gap-5 rounded-b-lg`}>
      {
        topicClasses.map((classSingle) => (
          <ClasseLabel 
            key={classSingle.id} 
            classId={classSingle.id} 
            title={classSingle.title} 
            topicId={topicId}  
          />
        ))
      }
    </div>
  )
}

export default ClassesContent