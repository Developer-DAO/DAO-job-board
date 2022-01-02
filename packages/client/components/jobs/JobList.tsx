import JobCard from './JobCard';

import { Job } from '@/types/job';
import { Box, Grid } from '@chakra-ui/react';

export default function JobList() {
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
        gap="1"
        mx="auto"
        maxW="100vw"
      >
        <JobCard {...({} as Job)} />
        <JobCard {...({} as Job)} />
        <JobCard {...({} as Job)} />
      </Grid>
    </Box>
  );
}
