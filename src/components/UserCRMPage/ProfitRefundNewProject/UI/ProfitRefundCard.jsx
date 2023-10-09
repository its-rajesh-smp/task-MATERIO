// Imports
import React from "react";
import Card from "../../../Wrappers/Card/Card";
import { Box } from "@mui/material";
import generateRandomColor from "../../../../functions/generateRandomColor";
import TitleWithMenuIcon from "../../../UI/TitleWithMenuIcon/TitleWithMenuIcon";

// SCSS Import
import "./ProfitRefundCard.scss";

function ProfitRefundCard({ icon, amount, discount, title, subtitle }) {
  return (
    <Card className="ProfitRefundCard">
      <TitleWithMenuIcon
        icon={
          <Box
            style={{ backgroundColor: generateRandomColor() }}
            className="icon_container"
          >
            {icon}
          </Box>
        }
      />

      <p className="title">{title}</p>

      <Box className="amount_container">
        <h6>{amount}</h6>
        <p
          style={{ color: discount.includes("-") ? "red" : "rgb(86, 202, 0)" }}
        >
          {discount}
        </p>
      </Box>

      <p className="subtitle">{subtitle}</p>
    </Card>
  );
}

export default ProfitRefundCard;
