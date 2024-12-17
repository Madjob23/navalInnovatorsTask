import "./main.css";
import React from 'react';
import Navbar from "../Navbar/navbar";
import Question from "../Question/question";

const Main = () => {
  return (
    <div className="main">
        <Navbar />
        <Question />
    </div>
  )
}

export default Main
