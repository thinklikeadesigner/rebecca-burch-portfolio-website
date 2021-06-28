import React from "react";
import { Typography, Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import styled from 'styled-components'

import NavBar from "./NavBar.js";
import NavMenu from "./Menu.js";

const StyledButton = styled.a`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: tomato;

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  box-shadow: 4px 4px 20px 0px #888888;
  
  
`;

const useStyles = makeStyles((theme) => ({

//   timeline: {
//     position: "relative",
//     padding: "1rem",
//     margin: "0 auto",
//     height: "115vh",
//     "&:before": {
//       content: "''",
//       position: "absolute",
//       height: "130%",
//       border: "1px solid tan",
//       right: "40px",
//       top: "0",
//     },
//     "&:after": {
//       content: "''",
//       display: "table",
//       clear: "both",
//     },
//     [theme.breakpoints.up("md")]: {
//       padding: "2rem",
//       "&:before": {
//         left: "calc(50% - 1px)",
//         right: "auto",
//       },
//     },
//   },

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
      <NavMenu />
      <Box component="header" style={{marginTop: "48px"}} className={classes.mainContainer}>
        <Typography className={classes.heading} variant="h4" align="center">
          Learning Experience
        </Typography>
        <Box component="div" >
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
              Front End Engineer
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
              President
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
           Attended a 10 month bootcamp and completed 750 hours of coursework and projects
            </Typography>
          </Box>
          <Typography
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
              Tech: HTML/CSS, Javascript, React, JSX, Figma, REST APIs, Styled-Components
            </Typography>
          </Box>
            <div style={{display: "flex", justifyContent: "center"}}>

<StyledButton href="https://drive.google.com/file/d/1hnL_5Yjjv3weIThq6h5IqhIMt2CluV89/view?usp=sharing"  target="_blank" rel="noopener noreferrer" >Download Resume Here!</StyledButton>
            </div>
        </Box>
      </Box>
    </>
  );
};

export default Resume;
