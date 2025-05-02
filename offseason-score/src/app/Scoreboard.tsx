import React from "react";
import "./Scoreboard.css";
import db from './db'
const ScoreBox = ({ title, color, autoData, teleopData, teamNumbers, totalScore }) => {
  return (
    <div className={`score-box ${color}`}>
      <h2 className={`score-title ${color}`}>{title.toUpperCase()}</h2>

      <div className="score-sections">
        <div className="score-section">
          <p className="score-heading">AUTO</p>
          <div className="score-item">
            <span>Purple Pixel:</span>
            <span>{autoData.purplePixel}</span>
          </div>
          <div className="score-item">
            <span>Yellow Pixel:</span>
            <span>{autoData.yellowPixel}</span>
          </div>
          <div className="score-item">
            <span>Backstage:</span>
            <span>{autoData.backstage}</span>
          </div>
        </div>

        <div className="score-section">
          <p className="score-heading">TELEOP</p>
          <div className="score-item">
            <span>Purple Pixel:</span>
            <span>{teleopData.purplePixel}</span>
          </div>
          <div className="score-item">
            <span>Yellow Pixel:</span>
            <span>{teleopData.yellowPixel}</span>
          </div>
          <div className="score-item">
            <span>Backstage:</span>
            <span>{teleopData.backstage}</span>
          </div>
        </div>
      </div>

      <p className="score-teams">Teams: {teamNumbers.join(" & ")}</p>
      <p className="score-total">Score: {totalScore}</p>
    </div>
  );
};

export default function Scoreboard() {
  return (
    <div className="scoreboard-container">
      <h1 className="scoreboard-title">Marietta-Wheeler League Meet #2 - Match 9</h1>
      <div className="scoreboard-grid">
        <ScoreBox
          title="Blue"
          color="blue"
          autoData={{ purplePixel: 1, yellowPixel: 0, backstage: 0 }}
          teleopData={{ purplePixel: 2, yellowPixel: 2, backstage: 0 }}
          teamNumbers={["13245", "26481"]}
          totalScore={18}
        />
        <ScoreBox
          title="Red"
          color="red"
          autoData={{ purplePixel: 0, yellowPixel: 0, backstage: 0 }}
          teleopData={{ purplePixel: 6, yellowPixel: 1, backstage: 0 }}
          teamNumbers={["9785", "26537"]}
          totalScore={23}
        />
      </div>
      <p className="score-time">Time: 0:00</p>
    </div>
  );
}
