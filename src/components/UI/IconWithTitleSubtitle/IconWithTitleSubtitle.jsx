// Imports
import { Facebook } from "@mui/icons-material";
import { Box } from "@mui/material";
import React from "react";

// SCSS Import
import "./IconWithTitleSubtitle.scss";

function IconWithTitleSubtitle({ title, subtitle, img }) {
  return (
    <Box className="IconWithTitleSubtitle">
      <Box className="icon_box">
        {/* <Facebook /> */}
        <img src={img} alt="" />
      </Box>
      <Box className="titleAndSubtitle_box">
        <p>{title}</p>
        <p>{subtitle}</p>
      </Box>
    </Box>
  );
}

export default IconWithTitleSubtitle;
