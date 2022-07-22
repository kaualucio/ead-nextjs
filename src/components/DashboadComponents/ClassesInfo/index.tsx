import React, { useState } from 'react'
import { topics } from '../../../utils/topics'
import ToggleClasses from '../ToggleClasses'


import { AboutTraining } from '../AboutTraining'
import TopicDetails from '../TopicDetails'

type ClassesInfoProps = {
  training: any
}

const ClassesInfo = ({ training }: ClassesInfoProps) => {
  const [showTopic, setShowTopic] = useState<number | null>(null)
  const [currentTopicInfo, setCurrentTopicInfo] = useState<any>(null)
  const classesTopics = topics.filter(topic => topic.idTraining === training.id)

  function handleShowTopics(idTopic: number | null) {
    idTopic === showTopic ? setShowTopic(null): setShowTopic(idTopic)
    const topicInfo = topics.find(topicSingle => topicSingle.id === idTopic)

    setCurrentTopicInfo(!topicInfo ? null : topicInfo)
  }

  return (
    <>
      <div className="flex flex-col col-span-1 p-1 gap-3 bg-secondary90 rounded-lg h-96 overflow-y-auto scrollbar">
        {
          classesTopics.map((topic) => (
              <ToggleClasses 
                key={topic.id} 
                showTopic={showTopic}  
                handleShowTopics={handleShowTopics} 
                topic={topic} 
              />
          ))
        }
      </div>
      <div className="col-span-1 lg:col-span-2 p-7 bg-secondary90 rounded-lg h-96">
        {
          !showTopic 
            ? <AboutTraining training={training} />
            : <TopicDetails data={currentTopicInfo} />
        }
        
      </div>
    </>
  )
}

export default ClassesInfo