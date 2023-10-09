// Imports
import React from "react";
import Chart from "react-apexcharts";

function ApexChart() {
  const options = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        borderRadius: 8,
        distributed: true,
        columnWidth: "40%",
        endingShape: "rounded",
        startingShape: "rounded",
      },
    },
    legend: { show: false },
    grid: {
      strokeDashArray: 7,
      padding: {
        top: -1,
        right: 0,
        left: -12,
        bottom: 5,
      },
    },
    dataLabels: { enabled: false },
    colors: ["#9155fd"],

    states: {
      hover: {
        filter: { type: "none" },
      },
      active: {
        filter: { type: "none" },
      },
    },
    xaxis: {
      categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      tickPlacement: "on",
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false },
    },
    yaxis: {
      show: true,
      tickAmount: 4,
      labels: {
        offsetX: -17,
        formatter: (value) =>
          `${value > 999 ? `${(value / 1000).toFixed(0)}` : value}k`,
      },
    },
  };

  return (
    <Chart
      width={360}
      type="bar"
      height={205}
      options={options}
      series={[{ data: [37, 57, 45, 75, 57, 40, 65] }]}
    />
  );
}

export default ApexChart;
