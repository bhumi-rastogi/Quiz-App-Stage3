import React, { useState } from "react";
import "./Quiz.css";
import questions from "../resources/Question.json";
import { useNavigate } from "react-router-dom";

function Quiz() {
  const [number, setNumber] = useState(0);
  const [points, TotalPoints] = useState(0);
  const [attempt, Attempt] = useState([]);
  const direct = useNavigate();

  const Next = () => setNumber((prev) => (prev < 14 ? prev + 1 : prev));
  const Previous = () => setNumber((prev) => (prev > 0 ? prev - 1 : prev));

  const Option = (e) => {
    const Choosen = e.target.innerText;
    const Final = Choosen === questions[number].answer;
    alert(Final ? "Right answer" : "Wrong answer");
    if (!attempt.includes(number)) {
      Attempt((prevs) => [...prevs, number]);
      TotalPoints((previously) => (Final ? previously + 1 : previously));
    }
  };

  const Finished = () => direct("/Result", { state: { points, attempt } });

  const Quix = () => {
    if (window.confirm("Do you really wanna exit?")) {
      window.location.reload(false);
    }
  };

  return (
    <div className="page">
      <h1>Question</h1>
      <div>
        <span>{number + 1} of 15</span>
        <h5>{questions[number].question}</h5>
      </div>

      <div className="choice">
        {["A", "B", "C", "D"].map((option, index) => (
          <p key={index} className="option" onClick={Option}>{questions[number][`option${option}`]}</p>
        ))}
      </div>

      <div>
        <button className="prev" onClick={Previous}> Previous </button>

        <button className="next" onClick={Next}> Next </button>

        <button className="quit" onClick={Quix}> Quit </button>

        <button className="finish" onClick={Finished}> Finish </button>
      </div>
    </div>
  );
}

export default Quiz;