// Imports
import { Container } from "@mui/material";
import React from "react";
import NotFound from "../../components/NotFound/NotFound";
import { NOT_FOUND_IMAGE } from "../../config/app_config";

// CSS Imports
import "./PageNotFound.scss";

function PageNotFound() {
  return (
    <Container className="PageNotFound_container">
      <NotFound
        imagesrc={NOT_FOUND_IMAGE}
        buttonText={"Go BACK"}
        title={"PAGE NOT FOUND"}
      />
    </Container>
  );
}

export default PageNotFound;
