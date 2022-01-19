import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import JobList from '@/components/jobs/JobList';

import { Box } from '@chakra-ui/react';

export default function Index() {
  return (
    <Box margin="auto">
      <JobList />
    </Box>
  );
}
export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});
