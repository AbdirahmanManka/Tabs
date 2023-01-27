// FirstTab.js

import React,{useState}from "react";
import { useNavigate } from "react-router-dom";
import { Button} from 'antd';
import 'antd/dist/antd.css'
const FirstTab = () => {
  const [activeTab] = useState("Tab1");
const navigate = useNavigate();
const handleClick = () => {
  navigate("/tap1")
}
  return (
    <div className="FirstTab">
      <p>Hello Nairobi !!</p>
      {/* First tab content will go here */}
      <div>
        <div>
         
        </div>
        {activeTab === "Tab1" && (
          <div>
            <Button type="primary" onClick={handleClick}>Create</Button>
            
          </div>
        )}
      </div>

    </div>
  );
};
export default FirstTab;
