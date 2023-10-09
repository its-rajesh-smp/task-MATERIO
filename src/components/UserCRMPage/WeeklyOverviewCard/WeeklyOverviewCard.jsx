// Imports
import React from "react";
import Card from "../../Wrappers/Card/Card";
import TitleWithMenuIcon from "../../UI/TitleWithMenuIcon/TitleWithMenuIcon";

import { Typography, Box, Button } from "@mui/material";

// SCSS IMPORT
import "./WeeklyOverviewCard.scss";
import ApexChart from "../../Charts/ApexChart/ApexChart";

function WeeklyOverviewCard() {
  return (
    <Card className="WeeklyOverviewCard">
      <TitleWithMenuIcon title="Weekly Overview" />

      {/* <BarChart /> */}
      <ApexChart />

      <Box className="description_box">
        <Typography variant="h5">25%</Typography>
        <p>Your sales performance is 45% 😎 better compared to last month</p>
      </Box>

      <Button variant="contained" className="detailsBtn">
        DETAILS
      </Button>
    </Card>
  );
}

export default WeeklyOverviewCard;
