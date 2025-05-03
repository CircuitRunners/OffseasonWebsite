'use client';

import React, { useState } from 'react';
import { useEffect } from 'react';
import './ranking.css';
import Link from 'next/link'
import {getTeams, updateTeams} from "@/app/db";




function Ranking() {
    const [W1002, setW1002] = useState(0);
    const [W11347, setW11347] = useState(0);
    const [W23638, setW23638] = useState(0);
    const [W26481, setW26481] = useState(0);
    const [W19571, setW19571] = useState(0);
    const [W26537, setW26537] = useState(0);
    const [L1002, setL1002] = useState(0);
    const [L11347, setL11347] = useState(0);
    const [L23638, setL23638] = useState(0);
    const [L26481, setL26481] = useState(0);
    const [L19571, setL19571] = useState(0);
    const [L26537, setL26537] = useState(0);
    const [teams, setTeams] = useState([
        { name: "1002", score:  W1002/(W1002+L1002) || 0, id: 1, wins: W1002, losses: L1002 },
        { name: "11347", score: W11347/(W11347+L11347) || 0, id: 2, wins: W11347, losses: L11347 },
        { name: "23638", score: W23638/(W23638+L23638) || 0, id: 3, wins: W23638, losses: L23638 },
        { name: "26481", score: W26481/(W26481+L26481) || 0, id: 4, wins: W26481, losses: L26481 },
        { name: "19571", score: W19571/(W19571+L19571) || 0, id: 5, wins: W19571, losses: L19571 },
        { name: "26537", score: W26537/(W26537+L26537) || 0, id: 6, wins: W26537, losses: L26537 },
    ]);

    useEffect(() => {
        setTeams([
            { name: "1002", score:  W1002/(W1002+L1002) || 0, id: 1, wins: W1002, losses: L1002 },
            { name: "11347", score: W11347/(W11347+L11347) || 0, id: 2, wins: W11347, losses: L11347 },
            { name: "23638", score: W23638/(W23638+L23638) || 0, id: 3, wins: W23638, losses: L23638 },
            { name: "26481", score: W26481/(W26481+L26481) || 0, id: 4, wins: W26481, losses: L26481 },
            { name: "19571", score: W19571/(W19571+L19571) || 0, id: 5, wins: W19571, losses: L19571 },
            { name: "26537", score: W26537/(W26537+L26537) || 0, id: 6, wins: W26537, losses: L26537 },
        ]);
      }, [W1002, W11347, W23638, W26481, W19571, W26537, L1002, L11347, L23638, L26481, L19571, L26537]);

    useEffect(() => {
        updateTeams(teams).then(() => console.log("teams updated"))
    }, [teams]);


  const sortedTeams = [...teams].sort((a, b) => b.score - a.score);
  function loadData() {
      let allTeams: ((prevState: { name: string; score: number; id: number; wins: number; losses: number; }[]) => { name: string; score: number; id: number; wins: number; losses: number; }[]) | { name: any; score: any; id: any; wins: any; losses: any; }[] =[];
      getTeams().then(
        (ret_teams) => {
            ret_teams!.map((ret_team) => {
                allTeams.push({name: ret_team.name, score: ret_team.score, id: ret_team.id, wins: ret_team.wins, losses: ret_team.losses});
            })
          ret_teams!.forEach((ret_team) => {
              if (ret_team.name === "1002") {
                  setW1002(ret_team.wins);
                  setL1002(ret_team.losses);
              }if (ret_team.name === "11347") {
                  setW11347(ret_team.wins);
                  setL11347(ret_team.losses);
              }if (ret_team.name === "23638") {
                  setW23638(ret_team.wins);
                  setL23638(ret_team.losses);
              }if (ret_team.name === "26481") {
                  setW26481(ret_team.wins);
                  setL26481(ret_team.losses);
              }if (ret_team.name === "19571") {
                  setW19571(ret_team.wins);
                  setL19571(ret_team.losses);
              }if (ret_team.name === "26537") {
                  setW26537(ret_team.wins);
                  setL26537(ret_team.losses);
              }
          })
            setTeams(allTeams);
        }
    )
  }

  return (
    <div style={{ margin: '20px' }}>

        <button style={{justifySelf: "center"}} onClick={loadData}>
            Load Data
        </button>
   
      <h1>Ranking Page</h1>
      <nav>
        <Link href="/">Back to Calc</Link><br />
        <Link href="/score">Go to Scoreboard</Link>
      </nav>
      <table style={{ width: '300px', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th >Rank</th>
            <th >Name</th>
            <th>Score</th>
            <th>Wins</th>
            <th>Losses</th>
          </tr>
        </thead>
        <tbody>
          {sortedTeams.map((person, index) => (
            <tr key={index} style={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
              <td style={styles.td}>{index + 1}</td>
              <td style={styles.td}>{person.name}</td>
              <td style={styles.td}>{person.score.toFixed(3)}</td>
              <td style={styles.td}>{person.wins}</td>
              <td style={styles.td}>{person.losses}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <button onClick={() => setW1002(W1002 + 1)}>W1002</button> 
        <button onClick={() => setL1002(L1002 + 1)}>L1002</button>
        <br />
        <button onClick={() => setW11347(W11347 + 1)}>W11347</button>
        <button onClick={() => setL11347(L11347 + 1)}>L11347</button>
        <br />
        <button onClick={() => setW23638(W23638 + 1)}>W23638</button>
        <button onClick={() => setL23638(L23638 + 1)}>L23638</button>
        <br />
        <button onClick={() => setW26481(W26481 + 1)}>W26481</button>
        <button onClick={() => setL26481(L26481 + 1)}>L26481</button>
        <br />

        <button onClick={() => setW19571(W19571 + 1)}>W19571</button>
        <button onClick={() => setL19571(L19571 + 1)}>L19571</button>
        <br />
        <button onClick={() => setW26537(W26537 + 1)}>W26537</button>
        <button onClick={() => setL26537(L26537 + 1)}>L26537</button>
        <br />
      </div>
    </div>

    
  );
}

const styles = {
  th: {
    backgroundColor: '#f4f4f4',
    padding: '10px',
    textAlign: 'left',
    borderBottom: '2px solid #ddd'
  },
  td: {
    padding: '10px',
    borderBottom: '1px solid #ddd'
  },
  evenRow: {
    backgroundColor: 'white'
  },
  oddRow: {
    backgroundColor: '#f8f8f8'
  }
};

export default Ranking;

