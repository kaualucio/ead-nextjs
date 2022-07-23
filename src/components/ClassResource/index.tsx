import Link from 'next/link'
import React from 'react'
import { Downloads, Links } from '../../context/TrainingsContext'

type ClassResourceProps = {
  data: {
    type: string,
    resource: string | Downloads[] | Links[] | undefined
  }
}

const ClassResource = ({ data }: ClassResourceProps) => {
  return (
    <div>
      {
        typeof data.resource === 'string' 
        ? <p className="text-text-color">{data?.resource}</p> 
        : data.resource?.length === 0 
          ? <h3 className="text-lg text-secondary50"> Essa aula não possui {data.type}</h3>
          : (
            <>
              {
                data.resource?.map((item: any) => (
                  <div className="mb-2" key={item.title}>
                    <Link href={item.link}>
                      <a className="text-text-color text-md hover:text-primary">{item.title}</a>
                    </Link>
                  </div>
                ))
              }
            </>
          )
        }
    </div>
  )
}


export default ClassResource