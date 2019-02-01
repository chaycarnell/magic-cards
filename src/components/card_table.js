// Libs
import React from 'react'
// Components
import Card from './card'

// CardTable component, contains cards drawn
const CardTable = ({ drawnCards }) => {
  // Make sure a card is picked before rendering the table!
  if (!drawnCards.length) {
    return <div className="desc-text">Pick a card, any card!</div>
  }
  // Return the CardTable with drawn cards
  return (
    <div className="card-table">
      <h2 className="title">Card Table</h2>
      {drawnCards.map(card => (
        <Card key={card.title + card.suit} card={card} />
      ))}
    </div>
  )
}

export default CardTable
