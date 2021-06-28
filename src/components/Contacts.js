import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField, Typography, Button, Grid, Box } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import NavBar from "./NavBar.js";
import NavMenu from "./Menu.js";
import { GitHub, SportsBasketball, Twitter } from '@material-ui/icons';
import LinkedIn from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
    justifyContent: "center"
  },
  button: {

    marginTop: "1rem",
    color: "tomato",
    borderColor: "tomato",
    alignSelf: "center"
  },
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "tomato",
    },
    "& label": {
      color: "tan",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan",
      },
      "&:hover fieldset": {
        borderColor: "tan",
      },
      "&.Mui-focused fieldset": {
        borderColor: "tan",
      },
    },
  },
})(TextField);

const Contacts = () => {
  const classes = useStyles();
  
  return (
    <Box component="div" style={{ background: "linear-gradient(to bottom, #233, 75%, #000)", height: "100vh" }}> 
    <NavMenu/>
    <NavBar />
      <Grid container justify="center">
        <Box component="form" className={classes.form}>
          <Typography
            variant="h3"
            style={{
              color: "tomato",
              textAlign: "center",
           
            }}
          >
         
         Reach Out or Keep Exploring
          </Typography>
          {/* <InputField
            fullWidth={true}
            label="Name"
            variant="outlined"
            margin="dense"
            size="medium"
            inputProps={{
              style: {
                color: "white",
              },
            }}
          /> */}
          <br />
          {/* <InputField
            fullWidth={true}
            label="Email"
            variant="outlined"
            margin="dense"
            size="medium"
            inputProps={{
              style: {
                color: "white",
              },
            }}
          /> */}
      <a  style={{textDecoration: "none"}} target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/rebecca-burch/">
                    <Button
            className={classes.button}
            variant="outlined"
            fullWidth={true}
            endIcon={<LinkedIn />}


            > LinkedIn
            </Button>
            </a>
            <a style={{textDecoration: "none"}} target="_blank" rel="noopener noreferrer" href="https://github.com/thinklikeadesigner/">
                    <Button
            className={classes.button}
            variant="outlined"
            fullWidth={true}
            endIcon={<GitHub />}
          >
   Github
          </Button>
   </a>
   <a style={{textDecoration: "none"}} target="_blank" rel="noopener noreferrer" href="https://twitter.com/thinkLikeADev">
                    <Button
            className={classes.button}
            variant="outlined"
            fullWidth={true}
            endIcon={<Twitter />}
          >
          Twitter
          </Button>
          </a>
          <a style={{textDecoration: "none"}} target="_blank" rel="noopener noreferrer" href="https://dribbble.com/ThinkLikeADesigner">
                    <Button
            className={classes.button}
            variant="outlined"
            fullWidth={true}
            endIcon={<SportsBasketball />}
            
          >
     Dribble
          </Button>
     </a>
          <br />
          {/* <InputField
            fullWidth={true}
            label="Company Name"
            variant="outlined"
            margin="dense"
            size="medium"
            inputProps={{
              style: {
                color: "white",
              },
            }}
          /> */}


        </Box>
      </Grid>
    </Box>
  );
};

export default Contacts;
