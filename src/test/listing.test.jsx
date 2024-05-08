import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ListingComponent from "../components/listingComponent/listing";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

describe("Listing Component", () => {
  it("render detail", () => {
    const { getByText, getByPlaceholderText } = render(<ListingComponent />);
    expect(getByText("Select Search Type")).toBeInTheDocument();
    expect(getByPlaceholderText("Search Here....")).toBeInTheDocument();
    expect(getByText("Sort By:")).toBeInTheDocument();
    expect(getByText("A To Z")).toBeInTheDocument();
    expect(getByText("Z To A")).toBeInTheDocument();
    expect(getByText("Lisitng")).toBeInTheDocument();
  });
  it("filters data correctly by name", () => {
    const { getByPlaceholderText, getByText } = render(<ListingComponent />);
    const searchInput = getByPlaceholderText("Search Here....");
    fireEvent.change(searchInput, { target: { value: "Example University" } });
    expect(getByText("Example University")).toBeInTheDocument();
  });
});
