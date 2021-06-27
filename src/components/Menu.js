import React from 'react';
import {makeStyles, withStyles, createMuiTheme} from  "@material-ui/core/styles";
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
  import {Link} from "react-router-dom";
  
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import {
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
    
    ContactMail,
    Block,
  } from "@material-ui/icons";

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
      [theme.breakpoints.down('sm')]: {
        visibility: "hidden",
      },
      [theme.breakpoints.up('md')]: {
        visibility: "66px",
      },
      [theme.breakpoints.up('lg')]: {
        height: "80px",
      },
    },
    navContainer: { 
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
     

    },
    headerContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      [theme.breakpoints.down('sm')]: {
        height: "56px",
      },
      [theme.breakpoints.up('md')]: {
        height: "66px",
      },
      [theme.breakpoints.up('lg')]: {
        height: "80px",
      },
  
    },
    menuSliderContainer: {
      width: 250,
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
    listText: "tan"
  }));
  
  const menuItems = [
    {
      listIcon: <Home />,
      listText: "Home",
      listPath: "/"
    },
    {
      listIcon: <AssignmentInd />,
      listText: "Resume",
      listPath: "/Resume"
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
  
  
  

const NavMenu = () => {
    const classes= useStyles();
//     return (
//         <BottomNavigation width="auto" style={{background: "#222"}}>
            
// < BottomNavigationAction className={classes.root} style={{padding:0}} href="https://github.com/thinklikeadesigner/" icon={<GitHubIcon />} />
// < BottomNavigationAction className={classes.root} style={{padding:0}} href="https://twitter.com/thinkLikeADev" icon={<TwitterIcon />} />
// < BottomNavigationAction className={classes.root} style={{padding:0}} href="https://www.linkedin.com/in/rebecca-burch/" icon={<LinkedInIcon />} />

// </BottomNavigation>

//     )
return (
    <>
 <Grid xs={120} sm={6} md={3}>
  
</Grid>
      <Box  component="nav">
        
        <AppBar  className={classes.header}  position="fixed" style={{ background: "#222" }}>
          <Toolbar  className={classes.headerContainer} >

<Typography variant="h5" style={{ color: "tan", marginRight: "24px" }}>
              Portfolio
            </Typography>
<div className={classes.navContainer}>
          {menuItems.map((lsItem, key) => (
            <ListItem style={{width: "auto"}} className={classes.menuItem} button key={key} component={Link} to={lsItem.listPath} >
              {/* <ListItemIcon className={classes.listItem}>
                {lsItem.listIcon}
              </ListItemIcon> */}
              <ListItemText style={{ color: "tan", }} primary={lsItem.listText}></ListItemText>
            </ListItem>
          ))}
          </div>


          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}


export default NavMenu;