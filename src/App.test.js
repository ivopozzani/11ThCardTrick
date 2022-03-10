import React from "react";
import App from "./App";
import { render, screen } from "@testing-library/react";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Card Trick/i);
  expect(linkElement).toBeInTheDocument();
});
