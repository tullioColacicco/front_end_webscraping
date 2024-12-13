import React, { useState, useEffect } from "react";
import { useScrapedData } from "./context";

const News = () => {
  const { scrapedData, loading, error } = useScrapedData();

  return (
    <div className="content">
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {scrapedData.length > 0 &&
        scrapedData.map((item, index) => {
          return (
            <div key={index} className="card_container">
              <a href={item.title} target="_blank" rel="noopener noreferrer">
                //need to shorten the link to .com link
              </a>
              <h1>{item.desc}</h1>
            </div>
          );
        })}
    </div>
  );
};

export default News;
