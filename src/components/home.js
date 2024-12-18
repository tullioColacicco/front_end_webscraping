import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Home() {
  return (
    <div className="content">
      <div className="card_container">
        <article className="card">
          <img
            src="https://www.brik.co/cdn/shop/articles/new-york-yankees-pixel-art-logo-sports-mlb-new-york-yankees_grande.png?v=1501224718"
            alt="Typhlosion"
          />
          <div className="text">
            <h3>You Got!</h3>
            <p>Typhlosion</p>
            <button>More Info</button>
          </div>
        </article>
      </div>

      <div className="card_container">
        <article className="card">
          <img
            src="https://img.pokemondb.net/sprites/silver/shiny/typhlosion.png"
            alt="Typhlosion"
          />
          <div className="text">
            <h3>You Got!</h3>
            <p>Typhlosion</p>
            <button>More Info</button>
          </div>
        </article>
      </div>

      <div className="card_container">
        <Card>
          <CardContent>
            <Typography
              gutterBottom
              sx={{ color: "text.secondary", fontSize: 14 }}
            >
              Date
            </Typography>
            <Typography variant="h5" component="div">
              benevolent
            </Typography>
            <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
              adjective
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
      <div className="card_container">
        <Card>
          <CardContent>
            <Typography
              gutterBottom
              sx={{ color: "text.secondary", fontSize: 14 }}
            >
              Word of the Day
            </Typography>
            <Typography variant="h5" component="div">
              benevolent
            </Typography>
            <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
              adjective
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}

export default Home;
