import React from "react";
import NavDrawer from "./NavDrawer";
import NavTabs from "./NavTabs";
import useWindowSize from "./_useWindowSize";
/**
 * Generic Navigation bar component that gets its description from props
 */

function Navbar({ items }) {
  const size = useWindowSize();
  console.log(size);
  return size.width > 956 ? (
    <>
      <NavDrawer items={items} size={size} />
    </>
  ) : (
    <>
      <NavTabs items={items} size={size} />
    </>
  );
}
export default Navbar;
