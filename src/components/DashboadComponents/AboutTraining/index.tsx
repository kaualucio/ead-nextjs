import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { HiOutlineFolderDownload } from 'react-icons/hi'
import { BiMoviePlay, BiTrophy } from 'react-icons/bi'

import IconLabel from '../IconLabel'
import { myData } from '../../../utils/myData'
import { useRouter } from 'next/router'
import { topics } from '../../../utils/topics'
import Link from 'next/link'
import { Frame } from '../../Frame'
import { api } from '../../../services/api'

const AboutTraining = ({ training }: any) => {
  const [educator, setEducator] = useState<any[]>(null)
  useEffect(() => {
    api.get(`/educator/training/${training.id}`).then(({data}) => {
      setEducator(data)
    })
  }, [training])

  return (
    <div className="flex flex-col gap-7 lg:gap-0 lg:flex-row h-full">
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
          <div className="mt-10 lg:mt-0">
            <h2 className="text-secondary50 font-bold text-sm mb-2">0% completo</h2>
            <div className="w-full h-2 rounded-full bg-secondary40"></div>
          </div>
        </div>
        
      </div>
      <div className="w-full lg:w-1/2 px-5">
        <div className="h-full flex flex-col justify-between">
          <div>
            <h2 className="text-text-color text-xl font-bold mb-5">Professores</h2>
            <div className="w-full p-3 rounded-lg ">  
                {
                  educator?.map((item: any) => (
                    <div key={item?.id} className="flex items-center gap-2">
                      <Frame urlImage={item?.urlImage || ''} size="small" alt={item?.name ?? 'Foto do educador do curso'} />
                      <div>
                        <h3 className="font-bold text-text-color">{item?.name}</h3>
                        <p  className="italic text-sm text-text-color">{item?.about}</p>
                      </div>
                    </div>
                  ))
                }
            </div>
          </div>
          <div >
            <Link href={`/training/${training.slug}`}>
              <a className="inline-block mt-5 lg:mt-0 w-full  text-center font-bold text-text-color bg-primary py-4 rounded-lg transition duration-200 hover:bg-primary-dark">Assistir</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export {AboutTraining}