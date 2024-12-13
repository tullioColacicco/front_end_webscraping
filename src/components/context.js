import React, { createContext, useState, useContext, useEffect } from "react";

// Create a Context
const ScrapedDataContext = createContext();

export const useScrapedData = () => {
  return useContext(ScrapedDataContext);
};

// Create a provider component
export const ScrapedDataProvider = ({ children }) => {
  const [scrapedData, setScrapedData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch("http://localhost:3000/scrape");

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setScrapedData(data);
      } catch (err) {
        setError("Failed to scrape data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    // Only fetch data if it's not already loaded
    if (scrapedData.length === 0) {
      fetchData();
    }
  }, [scrapedData]);

  return (
    <ScrapedDataContext.Provider value={{ scrapedData, loading, error }}>
      {children}
    </ScrapedDataContext.Provider>
  );
};
