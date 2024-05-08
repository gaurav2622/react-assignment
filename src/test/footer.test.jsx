import React from "react";
import { render } from "@testing-library/react";
import Footer from "../components/footerComponent/footer";

describe("Footer Component", () => {
  it("render detail", () => {
    render(<Footer />);
  });
});
