// Imports
import React from "react";
import Card from "../../Wrappers/Card/Card";
import TitleWithMenuIcon from "../../UI/TitleWithMenuIcon/TitleWithMenuIcon";
import { Box } from "@mui/material";
import {
  ShowChart,
  Person4Outlined,
  TvOffOutlined,
  CurrencyBitcoin,
} from "@mui/icons-material";
import generateRandomColor from "../../../functions/generateRandomColor";

// SCSS Import
import "./StatisticsCard.scss";

function StatisticsCard() {
  return (
    <Card className="StatisticsCard">
      <TitleWithMenuIcon title="Statistics Card" />
      <p>
        Total 48.5% growth 😎 <span>this month</span>
      </p>

      <Box className="StatisticsCardElements_box">
        <StatisticsCardElement
          icon={<ShowChart />}
          title="Sales"
          amount="250k"
        />
        <StatisticsCardElement
          icon={<Person4Outlined />}
          title="Sales"
          amount="250k"
        />
        <StatisticsCardElement
          icon={<TvOffOutlined />}
          title="Sales"
          amount="250k"
        />
        <StatisticsCardElement
          icon={<CurrencyBitcoin />}
          title="Sales"
          amount="250k"
        />
      </Box>
    </Card>
  );
}

export default StatisticsCard;

/* -------------------------------------------------------------------------- */
/*                            StatisticsCardElement                           */
/* -------------------------------------------------------------------------- */

function StatisticsCardElement({ title, amount, icon }) {
  return (
    <Box className="StatisticsCardElement">
      <Box
        style={{ backgroundColor: generateRandomColor() }}
        className="iconContainer"
      >
        {icon}
      </Box>
      <Box className="titleAndAmountContainer">
        <p>{title}</p>
        <p>{amount}</p>
      </Box>
    </Box>
  );
}
