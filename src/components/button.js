// Libs
import React from 'react'

// Card component, renders passed card object
const Button = ({ action, text }) => {
  return (
    <button type="button" className="big-button" onClick={() => action()}>
      {text}
    </button>
  )
}

export default Button
