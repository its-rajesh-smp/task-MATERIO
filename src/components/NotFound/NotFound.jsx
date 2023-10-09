// Imports
import { Box, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

// CSS imports
import "./NotFound.scss";

function NotFound({ title, imagesrc, buttonText }) {
  /**
   * Hooks Assignments
   */
  const navigate = useNavigate();

  return (
    <Box className="NotFound_box">
      <img className="NotFound_image" src={imagesrc} />
      <h1>{title}</h1>
      {buttonText && <Button onClick={() => navigate(-1)}>{buttonText}</Button>}
    </Box>
  );
}

export default NotFound;
