import React from 'react';
import "./header.css";

const Header = () => {
  return (
    <header>
        <div className="headerLeft">
            <span className="headerTitle">Name of Book!</span>
            <ul className="headerInfoList">
                <li className="headerInfoItem">University Name</li>
                <li className="headerInfoItem">Subject Code</li>
                <li className="headerInfoItem">1st Year</li>
                <li className="headerInfoItem">Branch</li>
            </ul>
        </div>
        <div className="headerRight">
            35%
        </div>
    </header>
  );
}

export default Header;
