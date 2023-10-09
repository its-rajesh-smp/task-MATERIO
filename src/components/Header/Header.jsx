// Imports
import * as React from "react";

// CSS Imports
import "./Header.scss";
import HeaderSearch from "./UI/HeaderSearch/HeaderSearch";
import HeaderLists from "./UI/HeaderLists/HeaderLists";

function Header() {
  return (
    <div className="header_div">
      <HeaderSearch />
      <HeaderLists />
    </div>
  );
}
export default Header;
