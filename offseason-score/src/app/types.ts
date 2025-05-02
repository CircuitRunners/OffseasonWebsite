export type MatchScore = {
    //label all these
    
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


