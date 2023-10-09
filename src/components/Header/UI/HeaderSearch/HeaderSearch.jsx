// Imports
import React from "react";
import { Box } from "@mui/material";
import { SearchRounded } from "@mui/icons-material";

// Import CSS
import "./HeaderSearch.scss";

function HeaderSearch() {
  return (
    <Box className="HeaderSearch_box">
      <SearchRounded className="search_icon" />
      <input />
    </Box>
  );
}

export default HeaderSearch;
