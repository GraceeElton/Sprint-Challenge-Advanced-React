import React from "react";
import { render } from "@testing-library/react";
import Players from "./Players";
import App from "../App";
import Header from "./header";

//test

// test that app renders - done
// test that the header is showing up. - done
//Are the players showing up?

test("renders App without crashing", () => {
  render(<App />);
});
test("renders Player without crashing", () => {
  render(<Players />);
});

test("header is there", () => {
  const { getByText } = render(<Header />);

  const headerText = getByText(/All the players/i);
});
