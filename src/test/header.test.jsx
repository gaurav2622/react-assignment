import React from "react";
import { render } from "@testing-library/react";
import Header from "../components/headerComponent/header";

describe("Header Component", () => {
  it("render detail", () => {
    render(<Header />);
  });
});
