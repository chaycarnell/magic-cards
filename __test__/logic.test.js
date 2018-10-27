import {
  sortCards,
  drawCard,
  shuffleCardDeck,
  createCardDeck
} from "../src/containers/state_functions";
import cardPack from "../src/data/cards";

test("Card sorting function sorts cards by house and rank correctly", () => {
  // Set some initial cards
  const initialCards = [
    { title: "K", rank: 10, suit: "Hearts" },
    { title: "2", rank: 0, suit: "Hearts" },
    { title: "J", rank: 9, suit: "Diamonds" }
  ];
  // Set the suit order
  const order = ["Clubs", "Spades", "Hearts", "Diamonds"];
  // Call the state function sortCards
  const outputCards = sortCards(initialCards, order);
  // Observe the expected output
  expect(outputCards.drawnCards).toEqual([
    { title: "2", rank: 0, suit: "Hearts" },
    { title: "K", rank: 10, suit: "Hearts" },
    { title: "J", rank: 9, suit: "Diamonds" }
  ]);
});

test("Cards are drawn from the deck, reducing the deck count and increasing the draw count", () => {
  // Set some initial decked cards
  const deckedCards = [
    { title: "K", rank: 10, suit: "Hearts" },
    { title: "2", rank: 0, suit: "Hearts" },
    { title: "J", rank: 9, suit: "Diamonds" }
  ];
  // Set the initial drawnCards
  const drawnCards = [];
  // Call the state function drawCard
  const outputObject = drawCard(deckedCards, drawnCards);
  // Observe the expected outputs
  expect(outputObject.cardDeck.length).toEqual(2);
  expect(outputObject.drawnCards.length).toEqual(1);
});

test("Cards are shuffled correctly", () => {
  // Set some initial decked cards
  const drawnCards = [
    { title: "2", rank: 0, suit: "Diamonds" },
    { title: "3", rank: 1, suit: "Diamonds" },
    { title: "4", rank: 2, suit: "Diamonds" },
    { title: "5", rank: 3, suit: "Diamonds" },
    { title: "6", rank: 4, suit: "Diamonds" }
  ];
  // Call the state function shuffleCardDeck
  const outputObject = shuffleCardDeck(drawnCards);
  // Observe the expected outputs
  // Don't really like this approach but ran out of time
  expect(outputObject.cardDeck).not.toEqual(drawnCards);
});

test("A 52 card deck is created correctly", () => {
  // Call the state function createCardDeck
  const outputObject = createCardDeck(cardPack.Suits, cardPack.Cards);
  // Observe the expected output to be 52 in length (52 cards)
  expect(outputObject.cardDeck.length).toEqual(52);
});
