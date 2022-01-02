import JobFilter from '@/components/jobs/JobFilter';
import JobList from '@/components/jobs/JobList';
import { Box, HStack } from '@chakra-ui/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Index() {
  return (
    <>
      <HStack justify="space-between">
        <Box
          pt={{ '2xl': '5%', lg: '7%', sm: '17%', base: '15%' }}
          pl={{ '2xl': '5%', lg: '12%', sm: 'none', base: 'none' }}
        >
          <JobList />
        </Box>
        <JobFilter />
      </HStack>
    </>
  );
}
export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});
