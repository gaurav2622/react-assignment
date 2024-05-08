import reportWebVitals from "../reportWebVitals";

// Mocking the web-vitals module
jest.mock("web-vitals", () => ({
  getCLS: jest.fn(),
  getFID: jest.fn(),
  getFCP: jest.fn(),
  getLCP: jest.fn(),
  getTTFB: jest.fn(),
}));

describe("reportWebVitals", () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Clear mock function call history before each test
  });

  it("should call all web-vitals functions with onPerfEntry", () => {
    const onPerfEntry = jest.fn();
    reportWebVitals(onPerfEntry);

    // Ensure all functions are called with onPerfEntry
    expect(require("web-vitals").getCLS).toHaveBeenCalledWith(onPerfEntry);
    expect(require("web-vitals").getFID).toHaveBeenCalledWith(onPerfEntry);
    expect(require("web-vitals").getFCP).toHaveBeenCalledWith(onPerfEntry);
    expect(require("web-vitals").getLCP).toHaveBeenCalledWith(onPerfEntry);
    expect(require("web-vitals").getTTFB).toHaveBeenCalledWith(onPerfEntry);
  });

  it("should not call web-vitals functions if onPerfEntry is not provided", () => {
    reportWebVitals(); // Calling without onPerfEntry

    // Ensure none of the functions are called
    expect(require("web-vitals").getCLS).not.toHaveBeenCalled();
    expect(require("web-vitals").getFID).not.toHaveBeenCalled();
    expect(require("web-vitals").getFCP).not.toHaveBeenCalled();
    expect(require("web-vitals").getLCP).not.toHaveBeenCalled();
    expect(require("web-vitals").getTTFB).not.toHaveBeenCalled();
  });
});
