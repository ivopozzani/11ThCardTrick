import initialCardsTrick from "../utils/initialCardsTrick";

const cardSuits = ["spades", "clubs", "diamonds", "hearts"];
const cardNumerals = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];
const displayCards = initialCardsTrick(cardSuits, cardNumerals);

const Card = () => {
  return displayCards.map((c) => {
    return (
      <div className="card">
        <span className={c.suit}></span>
        <p>{c.numeral}</p>
      </div>
    );
  });
};

export default Card;
