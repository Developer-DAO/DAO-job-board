import { Box, Container, Input } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';

function JobFilter() {
  const { t } = useTranslation('common');

  return (
    <Box mt="2.5%">
      <Container my="5px">
        <Input
          borderColor="#e2e8f0"
          bgColor="white"
          _hover={{ borderColor: '#97c0e6' }}
          placeholder={t('components.jobs.job_filter.placeholder')}
        />
      </Container>
    </Box>
  );
}

export default JobFilter;
