// Imports
import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { MoreVert } from "@mui/icons-material";

// Scss Import
import "./TitleWithMenuIcon.scss";

function TitleWithMenuIcon({ icon, title, hideMenuIcon }) {
  return (
    <Box className="TitleWithMenuIcon">
      {icon}
      {!icon && <Typography variant="h6">{title}</Typography>}
      {!hideMenuIcon && (
        <IconButton>
          <MoreVert />
        </IconButton>
      )}
    </Box>
  );
}

export default TitleWithMenuIcon;
