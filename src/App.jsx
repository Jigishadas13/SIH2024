import React from "react";
import "./styles.css";
import Pie from './components/Pie';
import ColChart from "./components/ColChart";
//import IndiaMap from "./IndiaMap";
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Cards from './components/Cards';  // Adjusted path to Cards.jsx
//import AfforestationAnalytics from './components/AfforestationAnalytics';  // Adjusted path to AfforestationAnalytics.jsx



export default function App() {
  return (
   
     
     <div><IndiaMap/></div>
    /* <Router>
      <Routes>
        <Route path="/" element={<Cards />} />  
        <Route path="/afforestation" element={<AfforestationAnalytics />} />  
      </Routes>
    </Router>
  );
}*/
     <Router>
      <Routes>
        <Route path="/" element={<Cards />} />  
        <Route path="/carboncredits" element={<CarbonCredits/>} />  
      </Routes>
    </Router>
    
    
  );
}
