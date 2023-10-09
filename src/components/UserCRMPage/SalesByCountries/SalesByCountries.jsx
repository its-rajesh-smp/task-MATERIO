// Imports
import React from "react";
import Card from "../../Wrappers/Card/Card";
import TitleWithMenuIcon from "../../UI/TitleWithMenuIcon/TitleWithMenuIcon";
import { Box } from "@mui/material";
import { KeyboardArrowUp, KeyboardArrowDown } from "@mui/icons-material";
import generateRandomColor from "../../../functions/generateRandomColor";

// SCSS IMPORTS
import "./SalesByCountries.scss";

function SalesByCountries() {
  return (
    <Card className="SalesByCountries">
      <TitleWithMenuIcon title="Sales by Countries" />
      <Box className="SalesByCountries_itemcontaienr">
        <SalesByCountryItem
          countryName="USA"
          discount="+25.8"
          sales="894k"
          amount="8,656k"
        />
        <SalesByCountryItem
          countryName="INDIA"
          discount="+12.5"
          sales="148k"
          amount="865k"
        />
        <SalesByCountryItem
          countryName="JAPAN"
          discount="-11.9"
          sales="745k"
          amount="86k"
        />
        <SalesByCountryItem
          countryName="KORIA"
          discount="+16.2"
          sales="72k"
          amount="42k"
        />
      </Box>
    </Card>
  );
}

export default SalesByCountries;

function SalesByCountryItem({ countryName, amount, discount, sales }) {
  return (
    <Box className="SalesByCountryItem">
      <Box className="SalesByCountryItem_box">
        {/* ICON SIDE */}
        <Box
          style={{ backgroundColor: generateRandomColor() }}
          className="icon_side"
        >
          <p>{`${countryName[0] + countryName[1]}`}</p>
        </Box>

        {/* CENTER */}
        <Box className="center_side">
          <Box className="center_side_box">
            <p>${amount}</p>

            {discount.includes("+") ? (
              <KeyboardArrowUp style={{ color: "rgb(86, 202, 0)" }} />
            ) : (
              <KeyboardArrowDown style={{ color: "red" }} />
            )}

            <p
              style={{
                color: discount.includes("+") ? "rgb(86, 202, 0)" : "red",
              }}
            >
              {discount}%
            </p>
          </Box>

          <p className="countryName">USA</p>
        </Box>
      </Box>

      {/* END */}
      <Box className="end_side">
        <p>{sales}</p>
        <p>Sales</p>
      </Box>
    </Box>
  );
}
