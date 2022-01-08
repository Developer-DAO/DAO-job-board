import JobFilter from '@/components/jobs/JobFilter';
import JobList from '@/components/jobs/JobList';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Index() {
  return (
    <>
      <Grid templateColumns="250px repeat(4, 1fr)" gap="1">
        <GridItem colStart={2} colEnd={5} overflow="hidden">
          <Box
            pt={{ '2xl': '5%', lg: '7%', sm: '17%', base: '15%' }}
            pl={{ '2xl': '5%', lg: '12%', sm: 'none', base: 'none' }}
          >
            <JobList />
          </Box>
        </GridItem>
        <GridItem colStart={5}>
          <Box pt={{ '2xl': '5%', lg: '7%', sm: '17%', base: '15%' }}>
            <JobFilter />
          </Box>
        </GridItem>
      </Grid>
    </>
  );
}
export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});
