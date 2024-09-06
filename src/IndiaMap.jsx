import React, { useState, useRef } from "react";
import ReactDatamaps from "react-india-states-map";

// Define the states with and without coal mines
const STATES = {
  AndhraPradesh: {
    value: 0,
    content: { txt: "Andhra Pradesh has no coal mines." },
    hasCoalMine: false,
  },
  ArunachalPradesh: {
    value: 0,
    content: { txt: "Arunachal Pradesh has no coal mines." },
    hasCoalMine: false,
  },
  Assam: {
    value: 0,
    content: { txt: "Assam has no coal mines." },
    hasCoalMine: false,
  },
  Bihar: {
    value: 0,
    content: { txt: "Bihar has no coal mines." },
    hasCoalMine: false,
  },
  Chhattisgarh: {
    value: 30,
    content: { txt: "Chhattisgarh has coal mines." },
    hasCoalMine: true,
  },
  Goa: {
    value: 0,
    content: { txt: "Goa has no coal mines." },
    hasCoalMine: false,
  },
  Gujarat: {
    value: 0,
    content: { txt: "Gujarat has no coal mines." },
    hasCoalMine: false,
  },
  Haryana: {
    value: 0,
    content: { txt: "Haryana has no coal mines." },
    hasCoalMine: false,
  },
  HimachalPradesh: {
    value: 0,
    content: { txt: "Himachal Pradesh has no coal mines." },
    hasCoalMine: false,
  },
  Jharkhand: {
    value: 40,
    content: { txt: "Jharkhand has coal mines." },
    hasCoalMine: true,
  },
  Karnataka: {
    value: 0,
    content: { txt: "Karnataka has no coal mines." },
    hasCoalMine: false,
  },
  Kerala: {
    value: 0,
    content: { txt: "Kerala has no coal mines." },
    hasCoalMine: false,
  },
  MadhyaPradesh: {
    value: 0,
    content: { txt: "Madhya Pradesh has coal mines." },
    hasCoalMine: true,
  },
  Maharashtra: {
    value: 50,
    content: { txt: "Maharashtra has coal mines." },
    hasCoalMine: true,
  },
  WestBengal: {
    value: 10,
    content: { txt: "West Bengal has coal mines." },
    hasCoalMine: true,
  },
  // ... [other states]
};

const IndiaMap = () => {
  const [activeState, setActiveState] = useState({
    data: STATES.Maharashtra,
    name: "India",
  });
  
  const [hoveredState, setHoveredState] = useState(null);
  const mapRef = useRef(null);

  const stateOnClick = (data, name) => {
    setActiveState({ data, name });
  };

  const handleMouseEnter = (state) => {
    setHoveredState(state);
    const subunit = mapRef.current.querySelector(`.datamaps-subunit[data-id="${state}"]`);
    if (subunit) {
      subunit.style.fill = STATES[state].hasCoalMine ? "cyan" : "grey";
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
    <div className="flex justify-end p-4">
      <div className="w-3/4 md:w-1/2 lg:w-1/3" ref={mapRef}>
        <ReactDatamaps
          regionData={STATES}
          mapLayout={{
            hoverTitle: "State Info",
            noDataColor: "#ffffff", // Non-hover color (white for all states)
            borderColor: "#ffffff",
            hoverBorderColor: "#000000",
          }}
          hoverComponent={({ value }) => (
            <>
              <p>{value.name}</p>
              <p>{value.content?.txt || "No data available"}</p>
            </>
          )}
          onClick={stateOnClick}
          activeState={activeState}
          onMouseOver={handleMouseEnter}
          onMouseOut={handleMouseLeave}
        />
      </div>
    </div>
  );
};

export default IndiaMap;
