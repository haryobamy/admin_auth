import React from "react";
import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { useStyles } from "./HeaderStyle";
import { Book, Dashboard, ExitToApp, NotificationsActive, PostAdd } from "@mui/icons-material";

export default function SidenavData({ handleDrawerClose }) {
  const classes = useStyles();
  const listItemData = [
    { label: "Dashboard", link: "/", icon: <Dashboard /> },
    { label: "Users", link: "/users", icon: <Book /> },
    { label: "Stations", link: "/stations", icon: <PostAdd /> },
  
    { label: "logout", link: "/logout", icon: <ExitToApp /> },
  ];

  return (
    <List>
      {listItemData.map((item, i) => (
        <Button
          size='small'
          onClick={() => handleDrawerClose()}
          className={classes.navButton}>
          <ListItem
            exact
            key={i}
            component={NavLink}
            to={item.link}
            className={classes.navlink}
            activeClassName={classes.selectedNav}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText>{item.label}</ListItemText>
          </ListItem>
        </Button>
      ))}
    </List>
  );
}
