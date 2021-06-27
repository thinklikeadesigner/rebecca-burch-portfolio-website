import React from "react";
import { Typography, Box, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "./Footer";
import NavMenu from "./Menu";
import NavBar from "./NavBar.js";
import { FullscreenExitRounded } from '@material-ui/icons';
import avatar from "../images/react.png";

const useStyles = makeStyles((theme) => ({

  container: {
    boxSizing: "border-box",
    margin: "0px",
    padding: "50px 0px",
    display: "flex",
    color: "white",
    height: "100vh",
    flexDirection: "column"
  },
  intro: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    padding: " 48px 104px",

  },
  section: {
    padding: "48px 149px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"

  },
  avatar: {
    height: "464px",
    width: "464px",
  },
  timeLineYear: {
  },
  heading: {

    fontFamily: "Roboto Slab, Arial, Helvetica, sans-serif",
    fontStyle: "normal",
fontWeight: "bold",
fontSize: "44px",
lineHeight: "60px",
    

  },
  subHeading: {
    padding: "24px 48px",
    fontFamily: "Roboto, Arial, Helvetica, sans-serif",
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <>
      <NavBar />
      <NavMenu />
    <Box className={classes.container}>
      <Box className={classes.section} >
<Box className={classes.intro}>
      <Typography  className={classes.heading} variant="h2" color="initial">Hi, I am Rebecca,
Design Technologist</Typography>
      <Typography className={classes.subHeading} variant="subtitle1">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</Typography>
      </Box>
  <Avatar className={classes.avatar} src={avatar}></Avatar>
</Box>
      <Box className={classes.section} >

<Typography  className={classes.heading} variant="h1" color="initial">About</Typography>
</Box>
    </Box>
    <Footer />
    
    </>
  );
};

export default Resume;
