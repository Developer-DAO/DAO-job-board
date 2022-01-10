import JobCard from './JobCard';
import { Job } from '@/types/job';

import { Box, Grid, Spinner } from '@chakra-ui/react';
import { useState } from 'react';
import { supabase } from '@/common/supabase';

export default function JobList() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const fetchJobs = async () => {
    const { data, error } = await supabase.from('jobs');
    if (data) {
      setJobs(data);
    }
  };
  fetchJobs();

  return (
    <Box
      position="relative"
      maxW={{ lg: '70%', md: '100%' }}
      textAlign="center"
      m="auto"
    >
      <Grid
        templateColumns={{
          '2xl': 'repeat(4, 2fr)',
          lg: 'repeat(2, 2fr)',
          md: 'repeat(2, 2fr)',
          sm: 'repeat(1, 1fr)',
          base: 'repeat(1, 1fr)',
        }}
        gap="2"
        mx="auto"
        maxW="100vw"
      >
        {/* {jobs ? (jobs.map(job => {
          <JobCard {...job} />
        })) : <Spinner color="primary.400" />} */}
      </Grid>
    </Box>
  );
}
