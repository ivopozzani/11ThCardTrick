import initialCardsTrick from "./initialCardsTrick";

describe("initialCardsTrick()", () => {
  it("should return an array of cards", () => {
    const suits = ["clubs"];
    const numerals = ["A"];
    const totalCards = 1;
    expect(initialCardsTrick(suits, numerals, totalCards)).toEqual([
      { suit: "clubs", numeral: "A" },
    ]);
  });

  it("should return cards as specified", () => {
    const totalCards = 10;
    const cardSuits = ["spades", "clubs", "diamonds", "hearts"];
    const cardNumerals = ["A", "2", "3", "4"];
    const cardsArray = initialCardsTrick(cardSuits, cardNumerals, totalCards);
    expect(cardsArray.length).toEqual(totalCards);
  });

  it("should return 21 cards as default", () => {
    const cardSuits = ["spades", "clubs", "diamonds", "hearts"];
    const cardNumerals = ["A", "2", "3", "4", "5", "6", "7", "8"];
    const cardsArray = initialCardsTrick(cardSuits, cardNumerals);
    expect(cardsArray.length).toEqual(21);
  });
});
