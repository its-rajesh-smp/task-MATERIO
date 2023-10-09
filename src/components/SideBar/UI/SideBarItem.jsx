// Imports
import React from "react";

// CSS IMPORT
import "./SideBarItem.scss";
import { NavLink } from "react-router-dom";
import { Box } from "@mui/material";

function SideBarItem({ icon, title, path, onClick }) {
  if (path) {
    return (
      <NavLink
        onClick={onClick && onClick}
        to={path}
        className="SideBarItem_box"
      >
        {icon}
        <p>{title}</p>
      </NavLink>
    );
  }

  return (
    <Box onClick={onClick && onClick} className="SideBarItem_box">
      {icon}
      <p>{title}</p>
    </Box>
  );
}

export default SideBarItem;
