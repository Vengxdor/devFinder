import React, { useState } from 'react'
import {
  faSun,
  faMoon
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Mode () {
  const [light, setLight] = useState(false)
  const handleBack = () => {
    document.documentElement.classList.toggle('dark')
    setLight(!light)
  }
  return (
      <div className='flex gap-2 justify-center items-center'>
            <span className='uppercase font-medium'>{light === false ? 'light' : 'dark'}</span>
            <button onClick={handleBack}>
              {light === false
                ? (
                <FontAwesomeIcon className='text-2xl' icon={faSun} />
                  )
                : (
                <FontAwesomeIcon
                  className='text-2xl'
                  icon={faMoon}
                />
                  )}
            </button>
          </div>
  )
}
