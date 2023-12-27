import React from "react";
import "./Home.css";
import {NavLink } from "react-router-dom";

function Home() {
    return (
      <div className="start">
        <h2>Quiz</h2>
        <NavLink to="/Quiz">
         <button className="play">
          Start
          </button>
        </NavLink>
      </div>
    );
  }

export default Home;