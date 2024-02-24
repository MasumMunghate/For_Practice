
import React, { useState } from 'react';
import { dummyData } from "./DummyData"

const DropDown_Box = () => {
    const [selectedCountry, setSelectedCountry] = useState('USA');
    const [selectedState, setSelectedState] = useState('California');
    
    const countries = [...new Set(dummyData.map(item => item.country))];
    const states = dummyData.filter(item => item.country === selectedCountry);
  
    const handleCountryChange = (event) => {
      const newCountry = event.target.value;
      setSelectedCountry(newCountry);
      setSelectedState(states.state);
    };
  
    return (
      <div>
        <label htmlFor="countryDropdown">Select Country:</label>
        <select
          id="countryDropdown"
          onChange={handleCountryChange}
          value={selectedCountry}
        >
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
  
        <label htmlFor="stateDropdown">Select State:</label>
        <select id="stateDropdown" value={selectedState}>
          {states.map((state) => (
            <option key={state.state} value={state.state}>
              {state.state}
            </option>
          ))}
        </select>
      </div>
    );
};

export default DropDown_Box;


