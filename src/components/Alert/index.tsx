import React, { useEffect } from 'react'
import {BsCheckCircleFill} from 'react-icons/bs'
import {AiFillWarning, AiFillInfoCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'

type AlertProps = {
  type: string,
  message: string,
  show: boolean,
  toggleAlert: (show: boolean) => void 
}

const Alert = ({ type, message, show, toggleAlert }: AlertProps) => {
  let typeAlert;
  switch (type) {
    case 'success':
      typeAlert = {
        bg: 'bg-success',
        icon: <BsCheckCircleFill />
      }
      break;
    case 'error':
        typeAlert = {
          bg: 'bg-error',
          icon: <AiFillWarning />
        }
        break;
    case 'warning':
      typeAlert = {
        bg: 'bg-warning',
        icon: <RiErrorWarningFill />
      }
      break;
    default:
      typeAlert = {
        bg: 'bg-info',
        icon: <AiFillInfoCircle />
      }
      break;
  }

  useEffect(() => {
    setTimeout(() => {
      toggleAlert(show)
    }, 3000)
  }, [show, toggleAlert])

  return (
    <div className={` ${show ? 'opacity-100' : 'opacity-0'} absolute right-10 top-10  transition-all duration-200 w-80 px-3 py-5 flex items-start gap-3 rounded-md text-md text-white bg-${type}`}>
      <div className="text-md">
        {typeAlert.icon}
      </div>
      <div>
        {
          message
        }
      </div>
    </div>
  )
}

export {Alert}