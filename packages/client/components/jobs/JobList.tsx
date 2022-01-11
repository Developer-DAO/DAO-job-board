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
  //Function commented out to prevent issues while testing the front-end prototype
  // fetchJobs();

  return (
    <Box
      position="relative"
      maxW={{ lg: '70%', md: '100%' }}
      textAlign="center"
      m="auto"
      h="100%"
      pb={{ '2xl': '10%', lg: '10%', md: '15%', sm: '20%', base: '15%' }}
    >
      <Grid
        templateColumns={{
          '2xl': 'repeat(3, 1fr)',
          lg: 'repeat(2, 1fr)',
          md: 'repeat(2, 1fr)',
          sm: 'repeat(1, 1fr)',
          base: 'repeat(1, 1fr)',
        }}
        gap="2"
        mx="auto"
        maxW="100vw"
      >
        {/*Ternary expression is deactivated until we have a working database connection / forms

          {jobs ? (jobs.map(job => {
          <JobCard {...job} />
        })) : <Spinner color="primary.400" />} */}
        <JobCard {...({} as Job)} />
        <JobCard {...({} as Job)} />
        <JobCard {...({} as Job)} />
        <JobCard {...({} as Job)} />
        <JobCard {...({} as Job)} />
        <JobCard {...({} as Job)} />
      </Grid>
    </Box>
  );
}
