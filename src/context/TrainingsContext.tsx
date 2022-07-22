import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { trainingsAvailable } from "../utils/trainings";


type TrainingsContextProviderProps = {
  children: ReactNode
}

type TopicCovered = {
  id: number,
  label: string
}

type Training = {
  id: number,
  title: string,
  thumbnail: string,
  description: string,
  totalTime: number,
  totalResources: number,
  certified: boolean,
  topicsCovered: TopicCovered[]
}

type Context = {
  trainings: Training[] | null
}

const TrainingsContext = createContext({} as Context)

function TrainingsContextProvider({ children }: TrainingsContextProviderProps) {
  const [trainings, setTrainings] = useState<Training[] | null>(null)

  useEffect(() => {
    setTrainings(trainingsAvailable)
  }, [])

  return (
    <TrainingsContext.Provider value={{
      trainings
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