import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { getAllTrainings } from "../lib/trainings/get-all";
import { api } from "../services/api";
import { LastTrainingSeen, myData } from "../utils/myData";
import { topics } from "../utils/topics";
import { trainingsAvailable } from "../utils/trainings";
import { useAuth } from "./AuthContext";

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
  id: string,
  name: string,
  urlImage:string,
  about: string,
}

type Resources = {
  links?: Links[],
  downloads?: Downloads[]
}

export type Classes = {
  id: string,
  trainingId: string,
  topicId: string,
  title: string,
  slug: string,
  urlVideo: string,
  description: string,
  watched: boolean,
  resources: Resources
}

export type Topics = {
  id: string,
  trainingId: number,
  educatorId: number,
  title: string,
  slug: string,
  description: string,
  totalVideos: number,
  totalTime: number,
  resources: {
    downloads: number,
    links: number,
  },
  classes: Classes[]
}

export type Training = {
  id: string,
  title: string,
  slug: string,
  thumbnail: string,
  description: string,
  totalTime: number,
  totalResources: number,
  certified: boolean,
  educator: Educator[];
}

type Context = {
  showTopic: string | null;
  urlVideo: string,
  currentTopicInfo: Topics | null;
  currentVideoOnScreen: Classes | null;
  handleShowTopics: (topicId: string) => void;
  handleCurrentVideo: (currentClass: Classes) => void;
  handleChangeVideo: (topicData: any) => void;
  markVideoAsCompleted: (videoId: string) => void;
}

const TrainingsContext = createContext({} as Context)

function TrainingsContextProvider({ children }: TrainingsContextProviderProps) {
  const { user } = useAuth()
  const [urlVideo, setUrlVideo] = useState('')
  const [topicsCovered, setTopicsCovered] = useState<Topics[] | null>(null)
  const [showTopic, setShowTopic] = useState<string | null>(null)
  const [currentVideoOnScreen, setCurrentVideoOnScreen] = useState<Classes | null>(null)
  const [currentTopicInfo, setCurrentTopicInfo] = useState<Topics | null>(null)
  
  function handleShowTopics(topicId: string) {
    setShowTopic(topicId)
    const topicInfo = topicsCovered?.find(topic => topic.id === topicId)

    setCurrentTopicInfo(!topicInfo ? null : topicInfo)
  }

  function handleCurrentVideo(currentClass: Classes) {
    setCurrentVideoOnScreen(currentClass)
  }

  async function handleChangeVideo(nextClass: Classes) {
    handleCurrentVideo(nextClass)
    setUrlVideo(nextClass.urlVideo)
  }

  async function markVideoAsCompleted(videoId: string) {
    await api.post(`/class/update/${videoId}`)
  }
  return (
    <TrainingsContext.Provider value={{
      showTopic,
      urlVideo,
      currentTopicInfo,
      currentVideoOnScreen,
      handleShowTopics,
      handleCurrentVideo,
      handleChangeVideo,
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