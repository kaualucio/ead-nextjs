import React from 'react'
import { IconBaseProps } from 'react-icons'

type IconLabelProps = {
  label: string,
  icon: React.ElementType<IconBaseProps>
}

const IconLabel = ({ label, icon: Icon }: IconLabelProps) => {
  return (
    <div className="flex items-center text-primary gap-2">
      <p>
        <Icon fontSize={20} />
      </p>
      <p className="text-[12px] text-text-color">{label}</p>
    </div>
  )
}

export {IconLabel}