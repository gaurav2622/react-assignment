import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "../App";

describe("App Component", () => {
  test("renders header, footer, and listing component by default", () => {
    render(
      <Router>
        <App />
      </Router>
    );
    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByTestId("listing-component")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });

  test("navigates to detail component when the path is /details", () => {
    render(
      <Router initialEntries={["/details"]}>
        <App />
      </Router>
    );
    expect(screen.getByTestId("detail-component")).toBeInTheDocument();
  });
});
