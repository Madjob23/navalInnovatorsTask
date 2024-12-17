import React from 'react';
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <select name="unitSelector" id="unitSelector">
        <option value="null" selected>Select unit</option>
        <option value="unit1">Unit 1 <span id="unitCompletion"></span></option>
        <option value="unit2">Unit 2 <span id="unitCompletion"></span></option>
        <option value="unit3">Unit 3 <span id="unitCompletion"></span></option>
        <option value="unit4">Unit 4 <span id="unitCompletion"></span></option>
        <option value="unit5">Unit 5 <span id="unitCompletion"></span></option>
      </select>
    </div>
  )
}

export default Sidebar;
