import React from 'react'

type ButtonToggleClassResourcesProps = {
  label: string,
  type: string;
  currentResourceOnScreen: any,
  handleChangeResource: (currentResource: string) => void
}

const ButtonToggleClassResources = ({ label, type, currentResourceOnScreen, handleChangeResource }: ButtonToggleClassResourcesProps) => {

  return (
    <div onClick={() => handleChangeResource(type)} className="relative">
      <button className={`pb-2 ${currentResourceOnScreen.type === type ? ' text-text-color after:absolute after:left-0 after:bottom-0 after:bg-primary after:h-0.5 after:w-full' : 'button'}`}>
        {label}
      </button>
    </div>
  )
}

export default ButtonToggleClassResources