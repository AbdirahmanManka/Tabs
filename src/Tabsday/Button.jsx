// SecondTab.js
import { Button} from 'antd';
import { useNavigate} from 'react-router-dom';
import 'antd/dist/antd.css'
import React from "react";
import './Style.css'

const Now= () => {

  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-2);
}
  
  return (
    <div className="SecondTab">






<Button type="primary"  onClick={handleBack}>Lets Go back</Button>



      
     



        </div>
  );
};
export default Now;