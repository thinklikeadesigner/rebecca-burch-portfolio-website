import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import NavBar from "./NavBar";
import NavMenu from "./Menu";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import project1 from "../images/javascript.png";
import project2 from "../images/htmlcss.png";
import project3 from "../images/react1.png";
import project4 from "../images/mern-stack.png";



const useStyles = makeStyles({

    cardContainer: {
        maxWidth: 345,
        margin: "3rem",
        margin: "5rem auto",
        background: '#f2f2f2'
    }
})

const Portfolio = () => {
    const classes = useStyles();
  return (
    <>
    <NavMenu />
      <Box component="div" style={{ background: "linear-gradient(to bottom, #233, 75%, #000)", height: "100%", padding: "64px 0px" }} className={classes.mainContainer} >
        <NavBar />
        <Grid container justify="center" alignItems="center">
          {/* Project 1 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer} >
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="project 1 "
                  height="140"
                  image={project1}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Project 1
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Used Javascript to render image cards with like buttons
                  </Typography>
                </CardContent>
              </CardActionArea>
                <CardActions>
                  {/* <Button size="small" color="primary">
                    Share
                  </Button> */}
                  <Button size="small" color="black">
                  <a style={{ textDecoration: 'none', color: "black", fontWeight: "600" }} target="_blank" rel="noopener noreferrer"  href="https://thinklikeadesigner.github.io/wb8historic">Live Demo</a>

 
                  </Button>         <Button size="small" color="black">
                  <a style={{ textDecoration: 'none', color: "black", fontWeight: "600" }}  target="_blank" href="https://github.com/thinklikeadesigner/web_project_9">Source Code</a>

 
                  </Button>
                </CardActions>
            </Card>
            </Grid>
             {/* Project 2 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer} >
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="project 2 "
                  height="140"
                  image={project2}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Project 2
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                Simple desktop-only static site
                  </Typography>
                </CardContent>
              </CardActionArea>
                <CardActions>
                  {/* <Button size="small" color="primary">
                    Share
                  </Button> */}
                  <Button size="small" color="primary">
                  <a style={{ textDecoration: 'none', color: "black", fontWeight: "600" }} target="_blank" rel="noopener noreferrer" href="https://thinklikeadesigner.github.io/web_project_1">Live Demo</a>
                  </Button>
                  <Button size="small" color="primary">

                  <a style={{ textDecoration: 'none', color: "black", fontWeight: "600" }} target="_blank" rel="noopener noreferrer" href="https://github.com/thinklikeadesigner/web_project_1">Source Code</a>
                  </Button>
                </CardActions>
            </Card>
          </Grid>
                       {/* Project 3 */}
                       <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer} >
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="project 3 "
                  height="140"
                  image={project3}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Project 3
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Simple UI webpage made with React and Material UI
                  </Typography>
                </CardContent>
              </CardActionArea>
                <CardActions>
                  {/* <Button size="small" color="primary">
                    Share
                  </Button> */}
                
                  
                    <a target="_blank" style={{ textDecoration: 'none', fontWeight: "600" }}href="https://thinklikeadesigner.github.io/portfolio-web/">   <Button size="small" color="black" style={{ textDecoration: 'none', fontWeight: "600" }}> Live Demo</Button></a>                
                         <a target="_blank" style={{ textDecoration: 'none', fontWeight: "600" }}href="https://github.com/thinklikeadesigner/portfolio-web">   <Button size="small" color="black" style={{ textDecoration: 'none', fontWeight: "600" }}> Source Code</Button></a>
               
                </CardActions>
            </Card>
          </Grid>
            {/* Project 4 */}
                       <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer} >
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="project 4 "
                  height="140"
                  image={project4}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Project 4
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                      Responsive website using CSS Grid, Flexbox, and Media Queries
                  </Typography>
                </CardContent>
              </CardActionArea>
                <CardActions>
                  {/* <Button size="small" color="primary">
               
                    Share
                  </Button> */}
                  <Button size="small" color="primary">
                  <a style={{ textDecoration: 'none', color: "black", fontWeight: "600" }}  target="_blank" rel="noopener noreferrer" href="https://thinklikeadesigner.github.io/web_project_3">Live Demo</a>
                  </Button>
                  <Button size="small" color="primary">
                  <a style={{ textDecoration: 'none', color: "black", fontWeight: "600" }}  target="_blank" href="https://github.com/thinklikeadesigner/web_project_3">Source Code</a>
                  </Button>
                </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Portfolio;
