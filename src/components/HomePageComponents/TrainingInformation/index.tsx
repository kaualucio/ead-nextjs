import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineCaretRight } from 'react-icons/ai'

import { training } from '../../../utils/training'
import { LinkButton } from '../LinkButton'
import { Quote } from '../Quote'

type TrainingInformationProps = {
  active: string
}

const TrainingInformation = ({ active }: TrainingInformationProps) => {
  const currentTraining = training.find((training) => training.id === active)

  return (
    <div className="w-full px-5 bg-secondary90 py-7 rounded-lg grid grid-cols-1 lg:grid-cols-3 gap-5">
    <div className="relative mb-7 lg:mb-0">
      <h2 className="text-white font-bold text-2xl mb-4">{currentTraining?.title}</h2>
      <p className="text-highlight">{currentTraining?.description}</p>
      <div className="mt-7 lg:absolute left-0 bottom-0">
       <LinkButton url="/register" cta={true} label="Quero fazer parte" icon={AiOutlineCaretRight} />
      </div>
    </div>
    <div className="flex flex-col gap-10">
      {
        currentTraining?.quotes.map((quote) => (
          <Quote key={quote.id} quote={quote} />
        ))
      }
    </div>
    <div className="hidden lg:block">
      <Image 
        src={currentTraining?.urlImagePlaceholder}
        alt="Placeholder"
        width={400}
        height={400}
        objectFit="cover"
      />
    </div>
  </div>
  )
}

export {TrainingInformation}