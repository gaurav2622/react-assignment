import React from "react";
import { render } from "@testing-library/react";
import ListingComponent from "../components/listingComponent/listing";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

describe("Listing Component", () => {
  it("render detail", () => {
    render(<ListingComponent />);
  });
});
