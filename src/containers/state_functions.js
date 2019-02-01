/**
 * Function to sort cards passed by order of suit that is passed and then by cards rank
 * @param {Array} cards
 * @param {Array} order
 * @returns {Object}
 */
export function sortCards(cards, order) {
  // Avoid a direct state mutation, create new array
  const drawnCards = [...cards]
  // map for efficient lookup of sortIndex
  let ordering = {}
  // Assign the desired sorting order of Suit
  for (let i = 0; i < order.length; i++) {
    ordering[order[i]] = i
  }
  // Create an array of sorted cards
  drawnCards.sort((a, b) => {
    return ordering[a.suit] - ordering[b.suit] || a.rank - b.rank
  })
  return { drawnCards }
}

/**
 * Take a card from the deckCards array and place into the drawnCards array, removing from the initial
 * @param {Array} deckedCards
 * @param {Array} drawnCards
 * @returns {Object}
 */
export function drawCard(deckedCards, drawnCards) {
  // Avoid a direct state mutation, create new array
  const cardDeck = [...deckedCards]
  // Grab a card from the top of the cardDeck array
  const card = cardDeck[0]
  // Update the state of cardDeck, filtering out the index of the card drawn
  // Use a spread to merge the drawnCards state and the card drawn
  return {
    cardDeck: cardDeck.filter((_, i) => i !== 0),
    drawnCards: [...drawnCards, ...[card]]
  }
}

/**
 * Take an array of cards and randomly swap two cards a defined number of times randomly to create a shuffle
 * @param {Array} deckedCards
 * @returns {Object}
 */
export function shuffleCardDeck(deckedCards) {
  // Avoid a direct state mutation, create new array
  const cardDeck = [...deckedCards]
  // switch the values of two random cards 200 times
  for (let i = 0; i < 200; i++) {
    // Select two cards from the cardDeck array at random
    let firstCard = Math.floor(Math.random() * cardDeck.length)
    let secondCard = Math.floor(Math.random() * cardDeck.length)
    // Hold the first card value temporarily
    let firstCardValue = cardDeck[firstCard]
    // Swap the cards by switching the values at each cards index in the cardDeck array
    cardDeck[firstCard] = cardDeck[secondCard]
    // Use the firstCardValue as the original index value has been swapped already
    cardDeck[secondCard] = firstCardValue
  }
  // Update state
  return { cardDeck }
}

/**
 * Create a new deck of cards, taking in a cards suit array, and an array of possible card values
 * @param {Array} cardSuits
 * @param {Array} cards
 * @returns {Object}
 */
export function createCardDeck(cardSuits, cards) {
  // Create an initial array to hold the card deck
  const cardDeck = []
  cardSuits.forEach(suit => {
    cards.forEach(card => {
      cardDeck.push({ title: card.title, rank: card.rank, suit })
    })
  })
  // Return new deck, clear any previously drawn cards
  return { cardDeck, drawnCards: [] }
}
