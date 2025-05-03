'use client';

import Link from 'next/link'

import 'bootstrap/dist/css/bootstrap.min.css';



import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import {getAllMatches, getMatchByNumber, updateMatch} from "@/app/db";
import Match, {defaultMatch} from '../types';









function RedCalc() {
    const [matches, setMatches] = useState([]);
    getAllMatches().then((matches) => {setMatches((matches? matches : []) as never[]);})
    const [currentMatch, setCurrentMatch] = useState(defaultMatch);
    // console.log(currentMatch);
    const [netSampleScored, setNetSampleScored] = useState(0);
    const [specimenScored, setSpecimenScored] = useState(0);

    const [lowSampleScored, setLowSampleScored] = useState(0);
    const [highSampleScored, setHighSampleScored] = useState(0);
    const [lowSpecimenScored, setLowSpecimenScored] = useState(0);
    const [highSpecimenScored, setHighSpecimenScored] = useState(0);
    const [lowChamber, setLowChamber] = useState(0);
    const [highChamber, setHighChamber] = useState(0);

    const [totalScore, setTotalScore] = useState(0);
    const [pens, setPens] = useState(0);





    const [no1, setNo1] = useState("No");
    const [no2, setNo2] = useState("No");
    const [obsz1, setObsz1] = useState("OZ");
    const [obsz2, setObsz2] = useState("Observation Zone");
    const [ascent1, setAscent1] = useState("Ascent");
    const [ascent2, setAscent2] = useState("Ascent");


    const [teleNetSampleScored, setTeleNetSampleScored] = useState(0);
    const [teleSpecimenScored, setTeleSpecimenScored] = useState(0);
    const [teleLowSampleScored, setTeleLowSampleScored] = useState(0);
    const [teleHighSampleScored, setTeleHighSampleScored] = useState(0);
    const [teleLowChamber, setTeleLowChamber] = useState(0);
    const [teleHighChamber, setTeleHighChamber] = useState(0);
    const [lowTeleSpecimenScored, setLowTeleSpecimenScored] = useState(0);
    const [highTeleSpecimenScored, setHighTeleSpecimenScored] = useState(0);







    const [teleno1, setTeleNo1] = useState("No");
    const [teleno2, setTeleNo2] = useState("No");
    const [teleobsz1, setTeleObsz1] = useState("Observation Zone");
    const [teleobsz2, setTeleObsz2] = useState("Observation Zone");
    const [teleascent1, setTeleAscent1] = useState("Ascent");
    const [teleascent2, setTeleAscent2] = useState("Ascent");
    const [teleno3, setTeleNo3] = useState("No");
    const [teleobsz3, setTeleObsz3] = useState("Observation Zone");
    const [teleascent3, setTeleAscent3] = useState("Opponents Basket");


    function ResetAll(){
        setNetSampleScored(currentMatch.red.score.netSampleScored);
        setLowSampleScored(currentMatch.red.score.lowSampleScored);
        setHighSampleScored(currentMatch.red.score.highSampleScored);
        setLowChamber(currentMatch.red.score.lowChamber);
        setHighChamber(currentMatch.red.score.highChamber);
        setSpecimenScored(currentMatch.red.score.specimenScored);
        setLowSpecimenScored(currentMatch.red.score.lowSpecimenScored);
        setHighSpecimenScored(currentMatch.red.score.highSpecimenScored);
        setTotalScore(currentMatch.red.score.totalScore);

        setTeleNetSampleScored(currentMatch.red.score.teleNetSampleScored);
        setTeleLowSampleScored(currentMatch.red.score.teleLowSampleScored);
        setTeleHighSampleScored(currentMatch.red.score.teleHighSampleScored);
        setLowTeleSpecimenScored(currentMatch.red.score.lowTeleSpecimenScored);
        setHighTeleSpecimenScored(currentMatch.red.score.highTeleSpecimenScored);
        setTeleLowChamber(currentMatch.red.score.teleLowChamber);
        setTeleHighChamber(currentMatch.red.score.teleHighChamber);
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
            setObsz1("OZ");
            setAscent1("Ascent");
        }
        if(r1loc === "Observation Zone"){
            setNo1("No");
            setObsz1("OZ");
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

    async function CalculateScore(){
        // console.log(r1loc);
        let score = 0;
        score += (teleNetSampleScored+netSampleScored)*2
        score += (lowSampleScored + teleLowSampleScored)*4
        score += (highSampleScored + teleHighSampleScored)*8
        score += (teleLowChamber+lowChamber)*6
        score -= pens*5
        score += (highSpecimenScored + highTeleSpecimenScored)*12
        score += (lowSpecimenScored + lowTeleSpecimenScored)*8
        score += (highChamber+ teleHighChamber)*10
        if(r1loc === "Observation Zone" || r1loc === "Ascent"){
            score += 3;
        }
        if(r2loc === "Observation Zone" || r2loc === "Ascent"){
            score += 3;
        }
        if(r3loc === "Observation Zone" || r3loc === "Ascent"){
            score += 3;
        }

        // console.log(score);


        if (score != totalScore) {
            setTotalScore(score);
            console.log("updateScore");
            const data = await updateMatch(currentMatch.id, {
                id: currentMatch.id,
                number: currentMatch.number,
                red: {
                    teams: currentMatch.red.teams,
                    score: {
                        lowSampleScored,
                        netSampleScored,
                        highSampleScored,
                        lowChamber,
                        highChamber,
                        specimenScored,
                        lowSpecimenScored,
                        highSpecimenScored,
                        totalScore: score,
                        teleNetSampleScored,
                        teleLowSampleScored,
                        teleHighSampleScored,
                        lowTeleSpecimenScored,
                        highTeleSpecimenScored,
                        teleLowChamber,
                        teleHighChamber
                    }
                }
            } as Match);
            console.log('updated match score');

            setCurrentMatch(data)

        }
    }

    useEffect(() => {
        const timerID = setInterval(CalculateScore, 10);
        return () => clearInterval(timerID);
    })
    async function AddNetSample(){
        setNetSampleScored(netSampleScored + 1);
    }
    async function RemoveNetSample(){
        if(netSampleScored > 0){
            setNetSampleScored(netSampleScored - 1);
        }

    }
    async function AddLowSample(){
        setLowSampleScored(lowSampleScored + 1);

    }
    async function RemoveLowSample(){
        if(lowSampleScored > 0){
            setLowSampleScored(lowSampleScored - 1);
        }

    }
    async function AddHighSample(){
        setHighSampleScored(highSampleScored + 1);

    }
    async function RemoveLowSpecimen(){
        if(lowSpecimenScored > 0){
            setLowSpecimenScored(lowSpecimenScored - 1);
        }

    }
    async function AddHighSpecimen(){
        setHighSpecimenScored(highSpecimenScored + 1);

    }
    async function AddLowSpecimen(){
        if(lowSpecimenScored > -1){
            setLowSpecimenScored(lowSpecimenScored + 1);
        }

    }
    async function RemoveHighSpecimen(){
        if(highSpecimenScored > 0){
            setHighSpecimenScored(highSpecimenScored -1);
        }

    }
    async function RemoveHighSample(){
        if(highSampleScored > 0){
            setHighSampleScored(highSampleScored - 1);
        }

    }


    async function RemoveLowChamber(){
        if(lowChamber > 0){
            setLowChamber(lowChamber - 1);
        }

    }
    async function AddLowChamber(){
        setLowChamber(lowChamber + 1);

    }



    async function AddHighChamber(){
        setHighChamber(highChamber + 1);

    }
    async function RemoveHighChamber(){
        if(highChamber > 0){
            setHighChamber(highChamber - 1);
        }

    }

    async function PositionTeleChange1(){
        if(teler1loc === "No"){
            setTeleNo1("No - Clicked");
            setTeleObsz1("Observation Zone");
            setTeleAscent1("Ascent");
        }
        if(teler1loc === "Observation Zone"){
            setTeleNo1("No");
            setTeleObsz1("Observation Zone - Checked");
            setTeleAscent1("Ascent");
        }
        if(teler1loc === "Ascent"){
            setTeleNo1("No");
            setTeleAscent1("Ascent - Clicked");
            setTeleObsz1("Observation Zone");
        }
    }
    async function PositionTeleChange2(){
        if(teler2loc === "No"){
            setTeleObsz2("Observation Zone");
            setTeleNo2("No - Checked");
            setTeleAscent2("Ascent");
        }
        if(teler2loc === "Observation Zone"){
            setTeleNo2("No ");
            setTeleObsz2("Observation Zone - Clicked");
            setTeleAscent2("Ascent");
        }
        if(teler2loc === "Ascent"){
            setTeleNo2("No");
            setTeleAscent2("Ascent - Checked");
            setTeleObsz2("Observation Zone");
        }
    }


    async function RemoveTeleLowSpecimen(){
        if(lowTeleSpecimenScored > 0){
            setLowTeleSpecimenScored(lowTeleSpecimenScored - 1);
        }

    }
    async function AddTeleHighSpecimen(){
        setHighTeleSpecimenScored(highTeleSpecimenScored + 1);

    }
    async function AddTeleLowSpecimen(){
        if(lowTeleSpecimenScored > -1){
            setLowTeleSpecimenScored(lowTeleSpecimenScored + 1);
        }

    }
    async function RemoveTeleHighSpecimen() {
        if (highTeleSpecimenScored > 0) {
            setHighTeleSpecimenScored(highTeleSpecimenScored - 1);
        }

    }

    const [matchReset, setMatchReset] = useState(false);

    useEffect(() => {
        if (matchReset) {
            ResetAll();
            console.log(currentMatch);
        }
        setMatchReset(false);
    }, [matchReset])
    function setCurrentMatchSelector(event: React.ChangeEvent<HTMLSelectElement>) {
        const value = event.target.value as unknown as  number;
        setCurrentMatch(matches.find((match: any) => value == (match.id | 0)) || defaultMatch);
        setMatchReset(true);
    }

    const [r1loc, setr1loc] = useState(null);
    const [r2loc, setr2loc] = useState(null);
    const [r3loc, setr3loc] = useState(null);

    const handler1loc = (value: any) => {
        setr1loc(value);
        PositionChange1();
        console.log(r1loc);
    };

    const handler2loc = (value: any) => {
        setr2loc(value);
        PositionChange2();
        console.log(r2loc);
    };
    const handler3loc = (value: any) => {
        setr3loc(value);
        console.log(r3loc);
    };









    //Teleop

    async function AddTeleNetSample(){
        setTeleNetSampleScored(teleNetSampleScored + 1);


    }
    async function RemoveTeleNetSample(){
        if(teleNetSampleScored > 0){
            setTeleNetSampleScored(teleNetSampleScored - 1);
        }

    }
    async function AddTeleLowSample(){
        setTeleLowSampleScored(teleLowSampleScored + 1);

    }
    async function RemoveTeleLowSample(){
        if(teleLowSampleScored > 0){
            setTeleLowSampleScored(teleLowSampleScored - 1);
        }

    }
    async function AddTeleHighSample(){
        setTeleHighSampleScored(teleHighSampleScored + 1);

    }
    async function RemoveTeleHighSample(){
        if(teleHighSampleScored > 0){
            setTeleHighSampleScored(teleHighSampleScored - 1);
        }

    }


    async function RemoveTeleLowChamber(){
        if(teleLowChamber > 0){
            setTeleLowChamber(teleLowChamber - 1);
        }

    }
    async function AddTeleLowChamber(){
        setTeleLowChamber(teleLowChamber + 1);

    }



    async function AddTeleHighChamber(){
        setTeleHighChamber(teleHighChamber + 1);

    }
    async function RemoveTeleHighChamber(){
        if(teleHighChamber > 0){
            setTeleHighChamber(teleHighChamber - 1);
        }

    }





    const [teler1loc, setTeler1loc] = useState(null);
    const [teler2loc, setTeler2loc] = useState(null);

    const handlerTele1loc = (value: any) => {
        setTeler1loc(value);
        PositionTeleChange1();
    };

    const handlerTele2loc = (value: any) => {
        setTeler2loc(value);
        PositionTeleChange2();
        console.log(r2loc);
    };



    return (
        <div>
            <h1>Red Calc</h1>
            <nav>
                <Link href="/">Go to Blue Calc</Link><br />
                <Link href="/rank">Go to Ranking</Link><br />
                <Link href="/score">Go to Scoreboard</Link>
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
            </select>
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
                        <Button variant="outline-danger" onClick={() => setPens(pens + 1)}>
                            Penalty
                        </Button>
                    </Col>
                    <h1>
                        Penalties: {pens}
                    </h1>
                    <Col>
                        <Button variant="outline-success" onClick={() => setPens(pens - 1)}>
                            Remove Penalty
                        </Button>
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
                            {netSampleScored}
                        </h1>
                    </Col>
                    <Col>
                        <Button onClick={AddNetSample}>
                            Plus
                        </Button>
                    </Col>
                </Row>
                <Row>
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
                        Specimens in Low Basket
                    </Col>
                    <Col>
                        <Button onClick={RemoveLowSpecimen}>
                            Minus
                        </Button>
                    </Col>
                    <Col>
                        <h1>
                            {lowSpecimenScored}
                        </h1>
                    </Col>
                    <Col onClick={AddLowSpecimen}>
                        <Button>
                            Plus
                        </Button>
                    </Col>


                    <Col>
                        Specimens in High Basket
                    </Col>
                    <Col>
                        <Button onClick= {RemoveHighSpecimen}>
                            Minus
                        </Button>
                    </Col>
                    <Col>
                        <h1>
                            {highSpecimenScored}
                        </h1>
                    </Col>
                    <Col>
                        <Button onClick={AddHighSpecimen}>
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
                            <Button variant = "outline-primary" onClick={() => handler1loc("Ascent")}>{ascent1}</Button>
                            <Button variant = "outline-primary" onClick={() => handler1loc("No")}>{no1}</Button>
                            <Button variant = "outline-primary" onClick={() => handler1loc("Observation Zone")}>{obsz1}</Button>
                            <Button variant = "outline-primary" onClick={() => handler1loc("Ascent")}>{ascent1}</Button>


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



            </Container>


            <Container>
                <Row>
                    <Col>
                        <h1 >
                            Teleop
                        </h1>
                    </Col>

                </Row>
                <Row>

                    <Col>
                        Samples in NET
                    </Col>
                    <Col>
                        <Button onClick={RemoveTeleNetSample}>
                            Minus
                        </Button>
                    </Col>
                    <Col>
                        <h1>
                            {teleNetSampleScored}
                        </h1>
                    </Col>
                    <Col>
                        <Button onClick={AddTeleNetSample}>
                            Plus
                        </Button>
                    </Col>

                    <Col>
                        Samples in Low Basket
                    </Col>
                    <Col>
                        <Button onClick={RemoveTeleLowSample}>
                            Minus
                        </Button>
                    </Col>
                    <Col>
                        <h1>
                            {teleLowSampleScored}
                        </h1>
                    </Col>
                    <Col onClick={AddTeleLowSample}>
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
                        <Button onClick= {RemoveTeleHighSample}>
                            Minus
                        </Button>
                    </Col>
                    <Col>
                        <h1>
                            {teleHighSampleScored}
                        </h1>
                    </Col>
                    <Col>
                        <Button onClick={AddTeleHighSample}>
                            Plus
                        </Button>
                    </Col>
                </Row>





                <Row>

                    <Col>
                        Samples on Low Chamber
                    </Col>
                    <Col>
                        <Button onClick={RemoveTeleLowChamber}>
                            Minus
                        </Button>
                    </Col>
                    <Col>
                        <h1>
                            {teleLowChamber}
                        </h1>
                    </Col>
                    <Col>
                        <Button onClick={AddTeleLowChamber}>
                            Plus
                        </Button>
                    </Col>

                    <Col>
                        Samples in High Chamber
                    </Col>
                    <Col>
                        <Button onClick={RemoveTeleHighChamber}>
                            Minus
                        </Button>
                    </Col>
                    <Col>
                        <h1>
                            {teleHighChamber}
                        </h1>
                    </Col>
                    <Col onClick={AddTeleHighChamber}>
                        <Button>
                            Plus
                        </Button>
                    </Col>

                </Row>

                <Row>
                    <Col>
                        Specimens in Low Basket
                    </Col>
                    <Col>
                        <Button onClick={RemoveTeleLowSpecimen}>
                            Minus
                        </Button>
                    </Col>
                    <Col>
                        <h1>
                            {lowTeleSpecimenScored}
                        </h1>
                    </Col>
                    <Col onClick={AddTeleLowSpecimen}>
                        <Button>
                            Plus
                        </Button>
                    </Col>


                    <Col>
                        Specimens in High Basket
                    </Col>
                    <Col>
                        <Button onClick= {RemoveTeleHighSpecimen}>
                            Minus
                        </Button>
                    </Col>
                    <Col>
                        <h1>
                            {highTeleSpecimenScored}
                        </h1>
                    </Col>
                    <Col>
                        <Button onClick={AddTeleHighSpecimen}>
                            Plus
                        </Button>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <ButtonGroup aria-label="Basic example">
                            <Button variant = "outline-danger" onClick={() => handlerTele1loc("No")}>{teleno1}</Button>
                            <Button variant = "outline-primary" onClick={() => handlerTele1loc("Observation Zone")}>{teleobsz1}</Button>
                            <Button variant = "outline-success" onClick={() => handlerTele1loc("Ascent")}>{teleascent1}</Button>


                        </ButtonGroup>
                    </Col>

                    <Col>
                        <ButtonGroup aria-label="Basic example">
                            <Button variant = "outline-danger" onClick={() => handlerTele2loc("No")}>{teleno2}</Button>
                            <Button variant = "outline-primary" onClick={() => handlerTele2loc("Observation Zone")}>{teleobsz2}</Button>
                            <Button variant = "outline-success" onClick={() => handlerTele2loc("Ascent")}>{teleascent2}</Button>
                        </ButtonGroup>
                    </Col>


                </Row>
                <ButtonGroup aria-label="barnacle">
                    <Button variant = "outline-danger" onClick={() => handlerTele1loc("No")}>No</Button>
                    <Button variant = "outline-primary" onClick={() => handlerTele1loc("Observation Zone")}>Observation Zone</Button>
                    <Button variant = "outline-success" onClick={() => handlerTele1loc("Opponents Basket")}>Opponents Basket</Button>


                </ButtonGroup>




                <Button onClick={ResetAll}>
                    Reset
                </Button>


                <Button onClick={CalculateScore}>
                    Save/Update Calculations
                </Button>

            </Container>

            <div style={{textAlign: "center"}}>
                Teams:
                <br></br>
                {(currentMatch.red.teams || []).map((team: string, index: number) => {
                    return (
                        <div key={index}>
                            {team}
                        </div>
                    )
                })}
            </div>

        </div>
    );
}

export default RedCalc;

