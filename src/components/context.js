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
        // Make both fetch requests in parallel
        const [response1, response2] = await Promise.all([
          fetch("http://localhost:3000/scrape"),
          fetch("http://localhost:3002/scrape"),
        ]);

        // Check if both responses are successful
        if (!response1.ok || !response2.ok) {
          throw new Error("Failed to fetch data from one or more endpoints");
        }

        // Parse the response data as JSON
        const data1 = await response1.json();
        const data2 = await response2.json();

        // Combine both datasets
        setScrapedData([data1, data2]);
      } catch (err) {
        setError("Failed to scrape data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    // Only fetch data if it hasn't been loaded already
    if (scrapedData.length === 0 && !loading && !error) {
      fetchData();
    }
  }, [scrapedData.length, loading, error]); // Effect only runs when initial state is empty or when error/loading states change

  return (
    <ScrapedDataContext.Provider value={{ scrapedData, loading, error }}>
      {children}
    </ScrapedDataContext.Provider>
  );
};
