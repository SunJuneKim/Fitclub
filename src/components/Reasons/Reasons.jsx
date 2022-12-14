import React from 'react';
import '../../App';
import Hero from '../Hero/Hero';
import Programs from '../Programs/Programs';
import './Reasons.css';
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";

export const Reasons = () => {
  return(
    <div className="Reasons" id="reasons">
        <div className="left-r">
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />
        </div>
        <div className="right-r"></div>
    </div>
  )
}

export default Reasons;