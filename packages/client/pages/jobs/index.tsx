import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import JobFilter from '../../components/jobs/JobFilter';
import JobCard from '../../components/jobs/JobCard';

import { Job } from '../../types/job';
import { Container, Flex, Heading, Text } from '@chakra-ui/react';

export default function Index() {
  return (
    <Container
      maxW={{ lg: '70%', md: '90%', sm: '100%' }}
      m="auto"
      pt={{ '2xl': '5%', lg: '7%', sm: '10%' }}
      pl={{ '2xl': '5%', lg: '12%', sm: 'none', base: 'none' }}
      textAlign="center"
    >
      <Heading>Jobs</Heading>
      <Text as="i">
        Curated Web3 and blockchain jobs at companies or startups.
      </Text>
      <JobFilter />
      <Flex maxW="100%" mt="2.5%" w="100%" wrap="wrap">
        <JobCard {...({} as Job)} />
        <JobCard {...({} as Job)} />
        <JobCard {...({} as Job)} />
      </Flex>
    </Container>
  );
}
export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});
