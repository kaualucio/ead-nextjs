import React from 'react'

type ClasseLabelProps = {
  title: string,
  classId: number | null
  topicId: number,
}

const ClasseLabel = ({ title, classId}: ClasseLabelProps) => {
  return (
    <button className="flex items-center gap-3">
      <div className={`p-5 rounded-full border-2 border-secondary60  p-1`}>
        <div className={`w-2 h-2 rounded-full bg-secondary60`} />
      </div>
      <p className="text-secondary40 text-sm">{title}</p>
    </button>
  )
}

export default ClasseLabel