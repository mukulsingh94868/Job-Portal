import supabaseClient from "@/utils/supabase";

export async function getJobs(token) {
    const supabase = await supabaseClient(token);
    let query = supabase.from("jobs").select("*");
    console.log('Query', query);

    const { data, error } = query;

    if (error) {
        console.log('Data fetching error', error);
        return null;
    }

    return data;
}