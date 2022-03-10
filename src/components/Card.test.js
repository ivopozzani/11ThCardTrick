import React from "react";
import Card from "./Card";
import { render, screen } from "@testing-library/react";

describe("<Card />", () => {
  const suit = "suit";
  const numeral = "numeral";
  const row = [{ suit: suit, numeral: numeral }];

  it("renders card with correct numeral", () => {
    render(<Card renderRow={row} />);
    expect(screen.getByText(numeral)).toBeInTheDocument();
  });

  it("renders card with correct suit", () => {
    render(<Card renderRow={row} />);
    expect(screen.getByTestId(suit)).toBeInTheDocument();
  });

  it("renders with 'card' className", () => {
    render(<Card renderRow={row} />);
    expect(screen.getByTestId("card")).toHaveClass("card");
  });

  it("renders card with className equal to suit", () => {
    render(<Card renderRow={row} />);
    expect(screen.getByTestId(suit)).toHaveClass(suit);
  });
});
