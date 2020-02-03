import React, { useState } from "react";
import {
  Tab,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Tooltip
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { Link } from "react-router-dom";

function NavDrawer({ items }) {
  //Is drawer opened?
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Tooltip title="Navigation Menu">
        <Tab icon={<Menu />} onClick={() => setOpen(true)} />
      </Tooltip>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <div
          role="presentation"
          onClick={() => setOpen(false)}
          onKeyDown={() => setOpen(false)}
        >
          <List>
            {items.map(({ label, icon, Tooltip: tooltip = "", path }) => (
              <Tooltip title={tooltip} key={path}>
                <ListItem button to={`${path}`} component={Link} key={label}>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText primary={label} />
                </ListItem>
              </Tooltip>
            ))}
          </List>
          <Divider />
        </div>
      </Drawer>
    </div>
  );
}

export default NavDrawer;
