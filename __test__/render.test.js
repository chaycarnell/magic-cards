import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Card from "../src/components/card";
configure({ adapter: new Adapter() });

test("The Card component is rendering correctly", () => {
  const card = { title: "K", rank: 10, suit: "Hearts" };
  const wrapper = mount(<Card card={card} />);
  const cardTitle = wrapper.find(".card-title");
  expect(cardTitle.text()).toBe("K");
});
