import React from "react";
import {
  AppBar,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { useStyles } from "./HeaderStyle";


import Notification from "./ActionTab/Notification";
import Profile from "./ActionTab/Profile";
import Messages from "./ActionTab/Messages";
import { MenuRounded } from "@mui/icons-material";

export default function NavbarComponent({ handleDrawerToggle }) {
  const classes = useStyles();

  return (
    <AppBar>
      <Toolbar className={classes.toolbar}>
        <Box style={{ display: "flex" }}>
          <Typography variant='h6' className={classes.logo}>
          My admin Dashboard
          </Typography>
        </Box>
        <Hidden smDown>
          <Box>
            <Notification />
            <Messages />
            <Profile />
          </Box>
        </Hidden>
        <Hidden mdUp>
          <IconButton color='inherit' onClick={handleDrawerToggle}>
            <MenuRounded />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}
