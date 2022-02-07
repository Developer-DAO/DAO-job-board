import JobFilter from '@/components/jobs/JobFilter';
import JobList from '@/components/jobs/JobList';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Index() {
  return (
    <Box margin="auto" ml={{ xl: '72', base: '0' }} mt={{ lg: 14, base: 6 }}>
      <JobList />
    </Box>
  );
}
export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});
