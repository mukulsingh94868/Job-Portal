import { getJobs } from '@/api/apiJobs'
import React, { useEffect } from 'react'
import { useSession } from '@clerk/clerk-react'

const JobListing = () => {
  const { session } = useSession();

  const fetchJobs = async () => {
    const supabaseToken = await session.getToken({
      template: "supabase"
    });
    console.log('supabaseToken', supabaseToken);
    const data = await getJobs(supabaseToken);
    console.log('data', data);
  };

  useEffect(() => {
    fetchJobs();
  }, []);
  return (
    <div>
      JobListing
    </div>
  )
}

export default JobListing;