import Image from 'next/image'
import React from 'react'

export const Quote = ({ quote }: any) => {
  return (
    <blockquote key={quote.id}>
      <cite className="flex items-center gap-2 mb-1">
        <div className="w-16 h-16 p-0.5 rounded-full border-4 border-primary">
          <Image 
            src={quote.urlImage}
            alt={quote.name}
            width={64}
            height={64}
            objectFit="cover"
            style={{borderRadius: "9999px"}}
          />
        </div>
        <div>
          <h3 className="text-text-color font-bold mb-1">{quote.name}</h3>
          <p className="text-sm text-highlight">@{quote.socialMedia}</p>
        </div>
      </cite>
      <p className="italic text-text-color">
        <span className="relative top-3 mr-1 text-4xl font-bold text-primary-dark">&ldquo;</span>
        {quote.quote}
      </p>
    </blockquote>
  )
}

