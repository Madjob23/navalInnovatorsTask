import React, { useState, useEffect, useRef } from 'react';
import "./navbar.css";

const Navbar = () => {
    const [activeTab, setActiveTab] = useState(0);
    const navRef = useRef(null);

    const handleTabClick = (index) => {
        setActiveTab(index);
    }
    
    // useEffect(() => {
    //     const navElement = navRef.current;
    
    //     const handleScroll = () => {
    //         if (navElement) {
    //             const scrollPosition = window.scrollY;
    //             navElement.style.position = scrollPosition > 0 ? 'fixed' : 'sticky';
    //             navElement.style.top = scrollPosition > 0 ? '0' : 'auto';
    //         }
    //     };

    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //     window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

  return (
    <>
      <nav ref={navRef}>
        <ul className="tabs">
          {['Syllabus', 'Q&A', 'Unit', 'Insights', 'Maps', 'Custom Preparation', 'AI Featured'].map((tab, index) => (
            <li 
              key={tab}
              onClick={() => handleTabClick(index)}
              className={`tab ${activeTab === index ? 'clickedTab' : ''}`}
            >
              {tab}
            </li>
          ))}
        </ul>
      </nav>
      <div className="quesNavbar">
        <div className="quesNavbarLeft">
            <span>Total: <span id="currntPgQuesCount">15</span></span>
            <span className="pgNav">
                <span className="pgLeft">&lt;</span>
                <span className="pgNo">1</span>
                <span className="pgRight">&gt;</span>
            </span>
        </div>
        <select name="quesFilter" id="quesFilter">
            <option value="null" selected>None</option>
            <option value="option1" id="filterOption">Option 1</option>
            <option value="option2" id="filterOption">Option 2</option>
            <option value="option3" id="filterOption">Option 3</option>
            <option value="option4" id="filterOption">Option 4</option>
        </select>
      </div>
    </>
  )
}

export default Navbar;
