// with the Help of Call back Function

import { useState } from "react";

const ChildComponent = ({ onDataFromChild }) => {
  const [inputValue, setInputValue] = useState(""); // This State hold The value of input feild 
  const sendDatatoParent = () => {
    onDataFromChild(inputValue);
  };
  return (
    <>
      <h1>Child Component</h1>
      <input type="text"  onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={sendDatatoParent}>Send Data To parent</button>
    </>
  );
};

export default ChildComponent;

// In ChildComponent, we initialize a state variable inputValue using useState. This state will hold the value of the input field.  When sendDataToParent is called, it triggers the onDataFromChild function received from the parent (via props) and passes inputValue as an argument.  When the button is clicked, sendDataToParent is called, initiating the data transfer to the parent component.