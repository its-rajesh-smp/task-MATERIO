// Imports
import React from "react";

// CSS Import
import "./AccessDenied.scss";
import { Container } from "@mui/material";
import NotFound from "../../components/NotFound/NotFound";
import { NO_ACCESS_IMAGE } from "../../config/app_config";

function AccessDenied() {
  return (
    <Container>
      <NotFound
        title={"YOU DONT HAVE ACCESS"}
        imagesrc={NO_ACCESS_IMAGE}
        buttonText={"Go Back"}
      />
    </Container>
  );
}

export default AccessDenied;
