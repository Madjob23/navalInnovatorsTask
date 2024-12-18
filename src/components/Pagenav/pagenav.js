import React from 'react';
import './pagenav.css';

const Pagenav = () => {
  return (
    <span className='pagenav'>
      <button className="prev">&lt; Previous</button>
      <div className="lowerPgNo">1</div>
      <button className="next">Next &gt;</button>
    </span>
  )
}

export default Pagenav
