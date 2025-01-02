import { useScrapedData } from "./context";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Prospects = () => {
  const { scrapedData, loading, error } = useScrapedData();
  console.log(scrapedData[1]);
  return (
    <div className="content">
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {scrapedData.length > 0 &&
        scrapedData[1].map((item, index) => {
          // Encode the player's name (or any string) for a Google search URL
          const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(
            item.name
          )}`;
          const href = "mlb.com" + item.href;
          return (
            <div className="card_container" key={index}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: 350, // Fixed height for the card
                  boxShadow: 3, // Optional for card shadow
                  borderRadius: 2, // Optional for rounded corners
                  fontFamily: "Jaro",
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    gutterBottom
                    sx={{ color: "text.primary", fontSize: 20 }}
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{ fontFamily: "Jaro" }}
                  >
                    #{index + 1} Prospect
                  </Typography>
                  {item.children.slice(0, 3).map((item, index) => {
                    return (
                      <Typography
                        sx={{ color: "text.secondary", mb: 1.5, mt: 1.5 }}
                        href={item.href}
                        key={index}
                      >
                        <a
                          target="_blank" // Opens link in a new tab
                          rel="noopener noreferrer" // Prevents security vulnerabilities
                          href={`https://www.mlb.com${item.href}`}
                          style={{
                            textDecoration: "none", // Removes underline
                            color: "inherit", // Matches the parent color
                          }}
                        >
                          {item.title}...
                        </a>
                      </Typography>
                    );
                  })}

                  <Typography variant="body2" sx={{ fontFamily: "Jaro" }}>
                    {item.title}
                  </Typography>
                </CardContent>

                {/* This section will always be pushed to the bottom */}
                <CardActions sx={{ marginTop: "auto" }}>
                  <Button size="small" href={googleSearchUrl}>
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </div>
          );
        })}
    </div>
  );
};
export default Prospects;
