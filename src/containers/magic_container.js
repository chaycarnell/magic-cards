// Libraries
import React, { Component } from "react";
// Components
import CardTable from "../components/card_table";
import Button from "../components/button";
// State functions
import {
  sortCards,
  drawCard,
  shuffleCardDeck,
  createCardDeck
} from "./state_functions";
// Cards
import cardPack from "../data/cards";

export default class MagicCards extends Component {
  constructor(props) {
    super(props);
    // Set the initial state
    this.state = {
      cardSuits: cardPack.Suits,
      cards: cardPack.Cards,
      cardDeck: [],
      drawnCards: []
    };
  }

  sortDrawnCards() {
    this.setState(sortCards(this.state.drawnCards, this.state.cardSuits));
  }

  drawCard() {
    this.setState(drawCard(this.state.cardDeck, this.state.drawnCards));
  }

  shuffleCardDeck() {
    this.setState(shuffleCardDeck(this.state.cardDeck));
  }

  createCardDeck() {
    this.setState(createCardDeck(this.state.cardSuits, this.state.cards));
  }

  render() {
    // Define some variables to assist conditionl rendering
    const deckedCards = this.state.cardDeck.length > 0;
    const drawnCards = this.state.drawnCards.length > 0;
    const showCards = deckedCards || drawnCards;
    return (
      <div className="container">
        <h1 className="title">Chays Magic Cards</h1>
        {showCards ? (
          <CardTable drawnCards={this.state.drawnCards} />
        ) : (
          <div className="desc-text">
            Card tricks with no cards? Create a deck!
          </div>
        )}
        {deckedCards ? (
          <div className="desc-text">
            {this.state.cardDeck.length} cards left
          </div>
        ) : null}
        <div className="button-container">
          {deckedCards ? (
            <Button action={() => this.drawCard()} text="Draw Card" />
          ) : null}
          {showCards ? (
            <Button action={() => this.sortDrawnCards()} text="Sort Cards" />
          ) : null}
          {deckedCards ? (
            <Button action={() => this.shuffleCardDeck()} text="Shuffle Deck" />
          ) : null}
          <Button action={() => this.createCardDeck()} text="New Deck" />
        </div>
      </div>
    );
  }
}
