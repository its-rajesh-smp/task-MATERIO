// Imports
import * as React from "react";
import { BarChart as DefaultBarChart } from "@mui/x-charts/BarChart";

// SCSS Imports
import "./BarChart.scss";

export default function BarChart() {
  return (
    <DefaultBarChart
      series={[{ data: [4, 3, 5, 8, 9, 10, 5, 10, 1, 4], color: "#9155fd" }]}
      width={360}
      height={300}
    />
  );
}
