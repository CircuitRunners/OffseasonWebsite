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
