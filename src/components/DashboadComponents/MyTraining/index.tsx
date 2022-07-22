import React from 'react'
import { Frame } from '../../Frame'

export type Training = {
  id: number,
  title: string,
  thumbnail: string,
}

type MyTrainingProps = {
  data: Training,
  plan: string ,
  handleSelectTraining: (idTraining: number) => void
}

const MyTraining = ({ data, handleSelectTraining, plan}: MyTrainingProps) => {
  return (
    <button onClick={() => handleSelectTraining(data.id)} className="flex flex-row md:flex-col items-center gap-5 md:gap-3">
      <Frame
        urlImage={data.thumbnail}
        alt="Capa do curso de front-end"
      />
      <div className="text-center">
        <h2 className="font-bold text-text-color text-md mb-2">{data.title}</h2>
        <p className=" text-text-color text-sm">{plan}</p>
      </div>
    </button>
  )
}

export default MyTraining