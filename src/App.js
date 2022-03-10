import "./App.css";
import Card from "./components/Card";
import { useState } from "react";
import initialCardsTrick from "./utils/initialCardsTrick";

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
const ROWSIZE = 7;
let counter = 0;

const setInitialState = () => {
  const cardsToTrick = initialCardsTrick(cardSuits, cardNumerals);
  const firstRow = cardsToTrick.slice(0, ROWSIZE);
  const secondRow = cardsToTrick.slice(ROWSIZE, ROWSIZE * 2);
  const thirdRow = cardsToTrick.slice(ROWSIZE * 2);

  return { row1: firstRow, row2: secondRow, row3: thirdRow };
};

function App() {
  const [rows, setRows] = useState(setInitialState());
  const [activeState, setActiveState] = useState(false);

  const updateRowsState = (before, middle, after) => {
    const cardsToDeal = [...before, ...middle, ...after];
    counter++;

    rows.row1 = [];
    rows.row2 = [];
    rows.row3 = [];

    for (let i = 0; i < ROWSIZE; i++) {
      rows.row1.push(cardsToDeal.shift());
      rows.row2.push(cardsToDeal.shift());
      rows.row3.push(cardsToDeal.shift());
    }
    setRows({ row1: rows.row1, row2: rows.row2, row3: rows.row3 });

    if (counter === 3) {
      setActiveState(true);
    }
  };

  const restartTrick = () => {
    counter = 0;
    setRows(setInitialState());
    setActiveState(false);
  };

  return (
    <>
      <h1 className={activeState ? "displayOpaque header" : "header"}>
        Card Trick
      </h1>
      <div className="display-cards">
        <div className={activeState ? "displayOpaque" : ""}>
          <div className="row">
            <div>
              <button
                disabled={activeState}
                onClick={() =>
                  updateRowsState(
                    [...rows.row2],
                    [...rows.row1],
                    [...rows.row3]
                  )
                }
              >
                Row1
              </button>
            </div>
            <Card renderRow={rows.row1} />
          </div>
          <div className="row">
            <div>
              <button
                disabled={activeState}
                onClick={() =>
                  updateRowsState(
                    [...rows.row1],
                    [...rows.row2],
                    [...rows.row3]
                  )
                }
              >
                Row2
              </button>
            </div>
            <Card renderRow={rows.row2} />
          </div>
          <div className="row">
            <div>
              <button
                disabled={activeState}
                onClick={() =>
                  updateRowsState(
                    [...rows.row1],
                    [...rows.row3],
                    [...rows.row2]
                  )
                }
              >
                Row3
              </button>
            </div>
            <Card renderRow={rows.row3} />
          </div>
        </div>
        <div className={activeState ? "displayBigger" : "displayNone"}>
          <h2>Your Chosen Card is:</h2>
          <Card renderRow={[rows.row2[3]]} />
          <div>
            <button onClick={restartTrick}>Restart Trick</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
