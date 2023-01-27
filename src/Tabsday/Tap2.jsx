// SecondTab.js

import './Style.css'
import { useNavigate } from "react-router-dom";
import React, {useState} from "react";
import { Button} from 'antd';
const Tap2 = () => {
  
  const [activeTab] = useState("Tap2");
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/tap3")}
  return (
    <div className="SecondTab">
      <p>Hello Cairo !!</p>

     
      {activeTab === "Tap2" && (
          <div>
            <Button type="primary" onClick={handleClick}>Go to 3</Button>
            
          </div>
        )}


        </div>
  );
};
export default Tap2;