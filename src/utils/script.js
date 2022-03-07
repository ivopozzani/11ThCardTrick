const suits = ["spades", "clubs", "diamonds", "hearts"];
const displayCards = [];
const SUITLENGTH = 13;
const CARDSTODISPLAY = 21;

function createCardsArray() {
  let cards = [];
  suits.forEach((suit) => {
    for (let i = 1; i <= SUITLENGTH; i++) {
      let obj;
      switch (i) {
        case 1:
          obj = { suit: suit, numeral: "A" };
          break;
        case 11:
          obj = { suit: suit, numeral: "J" };
          break;
        case 12:
          obj = { suit: suit, numeral: "Q" };
          break;
        case 13:
          obj = { suit: suit, numeral: "K" };
          break;
        default:
          obj = { suit: suit, numeral: `${i}` };
      }
      cards.push(obj);
    }
  });
  return cards;
}

const cardsArray = createCardsArray();

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

while (displayCards.length < CARDSTODISPLAY) {
  const addcard = cardsArray[getRandomNumber(0, cardsArray.length - 1)];
  if (!displayCards.includes(addcard)) {
    displayCards.push(addcard);
  }
}

export { displayCards };
