// with the Help of Call back Function

import { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const [dataFromChild, setDataFromChild] = useState(""); // this State Hold the data recive from the child

  // handleChiuldFromData take the data as a Argument and update the dataFromChild state when called
  const handleChildFromData = (data) => {
    setDataFromChild(data);
  };

  return (
    <>
      <h1>Parent Component</h1>
      <ChildComponent onDataFromChild={handleChildFromData} />
      <p>Data FromChild :-{dataFromChild}</p>
    </>
  );
};

export default ParentComponent;

// When the child component sends data using onDataFromChild(inputValue), it triggers the handleDataFromChild function in the parent component. This function updates the dataFromChild state.
