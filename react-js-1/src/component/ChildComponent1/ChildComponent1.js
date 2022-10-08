import React from "react";
import "./ChildComponent1.css";
// import GrandChildComponent1 from "../GrandChildComponent1/GrandChildComponent1";

import Counter from "./Counter";

const ChildComponent1 = () => {
    return (
        <div className="ChildComponent1" >
      {/* <h2> Child Component 1</h2>
      <GrandChildComponent1
        heading="Heading 1"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          backgroundColor= "red"
      />
      <GrandChildComponent1
        heading="Heading 2"
              description="Lorem Ipsum has been the industrys standard dummy text ever since the 1500s"
              backgroundColor= "blue"
      />
      <GrandChildComponent1 heading="Heading 3" />
      <GrandChildComponent1 heading="Heading 4" />
      <GrandChildComponent1 heading="Heading 5" /> */}
        
        <Counter />
    </div>
  );
};

export default ChildComponent1;
