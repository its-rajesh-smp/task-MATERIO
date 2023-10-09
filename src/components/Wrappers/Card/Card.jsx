// Import
import { Card as MUICard } from "@mui/material";
import React from "react";

// CSS Import
import "./Card.scss";

function Card({ children, className }) {
  return (
    <div className={`card ${className && className}`} elevation={2}>
      {children}
    </div>
  );
}

export default Card;
