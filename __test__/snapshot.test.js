import React from "react";
import renderer from "react-test-renderer";
import Card from "../src/components/card";
import CardTable from "../src/components/card_table";

it("renders one card correctly", () => {
  const card = { suit: "Clubs", title: "2" };
  const tree = renderer.create(<Card card={card} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders the card table correctly with 1 card", () => {
  const cards = [{ suit: "Clubs", title: "2", rank: 0 }];
  const tree = renderer.create(<CardTable drawnCards={cards} />).toJSON();
  expect(tree).toMatchSnapshot();
});
