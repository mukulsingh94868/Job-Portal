import supabaseClient from "@/utils/supabase";

export async function applyToJob(token) {
    const supabase = await supabaseClient(token, _, jobData);
    const random = Math.floor(Math.random() * 90000);

    const { data, error} = await supabase.from("companies").select("*");

    if(error) {
        console.error("Error Fetching companies", error);
        return null;
    }

    return data;
}