// Libs
import React from 'react'

// Card component, renders passed card object
const CardTable = ({ card }) => {
  return (
    <div className="card-container">
      <div className="card-title">{card.title}</div>
      <div className="graphic-container">
        <div className={'card-graphic ' + card.suit} />
      </div>
    </div>
  )
}

export default CardTable
