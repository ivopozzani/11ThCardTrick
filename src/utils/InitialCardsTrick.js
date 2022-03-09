const createCardsArray = (suits, numerals) => {
  const cards = [];
  suits.forEach((suit) => {
    numerals.forEach((numeral) => {
      const obj = { suit: suit, numeral: numeral };
      cards.push(obj);
    });
  });
  return cards;
};

const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function InitialCardsTrick(suits, numerals, totalCardsToTrick = 21) {
  const randomDeckOfCards = [];
  const cardsArray = createCardsArray(suits, numerals);

  while (randomDeckOfCards.length < totalCardsToTrick) {
    const cardToAdd = cardsArray[getRandomNumber(0, cardsArray.length - 1)];
    if (!randomDeckOfCards.includes(cardToAdd)) {
      randomDeckOfCards.push(cardToAdd);
    }
  }

  return randomDeckOfCards.slice(0, totalCardsToTrick);
}

export default InitialCardsTrick;
