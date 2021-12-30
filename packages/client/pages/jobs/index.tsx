import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// import JobFilter from '@/components/jobs/JobFilter';
import JobCard from '@/components/jobs/JobCard';

import { Job } from '@/types/job';
import { Box, Grid, Text } from '@chakra-ui/react';

export default function Index() {
  return (
    <Box
      maxW="85%"
      m="auto"
      pt={{ lg: '7%', sm: '20%', base: '17%' }}
      pr={{ lg: '12%', sm: 'none', base: 'none' }}
      pl={{ lg: '15%', md: '2%', sm: 'none', base: 'none' }}
      textAlign="center"
    >
      <Grid
        templateColumns={{
          '2xl': 'repeat(3, 2fr)',
          lg: 'repeat(2, 2fr)',
          md: 'repeat(2, 2fr)',
          sm: 'repeat(1, 1fr)',
          base: 'repeat(1, 1fr)',
        }}
        gap="1"
        maxW="100vw"
      >
        <JobCard {...({} as Job)} />
        <JobCard {...({} as Job)} />
        <JobCard {...({} as Job)} />
      </Grid>
    </Box>
  );
}
export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});
