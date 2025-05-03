import {createClient} from "@supabase/supabase-js";
import {Match} from "@/app/types";

const supabaseUrl = 'https://okpmwvncllgioexsqjut.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9rcG13dm5jbGxnaW9leHNxanV0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYxMjgzMjUsImV4cCI6MjA2MTcwNDMyNX0.ZHe0fnKscTJDyX5OJHbFU_9_e6XulqqAflrhkGHteM0'
export let supabase = createClient(supabaseUrl, supabaseAnonKey)

function config() {
    supabase = createClient(supabaseUrl, supabaseAnonKey)
}

export async function getAllMatches() {

    const { data: matches, error } = await supabase
        .from('matches')
        .select('*')

    return matches;
}

export async function getMatchByNumber(number: number) {
    return (await getAllMatches()).filter((match: number) => match.number == number)[0];
}

export async function updateMatch(id: number, match: Match) {
    const { data, error } = await supabase
        .from('matches')
        .update(match)
        .eq('id', id)
        .select()

    return data[0];
}

export async function getTeams() {

    const { data: teams, error } = await supabase
        .from('teams')
        .select('*')

    return teams;
}

export async function updateTeams(teams: { name: string, score: number, id: number, wins: number, losses: number }[]) {
    console.log(teams);
    let new_teams: {id: number; name: string; score: number, wins: number, losses: number}[] = [];
    teams.map((team) => {
        console.log(team);
        if (team.score && team.wins != 0 && team.losses !=0) {
            new_teams.push(team)
        } else {

        }
    })
    console.log(new_teams);
    const datas = [];
    for (let i = new_teams.length - 1; i >= 0; i--) {
        const { data, error } = await supabase
            .from('teams')
            .update(new_teams[i])
            .eq('name', new_teams[i].name)
            .select()
        datas.push(data[0] || {});
    }

    return datas;
}