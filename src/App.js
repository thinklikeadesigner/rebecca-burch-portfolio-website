import React from "react";
import "./App.css";
import Home from "./components/Home";
import {Route} from "react-router-dom";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import CssBaseline from '@material-ui/core/CssBaseline';
import Contacts from "./components/Contacts"
import Resume from "./components/Resume"

function App() {
  return (
    <>
    <CssBaseline />
     <Route exact path="/" component={Home} />
     {/* <Route path="/about" component={About} /> */}
     <Route path="/portfolio" component={Portfolio} />
     {/* <Route path="/resume" component={Resume} /> */}
     <Route path="/contacts" component={Contacts} />
    </>
  );
}

export default App;


