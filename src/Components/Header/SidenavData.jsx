import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import BookIcon from "@material-ui/icons/Book";
import DashboardIcon from "@material-ui/icons/Dashboard";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import PostAddIcon from "@material-ui/icons/PostAdd";
import React from "react";
import { NavLink } from "react-router-dom";
import Profile from "./ActionTab/Profile";
import { useStyles } from "./HeaderStyle";

export default function SidenavData({ handleDrawerClose }) {
  const classes = useStyles();
  const listItemData = [
    { label: "Dashboard", link: "/", icon: <DashboardIcon /> },
    { label: "Payments", link: "/payments", icon: <DashboardIcon /> },
    { label: "Donors", link: "/donors", icon: <PostAddIcon /> },
    { label: "Blog Post", link: "/blog", icon: <BookIcon /> },
    { label: "Policies", link: "/blog", icon: <BookIcon /> },
    { label: "Link 1", link: "/link1", icon: <PostAddIcon /> },
    {
      label: "Notification",
      link: "/notification",
      icon: <NotificationsActiveIcon />,
    },
   
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
      <Profile/>
    </List>
  );
}
