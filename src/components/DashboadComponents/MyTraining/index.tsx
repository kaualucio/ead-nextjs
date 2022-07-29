import React from 'react'
import { useAuth } from '../../../context/AuthContext'
import { Frame } from '../../Frame'

export type Training = {
  id: string,
  title: string,
  thumbnail: string,
}

type MyTrainingProps = {
  data: Training,
  handleSelectTraining: (idTraining: string) => void
}

const MyTraining = ({ data, handleSelectTraining}: MyTrainingProps) => {
  const { user } = useAuth()
  return (
    <button onClick={() => handleSelectTraining(data.id)} className="flex flex-row md:flex-col items-center gap-5 md:gap-3">
      <Frame
        urlImage={data.thumbnail}
        alt="Capa do curso de front-end"
      />
      <div className="text-center">
        <h2 className="font-bold text-text-color text-md mb-2">{data.title}</h2>
        <p className=" text-text-color text-sm">{user?.hasTrainingAccess}</p>
      </div>
    </button>
  )
}

export default MyTraining