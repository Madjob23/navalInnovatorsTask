import "./main.css";
import React from 'react';
import Navbar from "../Navbar/navbar";
import Question from "../Question/question";
import Pagenav from "../Pagenav/pagenav";

const Main = () => {
  return (
    <div className="main">
        <Navbar />
        <Question />
        <Pagenav />
    </div>
  )
}

export default Main
