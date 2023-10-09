// Imports
import React from "react";
import generateRandomColor from "../../../functions/generateRandomColor";

// SCSS Import
import "./ProgressBar.scss";

function ProgressBar({ amount }) {
  const maxAmount = 30325;
  const currentAmout = (amount / maxAmount) * 100;
  const [outerColor, innerColor] = generateRandomColor(true);

  const innerWidth = `${Math.min(currentAmout, 100)}%`;
  return (
    <div style={{ backgroundColor: outerColor }} className="Outer">
      <div
        style={{ backgroundColor: innerColor, width: innerWidth }}
        className="Inner"
      ></div>
    </div>
  );
}

export default ProgressBar;
