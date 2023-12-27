import React from 'react';
import "./Result.css";
import { NavLink, useLocation } from "react-router-dom";

function Result() {
  const { state } = useLocation();
  const points = state.points;
  console.log(state);
  const attemptedCount = state.attempt.length;
  const percentage = Math.round((points / 15) * 100);

  const result = () => {
    if (points < 6) return "Practice more!";
    if (points < 11) return "Can be better!";
    return "Great!";
  };

  return (
    <>
      <h1>Result</h1>
      <div className="result">
        <h3>{result()}</h3>
        <h1>Your points is {percentage}%</h1>
        <div style={{display: "flex",justifyContent: "space-between"}}>
          <div>
            {["Total question", "Attempted questions", "Correct answers", "Wrong answers"].map((label, index) => (
              <h5 key={index}>{label}</h5>
            ))}
          </div>
          <div>
            {[15, attemptedCount, points, attemptedCount - points].map((value, index) => (
              <h5 key={index}>{value}</h5>
            ))}
          </div>
        </div>
      </div>
      <br/>
      <div className='b'>
        <NavLink to="/Quiz">
          <button>Play Again</button></NavLink>
        <NavLink to="/">
          <button>Back to home</button></NavLink>
      </div>
    </>
  );
}

export default Result;
