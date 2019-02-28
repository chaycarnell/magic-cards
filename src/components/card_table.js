// Libs
import React from 'react'
import styled from 'styled-components'
// Components
import Card from './card'

const Table = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 2px #444 solid;
  border-radius: 10px;
  margin: 10px;
  max-width: 650px;
  background-color: #f2f2f2;
`
const DescriptiveText = styled.div`
  font-size: 1.3rem;
  text-align: center;
  width: 100%;
  margin: 5px;
`
const Title = styled.h2`
  text-align: center;
  width: 100%;
`

// CardTable component, contains cards drawn
const CardTable = ({ drawnCards }) => {
  // Make sure a card is picked before rendering the table!
  if (!drawnCards.length) {
    return <DescriptiveText>Pick a card, any card!</DescriptiveText>
  }
  // Return the CardTable with drawn cards
  return (
    <Table>
      <Title>Card Table</Title>
      {drawnCards.map(card => (
        <Card key={card.title + card.suit} card={card} />
      ))}
    </Table>
  )
}

export default CardTable
