import React, { useState } from 'react';
import "./queslist.css";

const Queslist = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleBtnClick = (index) => {
    setActiveIndex(index);
  }

  return (
    <section className='quesListContainer'>
      <div className='quesList'>
        <div className="quesListTitle">
            All Topics
        </div>
        <ol className="quesBtns">
            {['Topic Name dolor sit amet, consectetuer sed diam nonummy', 
              'Topic Name dolor sit amet, consectetuer sed diam nonummy', 
              'Topic Name dolor sit amet, consectetuer sed diam nonummy', 
              'Topic Name dolor sit amet, consectetuer sed diam nonummy', 
              'Topic Name dolor sit amet, consectetuer sed diam nonummy'
            ].map((topic, index) => (
              <li 
                key={index} 
                className={`quesBtn ${activeIndex === index ? 'clickedQuesBtn' : ''}`}
                onClick={() => handleBtnClick(index)}
              >
                {topic}
              </li>
            ))}
        </ol>
      </div>
      <div className="scrollBar">
        <div className="scrollbg"></div>
        <div className="scroller"></div>
      </div>
    </section>
  )
}

export default Queslist