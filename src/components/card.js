// Libs
import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px #ccc solid;
  background-color: #fff;
  border-radius: 5px;
  height: 100px;
  min-width: 70px;
  margin: 10px;
`

const CardTitle = styled.div`
  margin: 4px 0 0 8px;
  font-size: 1.3rem;
`

const GraphicBox = styled.div`
  height: inherit;
  width: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CardGraphic = styled.div`
  height: 40px;
  width: 40px;
  background: url(../style/assets/icons/${props => props.type}.png);
  background-repeat: no-repeat;
  background-size: 40px 40px;
`

// Card component, renders passed card object
const CardTable = ({ card }) => {
  return (
    <Card>
      <CardTitle>{card.title}</CardTitle>
      <GraphicBox>
        <CardGraphic type={card.suit} />
      </GraphicBox>
    </Card>
  )
}

export default CardTable
