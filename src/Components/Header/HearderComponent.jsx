import { Box } from "@material-ui/core";
import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import BlogPost from "../BodyComponent/BlogPost";
import Dashboard from "../BodyComponent/Dashboard/Dashboard";
import Link1 from "../BodyComponent/Link1";
import Notification from "./ActionTab/Notification";
import { useStyles } from "./HeaderStyle";
import NavbarComponent from "./NavbarComponent";
import Sidenav from "./Sidenav";

export default function HearderComponent() {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    console.log("Jai siya ram");
  };
  const handleDrawerClose = () => {
    setMobileOpen(false);
   
  };
  return (
    <Fragment>
      <NavbarComponent handleDrawerToggle={handleDrawerToggle} />
      <Sidenav
        mobileOpen={mobileOpen}
        handleDrawerClose={handleDrawerClose}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Box className={classes.wrapper}>
        <Switch>
    
          <Route exact path='/' render={() => <Dashboard />} />
          <Route exact path='/' render={() => <Dashboard />} />
          <Route exact path='/' render={() => <Dashboard />} />
          <Route exact path='/blog' render={() => <BlogPost />} />
        
          <Route exact path='/link1' render={() => <Link1 />} />
          <Route exact path='/notification' render={() => <Notification />} />
        </Switch>
      </Box>
    </Fragment>
  );
}
