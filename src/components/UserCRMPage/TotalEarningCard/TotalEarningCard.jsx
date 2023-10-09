// Imports
import React from "react";
import Card from "../../Wrappers/Card/Card";
import TitleWithMenuIcon from "../../UI/TitleWithMenuIcon/TitleWithMenuIcon";
import { Box, Typography } from "@mui/material";
import { ArrowDropUp } from "@mui/icons-material";
import IconWithTitleSubtitle from "../../UI/IconWithTitleSubtitle/IconWithTitleSubtitle";
import ProgressBar from "../../UI/ProgressBar/ProgressBar";
import {
  AVIATO_IMAGE,
  BITBANK_IMAGE,
  ZIPCAR_IMAGE,
} from "../../../config/app_config";

// SCSS Import
import "./TotalEarningCard.scss";

function TotalEarningCard() {
  return (
    <Card className="TotalEarningCard">
      <TitleWithMenuIcon title="Total Earning" />

      <Box className="amountSection">
        <Box className="amountSection__box">
          <Typography variant="h4">$24,895</Typography>
          <ArrowDropUp className="arrow_icon" />
          <p>10%</p>
        </Box>
        <p>Compared to $84,325 last year</p>
      </Box>

      <Box className="TotalEarningItem_boxcontainer">
        <TotalEarningItem
          title="Zipcar"
          subtitle="Vuejs, React & HTML"
          amount="24,895.65"
          img={ZIPCAR_IMAGE}
        />

        <TotalEarningItem
          title="Bitbank"
          subtitle="Sketch, Figma & XD"
          amount="8,650.20"
          img={BITBANK_IMAGE}
        />

        <TotalEarningItem
          title="Aviato"
          subtitle="HTML & Angular"
          amount="10,245.80"
          img={AVIATO_IMAGE}
        />
      </Box>
    </Card>
  );
}

export default TotalEarningCard;

function TotalEarningItem({ title, subtitle, amount, img }) {
  return (
    <Box className="TotalEarningItem">
      <IconWithTitleSubtitle img={img} title={title} subtitle={subtitle} />
      <Box className="TotalEarningItem_box">
        <p>${amount}</p>
        <ProgressBar amount={Number(amount.replaceAll(",", ""))} />
      </Box>
    </Box>
  );
}
