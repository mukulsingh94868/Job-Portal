const { useSession } = require("@clerk/nextjs");
const { useState } = require("react");

const useFetch = (cb, options = {}) => {
    const [data, setData] = useState(undefined);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);
    const { session } = useSession();

    const fn = async (...args) => {
        setLoading(true);
        setError(null);

        try {
            const supabaseToken = await session.getToken({
                template: "supabase"
            });
            const response = await cb(supabaseToken, options, ...args);
            setData(response);
            setError(null);
        } catch (error) {
            console.log('error', error);
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    return { data, loading, error, fn };
};

export default useFetch;