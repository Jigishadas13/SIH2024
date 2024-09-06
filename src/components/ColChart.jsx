
import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["State", "Share%", { role: "style" }],
  ["Odisha", 24.52, "#00FFFF"],
  ["Chhattisgarh", 20.70, "#00FFFF"],
  ["Jharkhand", 17.52, "#00FFFF"],
  ["Madhya Pradesh", 16.35, "#00FFFF"],
  ["Telangana", 7.80, "#00FFFF"],
  ["Maharashtra", 7.12, "#00FFFF"],
  ["West Bengal", 3.68, "#00FFFF"],
  ["Uttar Pradesh", 2.30, "#00FFFF"],
];

const ColChart = () => {
  return (
    <div className="bg-black w-full p-4">
      <Chart
        chartType="ColumnChart"
        width={"70%"}
        height={"400px"}
        options={{
          backgroundColor: "transparent",
          animation: {
            duration: 500,
            easing: "linear",
            startup: true,
          },
          colors: ["#00FFFF"],
          hoverOption: {
            trigger: "both",
          },
          columns: [
            {
              calc: "stringify",
              sourceColumn: 0,
              type: "string",
              role: "annotation",
            },
            {
              calc: "stringify",
              sourceColumn: 1,
              type: "number",
              role: "domain",
            },
            {
              calc: function (dt, row) {
                return { v: dt.getValue(row, 1), f: "#FF69B4" };
              },
              type: "number",
              role: "style",
            },
          ],
          bar: {
            width: 20,
          },
          hAxis: {
            slantedText: true,
            slantedTextAngle:30,
            textPosition: "out",
            textStyle: {
              color: "white",
              fontSize: 14,
              fontName: "Roboto",
            },
          },
          title: "State-wise Share Percentage of Raw Coal Production during 2022-23", // Add a title to the chart
          titleTextStyle: {
            color: "white",
            fontSize: 24,
            fontName: "Roboto",
          },
          vAxis: {
            textStyle: {
              color: "white",
              fontSize: 14,
              fontName: "Roboto",
            },
          },
          legend: {
            textStyle: {
              color: "white",
              fontSize: 14,
              fontName: "Roboto",
            },
          },
        }}
        data={data}
      />
    </div>
  );
};

export default ColChart;