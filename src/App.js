import "./App.css";
import Card from "./components/Card";
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

function App() {
  const row1 = displayCards.slice(0, 7);
  const row2 = displayCards.slice(7, 14);
  const row3 = displayCards.slice(14);
  return (
    <>
      <h1 className="header">Card Trick</h1>
      <div className="display-cards">
        <div className="row">
          <div>
            <button>Row1</button>
          </div>
          <Card renderRow={row1} />
        </div>
        <div className="row">
          <div>
            <button>Row2</button>
          </div>
          <Card renderRow={row2} />
        </div>
        <div className="row">
          <div>
            <button>Row3</button>
          </div>
          <Card renderRow={row3} />
        </div>
      </div>
    </>
  );
}

export default App;
