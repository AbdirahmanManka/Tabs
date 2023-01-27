import React, { useState } from "react";
import Tap1 from "./Tap1";
import Tap2 from "./Tap2";




 
const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab2");
  //  Functions to handle Tab Switching
  const handleTab1 = () => {
    // update the state to tab1
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    // update the state to tab2
    setActiveTab("tab2");
  };
  return (
    <div className="Tabs">
    
      <ul className="nav">
        <li
          className={activeTab === "tab1" ? "active" : ""}
          onClick={handleTab1}
        >
          Tab 1
        </li>
        <li
          className={activeTab === "tab2" ? "active" : ""}
          onClick={handleTab2}
        >
          Tab 2
        </li>
      </ul>
 
      <div className="outlet">
        {activeTab === "tab1" ? <Tap1/> : <Tap2/>}
      
      </div>
    </div>
  );
};
export default Tabs;