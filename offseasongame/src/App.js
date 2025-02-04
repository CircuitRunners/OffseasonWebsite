import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import { use, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useEffect } from 'react';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'



 




function App() {
  const [netsampleScored, setNetSampleScored] = useState(0);
  const [specimenScored, setSpecimenScored] = useState(0);
  const [lowSampleScored, setLowSampleScored] = useState(0);
  const [highSampleScored, setHighSampleScored] = useState(0);
  const [lowChamber, setLowChamber] = useState(0);
  const [highChamber, setHighChamber] = useState(0);

  const [totalScore, setTotalScore] = useState(0);

  



  const [no1, setNo1] = useState("No");
  const [no2, setNo2] = useState("No");
  const [obsz1, setObsz1] = useState("Observation Zone");
  const [obsz2, setObsz2] = useState("Observation Zone");
  const [ascent1, setAscent1] = useState("Ascent");
  const [ascent2, setAscent2] = useState("Ascent");




  function ResetAll(){
    setNetSampleScored(0);
    setLowSampleScored(0);
    setHighSampleScored(0);
    setLowChamber(0);
    setHighChamber(0);
    setTotalScore(0);
    setNo1("No");
    setNo2("No");
    setObsz1("Observation Zone");
    setObsz2("Observation Zone");
    setAscent1("Ascent");
    setAscent2("Ascent");
    setr1loc(null);
    setr2loc(null);
  }

  function PositionChange1(){
    if(r1loc === "No"){
      setNo1("No - Clicked");
      setObsz1("Observation Zone");
      setAscent1("Ascent");
    }
    if(r1loc === "Observation Zone"){
      setNo1("No");
      setObsz1("Observation Zone - Checked");
      setAscent1("Ascent");
    }
    if(r1loc === "Ascent"){
      setNo1("No");
      setAscent1("Ascent - Clicked");
      setObsz1("Observation Zone");
    }
  }
  function PositionChange2(){
    if(r2loc === "No"){
      setObsz2("Observation Zone");
      setNo2("No - Checked");
      setAscent2("Ascent");
    }
    if(r2loc === "Observation Zone"){
      setNo2("No ");
      setObsz2("Observation Zone - Clicked");
      setAscent2("Ascent");
    }
    if(r2loc === "Ascent"){
      setNo2("No");
      setAscent2("Ascent - Checked");
      setObsz2("Observation Zone");
    }
  }

  function CalculateScore(){
    console.log(netsampleScored);
    console.log(r1loc);
    let score = 0;
    score = netsampleScored*2
    score += lowSampleScored*4
    score += highSampleScored*8
    score += lowChamber*6
    score += highChamber*10
    if(r1loc === "Observation Zone" || r1loc === "Ascent"){
      score += 3;
    }
    if(r2loc === "Observation Zone" || r2loc === "Ascent"){
      score += 3;
    }
    
    

    setTotalScore(score);
  }

  useEffect(() => {
    let timerID = setInterval( () => CalculateScore(), 2000);
    return () => clearInterval(timerID);
})
  function AddNetSample(){
    setNetSampleScored(netsampleScored + 1);
    
 
    }
  function RemoveNetSample(){
    if(netsampleScored > 0){
      setNetSampleScored(netsampleScored - 1);
    }
   
    }
  function AddLowSample(){
    setLowSampleScored(lowSampleScored + 1);
  
    }
  function RemoveLowSample(){
    if(lowSampleScored > 0){
      setLowSampleScored(lowSampleScored - 1);
    }
    
    }
  function AddHighSample(){
    setHighSampleScored(highSampleScored + 1);

    }
  function RemoveHighSample(){
    if(highSampleScored > 0){
      setHighSampleScored(highSampleScored - 1);
    }
  
    }
    

  function RemoveLowChamber(){
    if(lowChamber > 0){
      setLowChamber(lowChamber - 1);
    }
    
    }
  function AddLowChamber(){
    setLowChamber(lowChamber + 1);

    }
  
    
    
  function AddHighChamber(){
    setHighChamber(highChamber + 1);

    }
  function RemoveHighChamber(){
    if(highChamber > 0){
      setHighChamber(highChamber - 1);
    }
  
    }


  

  
    const [r1loc, setr1loc] = useState(null);
    const [r2loc, setr2loc] = useState(null);
  
    const handler1loc = (value) => {
      setr1loc(value);
      PositionChange1();
      console.log(r1loc);
    };
    
    const handler2loc = (value) => {
      setr2loc(value);
      PositionChange2();
      console.log(r2loc);
    };
  


  return (
    <div>
      <Container>
        <Row>
          <Col>
          <h1 >
            Autonomous
          </h1>
          </Col>
          <Col>
            <h1>
              Total Score : {totalScore}
            </h1>
          </Col>
        </Row>
        <Row>
          
          <Col>
            Samples in NET
          </Col>
          <Col>
            <Button onClick={RemoveNetSample}>
              Minus
            </Button>
            </Col>
            <Col>
            <h1>
             {netsampleScored}
            </h1>
          </Col>
          <Col>
            <Button onClick={AddNetSample}>
              Plus
            </Button>
          </Col>
         
          <Col>
            Samples in Low Basket
          </Col>
          <Col>
            <Button onClick={RemoveLowSample}>
              Minus
            </Button>
            </Col>
            <Col>
            <h1>
              {lowSampleScored}
              </h1> 
          </Col>
          <Col onClick={AddLowSample}>
            <Button>
              Plus
            </Button>
          </Col>
         
        </Row>
        <br/>
        <br/>

        <Row>
        <Col>
            Samples in High Basket
          </Col>
          <Col>
            <Button onClick= {RemoveHighSample}>
              Minus
            </Button>
            </Col>
            <Col>
            <h1>
            {highSampleScored}
            </h1>
          </Col>
          <Col>
            <Button onClick={AddHighSample}>
              Plus
            </Button>
          </Col>
        </Row>




      
        <Row>
          
          <Col>
            Samples on Low Chamber
          </Col>
          <Col>
            <Button onClick={RemoveLowChamber}>
              Minus
            </Button>
            </Col>
            <Col>
            <h1>
              {lowChamber}
            </h1>
          </Col>
          <Col>
            <Button onClick={AddLowChamber}>
              Plus
            </Button>
          </Col>
         
          <Col>
            Samples in High Chamber
          </Col>
          <Col>
            <Button onClick={RemoveHighChamber}>
              Minus
            </Button>
            </Col>
            <Col>
            <h1>
              {highChamber}
            </h1>
          </Col>
          <Col onClick={AddHighChamber}>
            <Button>
              Plus
            </Button>
          </Col>
         
        </Row>
        <Row>
          <Col>
          <ButtonGroup aria-label="Basic example">
            <Button variant = "outline-danger" onClick={() => handler1loc("No")}>{no1}</Button>
            <Button variant = "outline-primary" onClick={() => handler1loc("Observation Zone")}>{obsz1}</Button>
            <Button variant = "outline-success" onClick={() => handler1loc("Ascent")}>{ascent1}</Button>
            
          </ButtonGroup>
          </Col>

          <Col>
          <ButtonGroup aria-label="Basic example">
            <Button variant = "outline-danger" onClick={() => handler2loc("No")}>{no2}</Button>
            <Button variant = "outline-primary" onClick={() => handler2loc("Observation Zone")}>{obsz2}</Button>
            <Button variant = "outline-success" onClick={() => handler2loc("Ascent")}>{ascent2}</Button>
          </ButtonGroup>
          </Col>


        </Row>


       <Button onClick={ResetAll}>
          Reset
       </Button>
      </Container>
      
    </div>
  );
}

export default App;
