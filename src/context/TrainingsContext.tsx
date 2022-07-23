import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { LastTrainingSeen, myData } from "../utils/myData";
import { topics } from "../utils/topics";
import { trainingsAvailable } from "../utils/trainings";

type TrainingsContextProviderProps = {
  children: ReactNode
}

export type Links = {
    title: string,
    link: string
}

export type Downloads = {
    title: string,
    link: string
}

export type Educator = {
  id: number,
  name: string,
  urlImage:string,
  about: string,
}

type Resources = {
  links?: Links[],
  downloads?: Downloads[]
}

export type Classes = {
  id: number,
  idTraining: number,
  title: string,
  slug: string,
  urlVideo: string,
  description: string,
  watched: boolean,
  resources: Resources
}

export type Topics = {
  id: number,
  idTraining: number,
  educatorId: number,
  title: string,
  slug: string,
  description: string,
  totalVideos: number
  totalTime: number
  resources: {
    downloads: number
    links: number
  },
  classes: Classes[]
}

type Training = {
  id: number,
  title: string,
  slug: string,
  thumbnail: string,
  description: string,
  totalTime: number,
  totalResources: number,
  certified: boolean,
  educator: Educator[]
}

type Context = {
  lastTrainingSeen: null | LastTrainingSeen
  trainings: Training[] | null;
  currentTopicInfo: Topics | null;
  showTopic: number | null,
  currentVideoOnScreen: Classes | null
  handleShowTopics: (idTopic: number) => void,
  handleCurrentVideo: (currentClass: Classes) => void,
  handleNextVideo: (topicData: any) => void
  markVideoAsCompleted: (videoId: number) => void
}

const TrainingsContext = createContext({} as Context)

function TrainingsContextProvider({ children }: TrainingsContextProviderProps) {
  const [lastTrainingSeen, setLastTrainingSeen] = useState<any>(myData.lastTrainingSeen)
  const [trainings, setTrainings] = useState<Training[] | null>(null)
  const [topicsCovered, setTopicsCovered] = useState<Topics[] | null>(null)
  const [showTopic, setShowTopic] = useState<number | null>(null)
  const [currentVideoOnScreen, setCurrentVideoOnScreen] = useState<Classes | null>(null)
  const [currentTopicInfo, setCurrentTopicInfo] = useState<Topics | null>(null)
  
  useEffect(() => {
    setTrainings(trainingsAvailable)
    setTopicsCovered(topics)
  }, [])

  function handleShowTopics(idTopic: number) {
    setShowTopic(idTopic)
    const topicInfo = topicsCovered?.find(topic => topic.id === idTopic)

    setCurrentTopicInfo(!topicInfo ? null : topicInfo)
  }

  function handleCurrentVideo(currentClass: Classes) {
    setCurrentVideoOnScreen(currentClass)
  }

  function handleNextVideo(topicData: any) {
    setLastTrainingSeen({
      classSlug: topicData.classSlug,
      topicSlug: topicData.topicSlug,
      trainingSlug: topicData.trainingSlug,
    })
  }

  function markVideoAsCompleted(videoId: number) {
    
  }
  return (
    <TrainingsContext.Provider value={{
      lastTrainingSeen,
      trainings,
      currentTopicInfo,
      currentVideoOnScreen,
      showTopic,
      handleShowTopics,
      handleCurrentVideo,
      handleNextVideo,
      markVideoAsCompleted
    }}>
      {children}
    </TrainingsContext.Provider>
  )
}

function useTraining() {
  const context = useContext(TrainingsContext)

  return context
}

export { TrainingsContextProvider, useTraining }