import InitialCardsTrick from "./InitialCardsTrick";

const suits = ["clubs"];
const numerals = ["A"];
const totalCards = 1;

it("returns a card", () => {
  expect(InitialCardsTrick(suits, numerals, totalCards)).toEqual([
    { suit: "clubs", numeral: "A" },
  ]);
});
