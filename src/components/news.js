import React, { useState, useEffect } from "react";

const News = () => {
  const [scrapedData, setScrapedData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        // Use fetch to send a GET request to the backend to trigger scraping
        const response = await fetch("http://localhost:3000/scrape");

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        // Parse the response data (JSON format)
        const data = await response.json();
        setScrapedData(data);
      } catch (err) {
        setError("Failed to scrape data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    // Call the function immediately when the component mounts
    fetchData();
  }, []); // Empty dependency array means it will run only once, like componentDidMount()

  return (
    <div className="content">
      <h1>Scrape News</h1>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {scrapedData.length > 0 && (
        <div>
          <h2>Scraped Data:</h2>
          <ul>
            {scrapedData.map((item, index) => (
              <li key={index}>
                <a href={item.title} target="_blank" rel="noopener noreferrer">
                  {item.title}
                </a>
                <p>{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default News;
