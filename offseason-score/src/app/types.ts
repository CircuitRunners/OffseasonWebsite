export type MatchScore = {
    //label all these
    
}

export type Match = {
    matchNumber: number;
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


