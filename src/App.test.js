import React from "react";
import App from "./App";
import { render, screen } from "@testing-library/react";

it("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Card Trick/i);
  expect(linkElement).toBeInTheDocument();
});

it("somenthins", () => {
  render(<App />);
  const linkElement = screen.getByText(/Your Chosen Card is:/i);
  expect(linkElement).toBeInTheDocument();
});

it("grabs button Row1", () => {
  render(<App />);
  expect(screen.getByText("Row1")).not.toBeDisabled();
});

it("grabs button Row2", () => {
  render(<App />);
  expect(screen.getByText("Row2")).not.toBeDisabled();
});

it("grabs button Row3", () => {
  render(<App />);
  expect(screen.getByText("Row3")).not.toBeDisabled();
});

it("grabs button Restart Trick", () => {
  render(<App />);
  expect(screen.getByText("Restart Trick")).toBeDisabled();
});
