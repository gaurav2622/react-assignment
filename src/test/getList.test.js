import axios from "axios";
import { getUniversityList } from "../services/getList";

jest.mock("axios");

describe("getUniversityList function", () => {
  it("fetches data from the API", async () => {
    const responseData = [
      { name: "University 1", country: "United Arab Emirates" },
      { name: "University 2", country: "United Arab Emirates" },
    ];
    axios.get.mockResolvedValue({ data: responseData });
    const result = await getUniversityList();

    expect(axios.get).toHaveBeenCalledWith(
      "http://universities.hipolabs.com/search?country=United%20Arab%20Emirates"
    );
    expect(result).toEqual({ data: responseData });
  });

  it("handles errors gracefully", async () => {
    const error = new Error("Request failed");
    axios.get.mockRejectedValue(error);
    const result = await getUniversityList();
    expect(result).toEqual(error);
  });
});
