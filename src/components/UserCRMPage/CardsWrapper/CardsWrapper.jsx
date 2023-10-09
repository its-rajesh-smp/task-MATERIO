// Imports
import { Box } from "@mui/material";
import React from "react";

// SCSS IMPORTS
import "./CardsWrapper.scss";

function CardsWrapper({ children }) {
  return <Box className="cardsWrapper_box">{children}</Box>;
}

export default CardsWrapper;
