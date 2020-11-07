import React from "react";
import { Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import NavBar from "./NavBar.js";

const useStyles = makeStyles((theme) => ({

  timeline: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    height: "100vh",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: "0",
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },

  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },

  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    background: "tomato",
    color: "white",
    lineHeight: 1,
    padding: "0.5rem 0 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "white",
    padding: "0",
    textTransform: "uppercase",
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <>
      <NavBar />
      <Box component="header" style={{marginTop: "48px"}} className={classes.mainContainer}>
        <Typography className={classes.heading} variant="h4" align="center">
          Learning Experience
        </Typography>
        <Box component="div" className={classes.timeline}>
          <Typography
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
            variant="h2"
          >
            October 2020
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              className={classes.subHeading}
              variant="h5"
              align="center"
            >
              Front End Developer
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "tomato" }}
            >
              SIDE PRJCT Accelerator Program
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "tan" }}
            >
              Joined a team of UX designers and product managers to produce an
              MVP within 6 weeks using agile methods
            </Typography>
          </Box>
          <Typography
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
            variant="h2"
          >
            September 2020
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              className={classes.subHeading}
              variant="h5"
              align="center"
            >
              Co-Founder
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "tomato" }}
            >
              DevUX Projects
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "tan" }}
            >
              Founded a club for student UX designers and Front End
              Developers
            </Typography>
          </Box>
          <Typography
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
            variant="h2"
          >
            July 2020
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              className={classes.subHeading}
              variant="h5"
              align="center"
            >
              Senior Student
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "tomato" }}
            >
              Practicum by Yandex
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "tan" }}
            >
              Recruited by Practicum to assist tutors in helping students with the course
            </Typography>
          </Box>
          <Typography
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
            variant="h2"
          >
            May 2020
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              className={classes.subHeading}
              variant="h5"
              align="center"
            >
              Student
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "tomato" }}
            >
              Practicum by Yandex, Fullstack Bootcamp
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "tan" }}
            >
              Currently halfway through a 10 month fullstack bootcamp
            </Typography>
          </Box>
          {/* <Typography
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
            variant="h2"
          >
            January 2020
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              className={classes.subHeading}
              variant="h5"
              align="center"
            >
              Student
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "tomato" }}
            >
              Continuing Education: building side projects
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "tan" }}
            >
              Tech: Python, Docker, AWS, Flutter, Material UI, Android Studio
            </Typography>
          </Box> */}
        </Box>
      </Box>
    </>
  );
};

export default Resume;
