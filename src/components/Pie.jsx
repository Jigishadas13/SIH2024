
import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["State", "Percentage of Raw Coal"],
  ["Maharashtra", 674],
  ["Madhya Pradesh", 1525],
  ["Jharkhand", 1707],
  ["Chhattisgarh", 2117],
  ["West Bengal", 490],
  ["Uttar Pradesh", 555],
  ["Telangana", 731],
  ["Odisha", 2199],
];

const options = {
  title: "Raw Coal Data",
  is3D: true,
  legend: {
    position: "bottom", // Move legend to the bottom
  },
};

function Pie() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"300px"} // Increased height to accommodate legend
    />
  );
}

export default Pie;


