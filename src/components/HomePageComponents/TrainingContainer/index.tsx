import React, { Dispatch, SetStateAction } from 'react'
import { TrainingInformation } from '../TrainingInformation'

type TrainingContainerProps = {
  id: string,
  title: string,
  index: number,
  active: string,
  setActiveTrainingInformation: Dispatch<SetStateAction<string>>
}

const TrainingContainer = ({ id, title, index, active, setActiveTrainingInformation}: TrainingContainerProps) => {


  return (
    <>
      <div className={` text-center mb-5 rounded-lg ${active == id ? "transition duration-200 bg-secondary90 border-b-4 border-b-primary" : "bg-secondary70 border-b-4 border-b-secondary40"}`}>
        <button onClick={() => setActiveTrainingInformation(id)} className={`w-full h-full p-3 text-xl font-bold ${active !== id ? "text-highlight" : "text-white"}`}>{title}</button>  
      </div> 
    </>
  )
}

export {TrainingContainer}