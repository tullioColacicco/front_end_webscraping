import { useScrapedData } from "./context";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { margin } from "@mui/system";

const Prospects = () => {
  const { scrapedData, loading, error } = useScrapedData();
  console.log(scrapedData[1]);
  return (
    <div className="content">
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {scrapedData.length > 0 &&
        scrapedData[1].map((item, index) => {
          const href = "mlb.com" + item.href;
          return (
            <div className="card_container">
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: 350, // Fixed height for the card
                  boxShadow: 3, // Optional for card shadow
                  borderRadius: 2, // Optional for rounded corners
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    gutterBottom
                    sx={{ color: "text.secondary", fontSize: 14 }}
                  >
                    {item.date}
                  </Typography>
                  <Typography variant="h5" component="div">
                    benevolent
                  </Typography>
                  <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
                    adjective
                  </Typography>
                  <Typography variant="body2">{item.title}</Typography>
                </CardContent>

                {/* This section will always be pushed to the bottom */}
                <CardActions sx={{ marginTop: "auto" }}>
                  <Button size="small" href={`https://${href}`}>
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
