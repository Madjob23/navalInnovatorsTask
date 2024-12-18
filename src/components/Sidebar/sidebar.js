import React from 'react';
import "./sidebar.css";
import Unitselector from '../UnitSelector/unitselector';
import Queslist from '../Queslist/queslist';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Unitselector />
      <Queslist />
    </div>
  )
}

export default Sidebar;
