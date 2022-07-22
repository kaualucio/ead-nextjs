import Image from 'next/image'
import React from 'react'
import { HiOutlineFolderDownload } from 'react-icons/hi'
import { BiMoviePlay, BiTrophy } from 'react-icons/bi'

import IconLabel from '../IconLabel'
import Link from 'next/link'

const AboutTraining = ({ training }: any) => {
  return (
    <div className="flex h-full">
    <div className="w-full lg:w-1/2 items-start">
      <div className="h-full flex flex-col justify-between">
        <div className="h-full">
          <div className="flex gap-2">
            <div className="w-24 h-24 rounded-lg bg-secondary80 shadow-md flex items-center justify-center">
              <Image 
                src={training.thumbnail}
                alt={training.title}
                width={80}
                height={80}
                objectFit="cover"
                style={{ borderRadius: 9999 }}
              />
            </div>
            <h2 className="font-bold text-text-color text-2xl">{training.title}</h2>
          </div>
          <div className="mt-5">
            <p className="text-secondary50 text-sm">{training.description}</p>
          </div>
          <div className="mt-5 grid grid-cols-3 gap-2">
            <IconLabel label={`${training.totalTime} horas de aulas gravadas`} icon={BiMoviePlay} />
            <IconLabel label={`${training.totalTime} recursos para download`} icon={HiOutlineFolderDownload} />
            {
              training.certified && <IconLabel label="Certificado de conclusão" icon={BiTrophy} />
            }
          </div>
        </div>
        <div>
          <h2 className="text-secondary50 font-bold text-sm mb-2">0% completo</h2>
          <div className="w-full h-2 rounded-full bg-secondary40"></div>
        </div>
      </div>
      
    </div>
    <div className="hidden lg:block w-1/2 px-5">
      <div className="h-full flex flex-col justify-between">
        <div>
          <h2 className="text-center text-text-color text-xl font-bold mb-5">O que irei aprender?</h2>
          <div className="w-full p-3 rounded-lg ">
            <ul className=" list-inside flex flex-col gap-5">
              
              {
                training.topicsCovered.map((item: any) => (
                  <li key={item.id} className="list-custom-bullet text-white font-bold">
                    {item.label}
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
        <div className="justify-self-end self-end">
          <Link href={`/training/${training.id}`}>
            <a className="inline-block w-40 text-center font-bold text-text-color bg-primary py-4 rounded-lg transition duration-200 hover:bg-primary-dark">Assistir</a>
          </Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export {AboutTraining}