import React from "react";
import './GrandChildComponent1.css'

const GrandChildComponent1 = ({ heading, description, backgroundColor }) => {
  // console.log(props);
    return (
    <div className="GrandChildComponent1" style={{backgroundColor: backgroundColor}}>
      <h3>{heading}</h3>
      <p>
        {description}
      </p>
    </div>
  );
};

export default GrandChildComponent1;
