import { useScrapedData } from "./context";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const News = () => {
  const { scrapedData, loading, error } = useScrapedData();

  return (
    <div className="content">
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {scrapedData.length > 0 &&
        scrapedData[0].map((item, index) => {
          const href = "mlb.com" + item.href;
          console.log(item.title);
          return (
            <div className="card_container" key={index}>
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
                  <Typography
                    sx={{
                      textAlign: "center",
                      justifyContent: "center",
                      display: "flex",
                    }}
                    variant="h5"
                    component="div"
                  ></Typography>
                  <Typography
                    sx={{ color: "text.secondary", mb: 1.5 }}
                  ></Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: "Jaro",
                      justifyItems: "center",
                      marginTop: 8,
                      lineHeight: 1.5,
                    }}
                  >
                    {item.desc}
                  </Typography>
                </CardContent>

                {/* This section will always be pushed to the bottom */}
                <CardActions sx={{ marginTop: "auto" }}>
                  <Button size="small" href={item.title}>
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

export default News;
