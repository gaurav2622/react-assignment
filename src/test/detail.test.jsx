import React from "react";
import { render, waitFor, fireEvent } from "@testing-library/react";
import DetailComponent from "../components/detailComponent/detail";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

// Mocking localStorage
const mockLocalStorage = (() => {
  let store = {};
  return {
    getItem: (key) => store[key],
    setItem: (key, value) => {
      store[key] = value.toString();
    },
    clear: () => {
      store = {};
    },
  };
})();
Object.defineProperty(window, "localStorage", { value: mockLocalStorage });

describe("Detail Component", () => {
  it("render detail", () => {
    render(<DetailComponent />);
  });
  it("displays listing details", async () => {
    const mockData = {
      name: "Test University",
      country: "Test Country",
      domains: "test.edu",
      web_pages: "http://test.edu",
      alpha_two_code: "TT",
    };
    localStorage.setItem("details", JSON.stringify(mockData));
    const { getByText } = render(<DetailComponent />);
    await waitFor(() => {
      expect(getByText("Test University, Test Country")).toBeInTheDocument();
      expect(getByText("test.edu")).toHaveAttribute("href", "/");
      expect(getByText("http://test.edu")).toHaveAttribute("href", "/");
      expect(getByText("TT")).toBeInTheDocument();
    });
  });
  it("deletes data from localStorage when delete button is clicked", async () => {
    const mockData = {
      name: "Test University",
      country: "Test Country",
      domains: "test.edu",
      web_pages: "http://test.edu",
      alpha_two_code: "TT",
    };

    localStorage.setItem("details", JSON.stringify(mockData));

    const { getByText } = render(<DetailComponent />);

    fireEvent.click(getByText("Delete"));

    await waitFor(() => {
      expect(localStorage.getItem("details")).toBeUndefined();
    });
  });
});
