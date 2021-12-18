import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import JobFilter from '../../components/jobs/JobFilter';
import JobCard from '../../components/jobs/JobCard';

import { Heading, Container, Text } from '@chakra-ui/react';

export default function Index() {
  return (
    <Container
      maxW={{ lg: '70%', md: '90%', sm: '100%' }}
      m="auto"
      textAlign="center"
    >
      <Heading>Jobs</Heading>
      <Text as="i">
        Curated Web3 and blockchain jobs at companies or startups.
      </Text>
      <JobFilter />
      <Container w="100%" maxW="100%">
        <JobCard />
      </Container>
    </Container>
  );
}
export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});
