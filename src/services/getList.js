import axios from "axios";

export const getUniversityList = async () => {
  const url =
    "http://universities.hipolabs.com/search?country=United%20Arab%20Emirates";
  const response = await axios.get(url);
  return response;
};
