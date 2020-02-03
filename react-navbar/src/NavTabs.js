import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Tabs, Tab, Icon, Tooltip } from "@material-ui/core";

function NavTabs({ items, size }) {
  //The current tab
  const [value, setValue] = useState(0);
  return (
    <Tabs
      variant="scrollable"
      value={value}
      onChange={(ev, val) => setValue(val)}
      indicatorColor="secondary"
      textColor="secondary"
      aria-label="icon label tabs example"
      scrollButtons="on"
    >
      {items.map(item => (
        <Tooltip title={item.tooltip} key={item.path}>
          <Tab
            icon={<Icon>{item.icon}</Icon>}
            label={size > parseInt(200 * items.length) ? item.label : ""}
            to={`${item.path}`}
            component={Link}
          />
        </Tooltip>
      ))}
    </Tabs>
  );
}

export default NavTabs;
