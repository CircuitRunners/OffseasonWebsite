'use client';

import React, { useState } from 'react';
import { useEffect } from 'react';
import './ranking.css';
import Link from 'next/link'




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

    useEffect(() => {
        setScores([
          { name: "1002", score: W1002 / (W1002 + L1002) },
          { name: "11347", score: W11347 / (W11347 + L11347) },
          { name: "23638", score: W23638 / (W23638 + L23638) },
          { name: "26481", score: W26481 / (W26481 + L26481) },
          { name: "19571", score: W19571 / (W19571 + L19571) },
          { name: "26537", score: W26537 / (W26537 + L26537) },
        ]);
      }, [W1002, W11347, W23638, W26481, W19571, W26537, L1002, L11347, L23638, L26481, L19571, L26537]);
    
  const [scores, setScores] = useState([
    { name: "1002", score:  W1002/(W1002+L1002) },
    { name: "11347", score: W11347/(W11347+L11347) },
    { name: "23638", score: W23638/(W23638+L23638) },
    { name: "26481", score: W26481/(W26481+L26481) },
    { name: "19571", score: W19571/(W19571+L19571) },
    { name: "26537", score: W26537/(W26537+L26537) },
  ]);

  const sortedScores = [...scores].sort((a, b) => b.score - a.score);

  return (
    <div style={{ margin: '20px' }}>

   
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
          </tr>
        </thead>
        <tbody>
          {sortedScores.map((person, index) => (
            <tr key={index} style={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
              <td style={styles.td}>{index + 1}</td>
              <td style={styles.td}>{person.name}</td>
              <td style={styles.td}>{person.score.toFixed(3)}</td>
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

