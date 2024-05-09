import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import ListingComponent from "../components/listingComponent/listing";
import * as list from "../services/getList";
import commonData from "../mockData/univMock";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

jest.mock("../services/getList", () => ({
  getUniversityList: jest.fn(),
}));
describe("Listing Component", () => {
  it("render detail", async () => {
    getUniversityList.mockResolvedValue(commonData);
    const { getByTestId } = render(<ListingComponent />);
    const wrapper = getByTestId("wrapper");
    await act(() => {
      Promise.resolve();
    });

    expect(wrapper).toBeTruthy();
  });
  it("render detail", () => {
    jest.spyOn(list, "getUniversityList").mockRejectedValueOnce(new Error());
    const { getByTestId } = render(<ListingComponent />);
    const wrapper = getByTestId("wrapper");
    expect(wrapper).toBeTruthy();
  });
  it("fires onChange event for search input", async () => {
    jest.spyOn(list, "getUniversityList").mockResolvedValue(commonData);
    const { getByPlaceholderText } = render(<ListingComponent />);
    const searchInput = getByPlaceholderText("Search Here....");
    await act(() => {
      fireEvent.change(searchInput, { target: { value: "example" } });
    });
    expect(searchInput.value).toBe("example");
  });
  it("fires onChange event for search input", async () => {
    jest.spyOn(list, "getUniversityList").mockResolvedValue(commonData);
    const { getByPlaceholderText } = render(<ListingComponent />);
    const searchInput = getByPlaceholderText("Search Here....");
    await act(() => {
      fireEvent.change(searchInput, { target: { value: "" } });
    });
    expect(searchInput.value).toBe("");
  });
  it("fires onChange event for filter select", async () => {
    jest.spyOn(list, "getUniversityList").mockResolvedValue(commonData);
    const { getByTestId } = render(<ListingComponent />);
    const filterSelect = getByTestId("select-wrapper");
    await act(async () => {
      fireEvent.change(filterSelect, { target: { value: "Country" } });
    });
    expect(filterSelect.value).toBe("Country");
  });
  it("fires onChange event for filter select", async () => {
    jest.spyOn(list, "getUniversityList").mockResolvedValue(commonData);
    const { getByTestId } = render(<ListingComponent />);
    const SortSelect = getByTestId("filter-wrapper");
    await act(async () => {
      fireEvent.change(SortSelect, { target: { value: "A To Z" } });
    });
  });
  it("fires onChange event for filter select", async () => {
    jest.spyOn(list, "getUniversityList").mockResolvedValue(commonData);
    const { getByTestId } = render(<ListingComponent />);
    const SortSelect = getByTestId("filter-wrapper");
    await act(async () => {
      fireEvent.change(SortSelect, { target: { value: "Z To A" } });
    });
  });
});
