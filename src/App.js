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
const firstRow = initialCardsTrick(cardSuits, cardNumerals).slice(0, ROWSIZE);
const secondRow = initialCardsTrick(cardSuits, cardNumerals).slice(
  ROWSIZE,
  ROWSIZE * 2
);
const thirdRow = initialCardsTrick(cardSuits, cardNumerals).slice(ROWSIZE * 2);

function App({
  initialState = { row1: firstRow, row2: secondRow, row3: thirdRow },
}) {
  const [rows, setRows] = useState(initialState);

  const updateRowsState = (before, middle, after) => {
    const cardsToDeal = [...before, ...middle, ...after];

    rows.row1 = [];
    rows.row2 = [];
    rows.row3 = [];

    for (let i = 0; i < ROWSIZE; i++) {
      rows.row1.push(cardsToDeal.shift());
      rows.row2.push(cardsToDeal.shift());
      rows.row3.push(cardsToDeal.shift());
    }
    setRows({ row1: rows.row1, row2: rows.row2, row3: rows.row3 });
  };

  return (
    <>
      <h1 className="header">Card Trick</h1>
      <div className="display-cards">
        <div className="row">
          <div>
            <button
              onClick={() =>
                updateRowsState([...rows.row2], [...rows.row1], [...rows.row3])
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
              onClick={() =>
                updateRowsState([...rows.row1], [...rows.row2], [...rows.row3])
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
              onClick={() =>
                updateRowsState([...rows.row1], [...rows.row3], [...rows.row2])
              }
            >
              Row3
            </button>
          </div>
          <Card renderRow={rows.row3} />
        </div>
      </div>
    </>
  );
}

export default App;
