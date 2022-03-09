const createCardsArray = (suits, numerals) => {
  let cards = [];
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

function initialCardsTrick(suits, numerals) {
  const CARDSTODISPLAY = 21;
  const displayCards = [];
  const cardsArray = createCardsArray(suits, numerals);

  while (displayCards.length < CARDSTODISPLAY) {
    const addcard = cardsArray[getRandomNumber(0, cardsArray.length - 1)];
    if (!displayCards.includes(addcard)) {
      displayCards.push(addcard);
    }
  }
}

export default initialCardsTrick;
