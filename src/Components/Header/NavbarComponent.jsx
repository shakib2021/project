import {
  AppBar, Badge, Box,
  Hidden,
  IconButton, Toolbar
} from "@material-ui/core";
import ForumIcon from "@material-ui/icons/Forum";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import React from "react";
import { useStyles } from "./HeaderStyle";


import Admin from "./ActionTab/AdminSelect";
import Language from "./ActionTab/Language";
import Messages from "./ActionTab/Messages";
import Notification from "./ActionTab/Notification";
import UserSwitch from "./ActionTab/UserSwitch";

export default function NavbarComponent({ handleDrawerToggle }) {
  const classes = useStyles();

  return (
    <AppBar>
      <Toolbar className={classes.toolbar}>
        <Box >



        </Box>
        <Box >
        </Box>
        <Hidden smDown>
          <Box style={{ display: "flex" }}>

            <Admin />
            <Language />
            <UserSwitch />


          </Box>
        </Hidden>

        <Hidden smDown>
          <Box>

            <Badge color='secondary'>
              <ForumIcon />
            </Badge>
            <Notification />
            <Messages />






          </Box>
        </Hidden>
        <Hidden mdUp>
          <IconButton color='inherit' onClick={handleDrawerToggle}>
            <MenuRoundedIcon />
          </IconButton>
        </Hidden>

      </Toolbar>
    </AppBar>
  );
}
