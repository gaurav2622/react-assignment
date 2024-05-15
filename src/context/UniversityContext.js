import React, { createContext, useState, useEffect } from "react";
import { getUniversityList } from "../services/getList";

export const UniversityContext = createContext();

export const UniversityProvider = ({ children }) => {
  const [data, setData] = useState();
  const [filteredData, setFilteredData] = useState([]);
  const [isDataFound, setIsDataFound] = useState(false);
  const fetchData = async () => {
    try {
      const res = await getUniversityList();
      setData(res.data);
      setFilteredData(res.data);
    } catch {
      console.error("handle error");
      setIsDataFound(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <UniversityContext.Provider
      value={{ data, setData, filteredData, setFilteredData, isDataFound }}
    >
      {children}
    </UniversityContext.Provider>
  );
};
