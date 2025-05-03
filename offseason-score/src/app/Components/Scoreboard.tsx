'use client';
import React, {useEffect, useState} from "react";
import "./Scoreboard.css";
import {getAllMatches} from '../db'
import Link from 'next/link'
import {defaultMatch} from "@/app/types";
import Timer from '../Components/timer';

const ScoreBox = ({ title , color, autoData, teleopData, teamNumbers, totalScore }) => {
  return (
    <div>
    
    <div className={`score-box ${color}`}>
      
      <h2 className={`score-title ${color}`}>{title.toUpperCase()}</h2>

      <div className="score-sections">
        <div className="score-section">
          <p className="score-heading">AUTO</p>
          <div className="score-item">
            <span>Net Sample:</span>
            <span>{autoData.netSample}</span>
          </div>

          <div className="score-item">
            <span>Low Sample:</span>
            <span>{autoData.lowSample}</span>
          </div>

          <div className="score-item">
            <span>High Sample:</span>
            <span>{autoData.highSample}</span>
          </div>

          <div className="score-item">
            <span>Low Chamber:</span>
            <span>{autoData.lowChamber}</span>
          </div>

          <div className="score-item">
            <span>High Chamber:</span>
            <span>{autoData.highChamber}</span>
          </div>

          <div className="score-item">
            <span>Specimen:</span>
            <span>{autoData.specimen}</span>
          </div>

          <div className="score-item">
            <span>Low Specimen:</span>
            <span>{autoData.lowSpecimen}</span>
          </div>

          <div className="score-item">
            <span>High Specimen:</span>
            <span>{autoData.highSpecimen}</span>
          </div>

        </div>

        <div className="score-section">
          <p className="score-heading">TELEOP</p>
          <div className="score-item">
            <span>Net Sample:</span>
            <span>{teleopData.netSample}</span>
          </div>

          <div className="score-item">
            <span>Low Sample:</span>
            <span>{teleopData.lowSample}</span>
          </div>

          <div className="score-item">
            <span>High Sample:</span>
            <span>{teleopData.highSample}</span>
          </div>

          <div className="score-item">
            <span>Low Chamber:</span>
            <span>{teleopData.lowChamber}</span>
          </div>

          <div className="score-item">
            <span>High Chamber:</span>
            <span>{teleopData.highChamber}</span>
          </div>


          <div className="score-item">
            <span>Low Specimen:</span>
            <span>{teleopData.lowSpecimen}</span>
          </div>

          <div className="score-item">
            <span>High Specimen:</span>
            <span>{teleopData.highSpecimen}</span>
          </div>
        </div>
      </div>

      <p className="score-teams">Teams: {teamNumbers.join(" & ")}</p>
      <p className="score-total">Score: {totalScore}</p>
    </div>
    </div>
  );
};

export default function Scoreboard() {
  const [matches, setMatches] = useState([]);
  const [currentMatch, setCurrentMatch] = useState(defaultMatch);

  useEffect(() => {
    const timerID =setInterval(() => {
    getAllMatches().then((matches) => {setMatches((matches || [] )as never[]);})
      setCurrentMatch(matches.find((match: any) => currentMatch.id == (match.id | 0)) || defaultMatch )
    }, 500);
    return () => clearInterval(timerID);
  })

  function setCurrentMatchSelector(event: React.ChangeEvent<HTMLSelectElement>) {
    const value = event.target.value as unknown as number;
    setCurrentMatch(matches.find((match: any) => value == (match.id | 0)) || defaultMatch)
    }
  return (
    <div className="scoreboard-container">
      <nav>
        <Link href="/">Back to Calc</Link><br />
        <Link href="/rank">Go to Ranking</Link>
      </nav>
      <select defaultValue={0} onChange={setCurrentMatchSelector}>
        <option value={0} disabled> Default </option>

        <option value={1}> Match 1 </option>
        <option value={2}> Match 2 </option>
        <option value={3}> Match 3 </option>
        <option value={4}> Match 4 </option>
        <option value={5}> Match 5 </option>
        <option value={6}> Match 6 </option>
        <option value={7}> Match 7 </option>
        <option value={8}> Match 8 </option>
        <option value={9}> Match 9 </option>
        <option value={10}> Match 10 </option>
        <option value={11}> Match 11 </option>
        <option value={12}> Match 12 </option>
        <option value={13}> Match 13 </option>
        <option value={14}> Match 14 </option>
        <option value={15}> Match 15 </option>
        <option value={16}> Match 16 </option>
                <option value={17}> Match 17 </option>
                <option value={18}> Match 18 </option>
                <option value={19}> Match 19 </option>
                <option value={20}> Match 20 </option>

      </select>
      <h1 className="scoreboard-title">CircuitRunners Robotics Offseason Event -- Match { currentMatch.id | 0 }</h1>
      <div className="scoreboard-grid">
        <ScoreBox
          title="Blue"
          color="blue"
          autoData={
            {
              netSample: currentMatch.blue.score.netSampleScored,
              lowSample: currentMatch.blue.score.lowSampleScored,
              highSample: currentMatch.blue.score.highSampleScored,
              lowChamber: currentMatch.blue.score.lowChamber,
              highChamber: currentMatch.blue.score.highChamber,
              specimen: currentMatch.blue.score.specimenScored,
              lowSpecimen: currentMatch.blue.score.lowSpecimenScored,
              highSpecimen: currentMatch.blue.score.highSpecimenScored,

            }
          }
          teleopData={{
            netSample: currentMatch.blue.score.teleNetSampleScored,
            lowSample: currentMatch.blue.score.teleLowSampleScored,
            highSample: currentMatch.blue.score.teleHighSampleScored,
            lowChamber: currentMatch.blue.score.teleLowChamber,
            highChamber: currentMatch.blue.score.teleHighChamber,
            lowSpecimen: currentMatch.blue.score.lowTeleSpecimenScored,
            highSpecimen: currentMatch.blue.score.highTeleSpecimenScored,
          }}
          teamNumbers={currentMatch.blue.teams || []}
          totalScore={currentMatch.blue.score.totalScore}
        />
        <ScoreBox
            title="Red"
            color="red"
            autoData={
              {
                netSample: currentMatch.red.score.netSampleScored,
                lowSample: currentMatch.red.score.lowSampleScored,
                highSample: currentMatch.red.score.highSampleScored,
                lowChamber: currentMatch.red.score.lowChamber,
                highChamber: currentMatch.red.score.highChamber,
                specimen: currentMatch.red.score.specimenScored,
                lowSpecimen: currentMatch.red.score.lowSpecimenScored,
                highSpecimen: currentMatch.red.score.highSpecimenScored,

              }
            }
            teleopData={{
              netSample: currentMatch.red.score.teleNetSampleScored,
              lowSample: currentMatch.red.score.teleLowSampleScored,
              highSample: currentMatch.red.score.teleHighSampleScored,
              lowChamber: currentMatch.red.score.teleLowChamber,
              highChamber: currentMatch.red.score.teleHighChamber,
              lowSpecimen: currentMatch.red.score.lowTeleSpecimenScored,
              highSpecimen: currentMatch.red.score.highTeleSpecimenScored,
            }}
            teamNumbers={currentMatch.red.teams! || []}
            totalScore={currentMatch.red.score.totalScore}
        />
      </div>
     <Timer/>



    </div>
  );
}
