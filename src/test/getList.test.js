import axios from "axios";
import { getUniversityList } from "../services/getList";
import commonData from "../mockData/univMock";

jest.mock("axios");

describe("getUniversityList function", () => {
  it("fetches data from the API", async () => {
    axios.get.mockResolvedValue(commonData);
    const result = await getUniversityList();
    expect(result).toEqual(commonData);
  });
});
