// Imports
import React from "react";
import ProfitRefundCard from "./UI/ProfitRefundCard";
import { Box } from "@mui/material";
import {
  AddBox,
  AutoGraphSharp,
  CurrencyBitcoin,
  QuestionMark,
} from "@mui/icons-material";

// SCSS Imports
import "./ProfitRefundNewProject.scss";

function ProfitRefundNewProject() {
  return (
    <Box className="ProfitRefundNewProject">
      <ProfitRefundCard
        title="Total Profit"
        subtitle="Weekly Profit"
        amount="$25.6k"
        discount="+42%"
        icon={<AutoGraphSharp />}
      />
      <ProfitRefundCard
        title="Refunds"
        subtitle="Past Month"
        amount="$78"
        discount="-15%"
        icon={<CurrencyBitcoin />}
      />
      <ProfitRefundCard
        title="New Project"
        subtitle="Yearly Project"
        amount="862"
        discount="-18%"
        icon={<AddBox />}
      />
      <ProfitRefundCard
        title="Sales Queries"
        subtitle="Last Week"
        amount="15"
        discount="-18%"
        icon={<QuestionMark />}
      />
    </Box>
  );
}

export default ProfitRefundNewProject;
