import supabaseClient from "@/utils/supabase";

export async function getJobs(token, { location, company_id, searchQuery }) {
    const supabase = await supabaseClient(token);
    let query = supabase.from("jobs").select("*");
    console.log('Query', query);

    const {data, error} = query;

    if (error) {
        console.log('Data fetching error', error);
        return null;
    }

    return data;
}