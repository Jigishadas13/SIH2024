import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "forest cover:(Mha)", { role: "style" }],
  [1999, 65, "#00FFFF"], // RGB value
  [2003, 69, "#00FFFF"], // English color name
  [2007, 66, "#00FFFF"],
  [2011, 68, "#00FFFF"],
  [2015, 69.5, "#00FFFF"],
  
  [2019, 70, "#00FFFF"],
  [2023, 70.5, "#00FFFF"],
  [2027, 70.7, "#00FFFF"],
  [2031, 70.9, "#00FFFF"],
  // CSS-style declaration
];

const AfforestationAnalytics = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-gray-900 p-6">
      <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white py-4 px-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold">Afforestation Analytics</h1>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-stretch mt-8">
        
        <div className="w-full lg:w-1/2 flex items-center"> 
          <img 
            src="/images/indiaforestshare.png"  // Replace with your actual image path
            alt="Afforestation Effort"
            className="rounded-lg shadow-md w-full h-auto"
          />
        </div>

        <div className="w-full lg:w-1/2 pl-6 bg-gradient-to-r from-gray-800 to-black text-white p-4 rounded-lg shadow-md flex flex-col"> 
          <div>
            <h2 className="text-2xl font-bold">Greening India, One Tree at a Time</h2>
            <p className="text-lg mt-4">
              After facing declines, India's forests are bouncing back stronger. The nation's dedication to reforestation and sustainable practices has gradually turned the tide, now covering over 20% of its landmass with lush greenery.
              Historically, deforestation due to agricultural expansion, urbanization, and industrial activities led to a significant reduction in forest cover, threatening biodiversity and contributing to soil erosion and climate change. By the early 2000s, the nation faced serious challenges, with forest cover dwindling to around 18% of its total land area.
            </p>
          </div>

          {/* Chart Section */}
          <div className="mt-8 bg-gradient-to-r from-gray-800 to-black p-4 rounded-lg shadow-md">
            <Chart
              chartType="ColumnChart"
              width="100%"
              height="400px"
              data={data}
              options={{
                backgroundColor: 'transparent', // Make the chart background transparent
                colors: ['#87CEEB'], // Light blue color for columns
                legend: { textStyle: { color: 'white' } }, // White text for legend
                hAxis: {
                  textStyle: { color: 'white' }, // White text for horizontal axis
                },
                vAxis: {
                  textStyle: { color: 'white' }, // White text for vertical axis
                },
                titleTextStyle: { color: 'white' }, // White text for title
                is3D: true, // Optional: 3D effect for the chart
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AfforestationAnalytics;
