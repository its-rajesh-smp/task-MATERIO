// Imports
import { Avatar } from "@mui/material";
import React from "react";
import {
  NotificationsOffOutlined,
  ModeNightOutlined,
} from "@mui/icons-material";

// Import CSS
import "./HeaderLists.scss";

function HeaderLists() {
  return (
    <div className="Header_headerList">
      <ModeNightOutlined className="Header_headerList_icon" />
      <NotificationsOffOutlined className="Header_headerList_icon" />
      <Avatar />
    </div>
  );
}

export default HeaderLists;
