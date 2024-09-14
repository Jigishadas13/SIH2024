import React from 'react';
import { Chart } from "react-google-charts";

const data = [
  ["Fuel", "Emission"],
  ["Coal", 0.48],
  ["Oil/Gas", 0.38],
  ["Shale Gas", 0.04],
  ["Tar Gas", 0.1],
];

const options = {
  title: "Carbon Emissions by Fuel Type",
  pieHole: 0.4,
  is3D: false,
  titleTextStyle: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  legend: {
    textStyle: {
      color: '#FFFFFF',
    },
  },
  backgroundColor: {
    fill: 'transparent',
  },
};

const data1 = [
  ["Sector", "Emission"],
  ["Electricity and heat producers", 0.513],
  ["Commercial and public services", 0.13],
  ["Agriculture", 0.15],
  ["Residential", 0.39],
  ["Transport", 0.132],
  ["Industry", 0.247],
  ["Others", 0.16],
  ["Other energy industries", 0.26],
];

const options1 = {
  title: "Sectorwise Emissions",
  pieHole: 0.4,
  is3D: false,
  titleTextStyle: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  legend: {
    textStyle: {
      color: '#FFFFFF',
    },
  },
  backgroundColor: {
    fill: 'transparent',
  },
};

const CarbonEmission = () => {
  return (
    <div className="h-screen bg-gradient-to-b from-black to-gray-900">
      {/* Heading Section */}
      <div className="w-full bg-gradient-to-r from-blue-900 via-blue-800 to-blue-600 text-white p-5 shadow-lg rounded-lg mx-auto mt-5">
        <h1 className="text-4xl font-bold text-center">Carbon Emissions</h1>
      </div>
      
      {/* Body Section Divided into Two Halves */}
      <div className="flex h-3/4 mt-10">
        {/* Left Half - Donut Chart */}
        <div className="w-1/2 p-10 text-white flex flex-col justify-center items-center">
         
          <p className="text-lg  text-center">
            Coal remains the single largest source of global CO<sub>2</sub> emissions. 
            It produces far more carbon pollution than oil or natural gas, contributing significantly to climate change. 
            In fact, burning coal for electricity generation is responsible for more than 40% of all energy-related carbon emissions worldwide.
            The emissions intensity from coal is nearly double that of natural gas, making it a critical challenge in the fight against climate change. 
            Reducing coal consumption is key to lowering global carbon footprints.
          </p>
          
            <Chart
              chartType="PieChart"
              data={data1}
              options={options1}
              width="100%"
              height="400px"
            />
         
        </div>

        {/* Right Half - Pie Chart and Explanatory Text */}
        <div className="w-1/2 p-10 text-white flex flex-col justify-center items-center">

          <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width="100%"
            height="400px"
          />
         
        </div>
      </div>
    </div>
  );
};

export default CarbonEmission;
