// Import
import React from "react";
import Card from "../../Wrappers/Card/Card";
import { Button, Typography, Box } from "@mui/material";

// SCSS IMPORT
import "./CongratulationCard.scss";
import TitleWithMenuIcon from "../../UI/TitleWithMenuIcon/TitleWithMenuIcon";

function CongratulationCard() {
  return (
    <Card className="CongratulationCard">
      <TitleWithMenuIcon title="Congratulations John! 🥳" hideMenuIcon={true} />
      <Typography className="subtitle" variant="subtitle2">
        Best seller of the month
      </Typography>
      <Box className="box">
        <Box className="amountAndButton_box">
          <Typography className="amount" variant="h5">
            $42.8k
          </Typography>
          <Button className="button">VIEW SALES</Button>
        </Box>
        <img src="https://demos.themeselection.com/materio-mui-react-nextjs-admin-template-free/images/misc/trophy.png" />
      </Box>
    </Card>
  );
}

export default CongratulationCard;
