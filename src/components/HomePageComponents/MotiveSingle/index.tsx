import React from 'react'
import { BsCheckLg } from 'react-icons/bs'

type MotiveSingleProps = {
  title: string,
  legend: string
}

const MotiveSingle = ({ title, legend }: MotiveSingleProps) => {
  return (
    <div className="p-5 border border-secondary40 rounded-lg ">
      <BsCheckLg fontSize={30} className="text-primary"/>
      <h2 className="text-text-color text-2xl font-bold my-5">{title}</h2>
      <p className="text-highlight">{legend}</p>
    </div>
  )
}

export default MotiveSingle