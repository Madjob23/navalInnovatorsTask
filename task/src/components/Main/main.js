import React from 'react';
import "./main.css";

const Main = () => {

  const handleTabClick = (e) => {
    const anyClicked = document.querySelector('.clickedTab');
    if (anyClicked) {
        anyClicked.classList.remove('clickedTab');
    }
    e.target.classList.add('clickedTab');
  }
    
  return (
    <div className='main'>
      <nav>
        <ul className="tabs">
            <li onClick={handleTabClick} className="tab">Syllabus</li>
            <li onClick={handleTabClick} className="tab">Q&A</li>
            <li onClick={handleTabClick} className="tab">Unit</li>
            <li onClick={handleTabClick} className="tab">Insights</li>
            <li onClick={handleTabClick} className="tab">Maps</li>
            <li onClick={handleTabClick} className="tab">Custom Preparation</li>
            <li onClick={handleTabClick} className="tab">AI Featured</li>
        </ul>
      </nav>
    </div>
  )
}

export default Main
