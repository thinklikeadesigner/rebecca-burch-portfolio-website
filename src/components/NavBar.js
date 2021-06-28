import React, {useState} from "react";
import {Link} from "react-router-dom";
import MobileRightMenuSlide from "@material-ui/core/Drawer";
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import Footer from "./Footer"
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
  ListItemIcon,
  Drawer, Grid
} from "@material-ui/core";

import {
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
  Block,
  Fingerprint,
  Navigation,
  Menu,
} from "@material-ui/icons";


import avatar from "../avatar.png";
const mediaQuery = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
})

//CSS styles
const useStyles = makeStyles((theme) => ({
  header: {
    // [theme.breakpoints.down('sm')]: {
    //   height: "56px",
    // },
    [theme.breakpoints.up('md')]: {
      visibility: "hidden",
    },
    // [theme.breakpoints.up('lg')]: {
    //   height: "80px",
    // },
  },
  headerContainer: {
    alignItems: "center",
    justifyContent: "space-between"
    // [theme.breakpoints.down('sm')]: {
    //   height: "56px",
    // },
    // [theme.breakpoints.up('md')]: {
    //   height: "66px",
    // },
    // [theme.breakpoints.up('lg')]: {
    //   height: "80px",
    // },

  },
  menuSliderContainer: {
    width: "100vw",
    background: "#511",
    height: "100%",
    
    

  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },

  listItem: {
    color: "tan",
  },

// root: {
//   "& .MuiListItemText-primary": {
//     fontWeight: "400",
//   fontSize: "31px",
//   lineHeight: "43px",
//     },
// },

  listText: "tan",

}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath: "/"
  },
  {
    listIcon: <AssignmentInd />,
    listText: "About",
    listPath: "/About"
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio",
    listPath: "/Portfolio"
  },
  {
    // listIcon: <ContactMail />,
    // listText: "Contacts",
    // listPath: "/contacts"
  },
];




const NavBar = () => {





const [state, setstate] = useState({  
    right: false
})

const toggleSlider = (slider, open) => () => {
    setstate({ ...state, [slider]: open })
}
  const classes = useStyles();
const sideList = slider => (

      <Box 
       className={classes.menuSliderContainer} component="div"
      onClick={toggleSlider(slider, false)}>
          <div style={{padding: "0px 24px", display: "flex", justifyContent: "flex-end",alignItems: "center", minHeight: "64px"}}>
       
          <Menu style={{ color: "tan", margin: "12px" }} />
          </div>
        {/* <Avatar className={classes.avatar} src={avatar} alt="Rebecca Burch " /> */}
        <Divider />
        <List>
          {menuItems.map((lsItem, key) => (
            <ListItem button key={key} component={Link} to={lsItem.listPath} >
              <ListItemIcon className={classes.listItem}>
                {lsItem.listIcon}
              </ListItemIcon>
              <ListItemText style={{ color: "tan" }} primary={lsItem.listText}></ListItemText>
            </ListItem>
          ))}
        </List>
        
      </Box>

)

  return (
    <>
 <Grid xs={120} sm={6} md={3}>
  
</Grid>
      <Box  component="nav">
        
        <AppBar  className={classes.header}  position="fixed" style={{ background: "#222" }}>
          <Toolbar  className={classes.headerContainer} >
            <Typography variant="h5" style={{ color: "tan" }}>
              Portfolio
            </Typography>
            <IconButton onClick={toggleSlider("right", true)} >
              <Menu style={{ color: "tomato" }} />
            </IconButton>
            <MobileRightMenuSlide anchor="right" onClose={toggleSlider("right", false)} open={state.right}>
{sideList("right")}
        <Footer />

            </MobileRightMenuSlide>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default NavBar;
