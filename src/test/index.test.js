import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders App component", () => {
  const { getByTestId } = render(<App />);
  const appElement = getByTestId("app");
  expect(appElement).toBeInTheDocument();
});
