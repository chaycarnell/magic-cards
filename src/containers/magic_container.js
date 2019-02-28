// Libraries
import React, { Component } from 'react'
import styled from 'styled-components'
// Components
import CardTable from '../components/card_table'
import Button from '../components/button'
// State functions
import { sortCards, drawCard, shuffleCardDeck, createCardDeck } from './state_functions'
// Cards
import cardPack from '../data/cards'

const Container = styled.div`
  padding-bottom: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const ButtonContainer = styled.div`
  position: fixed;
  bottom: 10px;
  left: 0px;
  margin-bottom: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
`
const Heading = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const DescriptiveText = styled.div`
  font-size: 1.3rem;
  text-align: center;
  width: 100%;
  margin: 5px;
`
export default class MagicCards extends Component {
  constructor(props) {
    super(props)
    // Set the initial state
    this.state = {
      cardSuits: cardPack.Suits,
      cards: cardPack.Cards,
      cardDeck: [],
      drawnCards: []
    }
  }

  sortDrawnCards() {
    this.setState(sortCards(this.state.drawnCards, this.state.cardSuits))
  }

  drawCard() {
    this.setState(drawCard(this.state.cardDeck, this.state.drawnCards))
  }

  shuffleCardDeck() {
    this.setState(shuffleCardDeck(this.state.cardDeck))
  }

  createCardDeck() {
    this.setState(createCardDeck(this.state.cardSuits, this.state.cards))
  }

  render() {
    // Define some variables to assist conditionl rendering
    const deckedCards = this.state.cardDeck.length > 0
    const drawnCards = this.state.drawnCards.length > 0
    const showCards = deckedCards || drawnCards
    return (
      <Container>
        <Heading>Chays Magic Cards</Heading>
        {showCards ? (
          <CardTable drawnCards={this.state.drawnCards} />
        ) : (
          <DescriptiveText>Card tricks with no cards? Create a deck!</DescriptiveText>
        )}
        {deckedCards ? <DescriptiveText>{this.state.cardDeck.length} cards left</DescriptiveText> : null}
        <ButtonContainer>
          {deckedCards ? <Button action={() => this.drawCard()} text="Draw Card" /> : null}
          {showCards ? <Button action={() => this.sortDrawnCards()} text="Sort Cards" /> : null}
          {deckedCards ? <Button action={() => this.shuffleCardDeck()} text="Shuffle Deck" /> : null}
          <Button action={() => this.createCardDeck()} text="New Deck" />
        </ButtonContainer>
      </Container>
    )
  }
}
