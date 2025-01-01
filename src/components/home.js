import { useScrapedData } from "./context";

function Home() {
  const { scrapedData, loading, error } = useScrapedData();
  // const data = scrapedData[2];
  // console.log(data[0].text);
  return (
    <div className="content">
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {scrapedData.length > 0 &&
        scrapedData[2].map((item, index) => {
          // Encode the player's name (or any string) for a Google search URL
          const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(
            item.text[1].slice(0, -2)
          )}`;
          const href = "mlb.com" + item.href;
          return (
            <div className="card_container" key={index}>
              <div className="card_container">
                <article className="card">
                  <img src={item.img} alt="Typhlosion" />
                  <div className="text">
                    <h3>{item.text[1].slice(0, -2)}</h3>
                    <p>Bats: {item.text[2]}</p>
                    <p>{item.text[3]}</p>
                    <p>{item.text[4]}</p>
                    <p>{item.text[5]}</p>
                    <button>
                      <a
                        href={googleSearchUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="more-info-button"
                      >
                        More Info
                      </a>
                    </button>
                  </div>
                </article>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Home;
