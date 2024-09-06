import React, { useState, useEffect, useRef } from "react";
import ReactDatamaps from "react-india-states-map";

const IndiaMap = () => {
  const [states, setStates] = useState({});
  const [activeState, setActiveState] = useState({ data: {}, name: "India" });
  const [hoveredState, setHoveredState] = useState(null);
  const mapRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/firebase/database.json.txt'); // Ensure this path is correct
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const text = await response.text();
        const jsonData = JSON.parse(text);
        setStates(jsonData.states);
        console.log("Fetched states data:", jsonData.states); // Debugging log
      } catch (error) {
        console.error("Error fetching the data:", error);
      }
    };

    fetchData();
  }, []);

  const stateOnClick = (data, name) => {
    setActiveState({ data, name });
  };

  const handleMouseEnter = (state) => {
    setHoveredState(state);
    const subunit = mapRef.current.querySelector(`.datamaps-subunit[data-id="${state}"]`);
    if (subunit) {
      subunit.style.fill = states[state] ? "red" : "blue"; // Change color based on data presence
      subunit.style.transition = "fill 0.3s ease"; // Smooth transition
    }
  };

  const handleMouseLeave = (state) => {
    const subunit = mapRef.current.querySelector(`.datamaps-subunit[data-id="${state}"]`);
    if (subunit) {
      subunit.style.fill = "#ffffff"; // Reset to default color
    }
    setHoveredState(null);
  };

  return (
    <div className="flex justify-end p-4 relative">
      <div className="w-full h-full" ref={mapRef}>
        <ReactDatamaps
          regionData={states}
          mapLayout={{
            hoverTitle: "State Info",
            noDataColor: "#ffffff", // Non-hover color (white for all states)
            borderColor: "#000000",
            hoverBorderColor: "#000000",
          }}
          hoverComponent={({ value }) => {
            const stateData = states[value.name];
            return (
              <div className="bg-gray-800 text-white p-2 rounded shadow-lg max-w-xs break-words">
                <p className="font-bold">{value.name}</p>
                {stateData ? (
                  <>
                    <p>Carbon Emissions: {stateData.carbonEmissions} tons</p>
                    <p>Methane Emissions: {stateData.methaneEmissions} tons</p>
                    <p>Afforestation Area: {stateData.afforestationArea} hectares</p>
                  </>
                ) : (
                  <p>No Mine Here</p>
                )}
              </div>
            );
          }}
          onClick={stateOnClick}
          activeState={activeState}
          onMouseOver={handleMouseEnter}
          onMouseOut={handleMouseLeave}
        />
      </div>
      {hoveredState && (
        <div className="absolute bottom-0 left-0 p-4 bg-gray-700 text-white rounded-lg">
          <p>Hovered State: {hoveredState}</p>
        </div>
      )}
    </div>
  );
};

export default IndiaMap;
