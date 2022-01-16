import JobCard from './JobCard';
import { Job } from '@/types/job';

import { Grid, Spinner } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { supabase } from '@/common/supabase';

export default function JobList() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    fetchJobs();
  }, []);
  async function fetchJobs() {
    const { data, error } = await supabase.from('jobs').select();
    setJobs(data || []);
    setLoading(false);
  }

  return (
    <Grid
      templateColumns={{
        '2xl': 'repeat(4, 1fr)',
        xl: 'repeat(3, 1fr)',
        lg: 'repeat(2, 1fr)',
        md: 'repeat(2, 1fr)',
        sm: 'repeat(1, 1fr)',
        base: 'repeat(1, 1fr)',
      }}
      gap={8}
      mx="auto"
      p={10}
    >
      {jobs.map((job) => {
        return <JobCard key={job.id} {...job} />;
      })}
    </Grid>
  );
}
