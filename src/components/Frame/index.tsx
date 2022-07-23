import Image from 'next/image'
import React from 'react'

type FrameProps = {
  urlImage: string,
  alt: string,
  size?: 'large' | 'medium' | 'small' 
}

type Dimensions = {
  frame: {
    width: string,
    height: string
  },
  image: {
    width: number,
    height: number
  }
}

const Frame = ({ urlImage, alt, size = 'medium' }: FrameProps) => {
  let dimensions: Dimensions
  switch (size) {
    case 'small':
      dimensions = {
        frame: {
          width: 'w-14',
          height: 'h-14'
        },
        image: {
          width: 60,
          height: 60
        }
      }
      break;
  
    default:
      dimensions = {
        frame: {
          width: 'w-24',
          height: 'h-24'
        },
        image: {
          width: 100,
          height: 100
        }
      }
      break;
  }

  return (
    <div className={` ${dimensions.frame.width} ${dimensions.frame.height} p-1 rounded-full border-4 border-primary`}>
      <Image 
        src={urlImage}
        alt={alt}
        width={dimensions.image.width}
        height={dimensions.image.height}
        objectFit="cover"
        style={{ borderRadius: 9999 }}
      />
    </div>
    
  )
}

export {Frame}