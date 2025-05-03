export type MatchScore = {
    //label all these
    netSampleScored: number;
    lowSampleScored: number;
    highSampleScored: number;
    lowChamber: number;
    highChamber: number;
    specimenScored: number;
    lowSpecimenScored: number;
    highSpecimenScored: number;


    teleNetSampleScored: number;
    teleLowSampleScored: number;
    teleHighSampleScored: number;
    teleLowChamber: number;
    teleHighChamber: number;
    lowTeleSpecimenScored: number;
    highTeleSpecimenScored: number;


    totalScore: number;

}

export const defaultMatch: Match = {
    id: 0,
    number: 0,
    blue: {
        teamNumbers: ['0', '0'],
        score: {
            netSampleScored: 0,
            lowSampleScored: 0,
            highSampleScored: 0,
            lowChamber: 0,
            highChamber: 0,
            specimenScored: 0,
            lowSpecimenScored: 0,
            highSpecimenScored: 0,


            teleNetSampleScored: 0,
            teleLowSampleScored: 0,
            teleHighSampleScored: 0,
            teleLowChamber: 0,
            teleHighChamber: 0,
            lowTeleSpecimenScored: 0,
            highTeleSpecimenScored: 0,


            totalScore: 0,

        }
    },
    red: {
        teamNumbers: ['0', '0'],
        score: {
            netSampleScored: 0,
            lowSampleScored: 0,
            highSampleScored: 0,
            lowChamber: 0,
            highChamber: 0,
            specimenScored: 0,
            lowSpecimenScored: 0,
            highSpecimenScored: 0,


            teleNetSampleScored: 0,
            teleLowSampleScored: 0,
            teleHighSampleScored: 0,
            teleLowChamber: 0,
            teleHighChamber: 0,
            lowTeleSpecimenScored: 0,
            highTeleSpecimenScored: 0,


            totalScore: 0,

        }
    }
}

export type Match = {
    id: number
    number: number;
    blue: {
        teamNumbers: string[];
        score: MatchScore
    };
    red: {
        teamNumbers: string[];
        score: MatchScore
    };
}

export type Team = {
    teamNumber: string;
    rankingScore: number;
    ranking: number;
}


