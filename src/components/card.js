import { displayCards } from "../utils/script";

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
