// IMPORTS
import React from "react";
import { Box } from "@mui/material";
import CardsWrapper from "../../components/UserCRMPage/CardsWrapper/CardsWrapper";
import CongratulationCard from "../../components/UserCRMPage/CongratulationCard/CongratulationCard";
import StatisticsCard from "../../components/UserCRMPage/StatisticsCard/StatisticsCard";
import WeeklyOverviewCard from "../../components/UserCRMPage/WeeklyOverviewCard/WeeklyOverviewCard";
import TotalEarningCard from "../../components/UserCRMPage/TotalEarningCard/TotalEarningCard";
import ProfitRefundNewProject from "../../components/UserCRMPage/ProfitRefundNewProject/ProfitRefundNewProject";
import CRMTable from "../../components/Tables/CRMTable";
import PageWrapper from "../../components/Wrappers/PageWrapper/PageWrapper";
import SalesByCountries from "../../components/UserCRMPage/SalesByCountries/SalesByCountries";

// CSS IMPORTS
import "./UsersCRM.scss";

function UsersCRM() {
  return (
    <PageWrapper>
      <Box className="UsersCRMPage">
        <CardsWrapper>
          <CongratulationCard />
          <StatisticsCard />
        </CardsWrapper>

        <CardsWrapper>
          <WeeklyOverviewCard />
          <TotalEarningCard />
          <ProfitRefundNewProject />
        </CardsWrapper>

        <CardsWrapper>
          <SalesByCountries />
        </CardsWrapper>

        <CardsWrapper>
          <CRMTable />
        </CardsWrapper>
      </Box>
    </PageWrapper>
  );
}

export default UsersCRM;
