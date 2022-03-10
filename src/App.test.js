import React from "react";
import App from "./App";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("<App />", () => {
  it("renders 'Card Trick' on page", () => {
    render(<App />);
    expect(screen.getByText("Card Trick")).toBeInTheDocument();
  });

  it("renders 'Your Chosen Card is:' on screen", () => {
    render(<App />);
    expect(screen.getByText("Your Chosen Card is:")).toBeInTheDocument();
  });

  it("renders heading with 'header' className", () => {
    render(<App />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveClass("header");
  });

  it("renders div with 'display-cards' className", () => {
    render(<App />);
    expect(screen.getByTestId("display-cards")).toHaveClass("display-cards");
  });

  it("renders three rows of cards", () => {
    render(<App />);
    const rows = screen.getAllByTestId("row");
    expect(rows.length).toEqual(3);
  });

  it("renders button named 'Row1'", () => {
    render(<App />);
    expect(screen.getByText("Row1")).not.toBeDisabled();
  });

  it("renders button named 'Row2'", () => {
    render(<App />);
    expect(screen.getByText("Row2")).not.toBeDisabled();
  });

  it("renders button named 'Row3'", () => {
    render(<App />);
    expect(screen.getByText("Row3")).not.toBeDisabled();
  });

  it("renders button named 'Restart Trick'", () => {
    render(<App />);
    expect(screen.getByText("Restart Trick")).toBeDisabled();
  });

  it("disables button Row1 after 3 clicks", () => {
    render(<App />);
    const buttonRow1 = screen.getByText("Row1");

    userEvent.click(buttonRow1);
    userEvent.click(buttonRow1);
    userEvent.click(buttonRow1);

    expect(buttonRow1).toBeDisabled();
  });
});
