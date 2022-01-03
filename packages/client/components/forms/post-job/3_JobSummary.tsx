import { GetStaticProps } from 'next';
import { useState } from 'react';

import KeywordsSection from '../KeywordsSection';
import { Keyword } from '@/types';

import {
  Box,
  Heading,
  Stack,
  Input,
  Container,
  Text,
  Button,
} from '@chakra-ui/react';

import { useTranslation } from 'next-i18next';

type JobSummaryProps = {
  goToBasics: () => void;
  goToDetails: () => void;
  onChange: (e: React.FormEvent) => void;
  formData: {
    title: string;
    description: string;
    type: string;
    position: string;
    compensation: string;
    min: string;
    max: string;
    equity: string;
    location: string;
    contact: string;
  };
  createJob: (e: React.FormEvent) => void;
  jobKeywords: Keyword[];
};

export default function GigSummary({
  formData,
  jobKeywords,
  goToDetails,
  onChange,
  createJob,
  goToBasics,
}: JobSummaryProps) {
  const { t } = useTranslation('common');

  //Active state makes inputs red if data is not correct
  const [wrongData, setWrongData] = useState(false);

  const {
    title,
    description,
    type,
    position,
    compensation,
    min,
    max,
    equity,
    location,
    contact,
  } = formData;

  const sendJobData = (e: React.FormEvent) => {
    if (contact) {
      createJob(e);
    } else {
      setWrongData(true);
    }
  };

  return (
    <>
      <Container textAlign="center" mb="2.5%">
        <Heading>{t('components.forms.post_job.job_summary.header')}</Heading>
        <Text>
          {t('components.forms.post_job.job_summary.header_sub_text')}
        </Text>
      </Container>

      <Container m="auto" textAlign="center" maxW="100%">
        <Heading fontSize="lg">
          {t('components.forms.post_job.job_summary.job_basics')}{' '}
          <Button onClick={goToBasics}>
            {t('components.forms.post_job.job_summary.edit_button_text')}
          </Button>
        </Heading>
      </Container>

      <Stack spacing="small" p={2} maxW="100%">
        {title && (
          <>
            <Heading fontSize="sm">
              {t('components.forms.post_job.job_summary.job_name')}
            </Heading>{' '}
            {title}
          </>
        )}

        {description && (
          <>
            <Heading fontSize="sm">
              {t('components.forms.post_job.job_summary.job_description')}
            </Heading>{' '}
            {description}
          </>
        )}

        {position && (
          <>
            <Heading fontSize="sm">
              {t('components.forms.post_job.job_summary.job_position')}
            </Heading>{' '}
            {position}
          </>
        )}

        {type && (
          <>
            <Heading fontSize="sm">
              {t('components.forms.post_job.job_summary.job_type')}
            </Heading>{' '}
            {type}
          </>
        )}
      </Stack>

      <Container margin="auto" textAlign="center" maxW="100%">
        <Heading fontSize="lg">
          {t('components.forms.post_job.job_summary.job_details')}{' '}
          <Button onClick={goToDetails}>
            {t('components.forms.post_job.job_summary.edit_button_text')}
          </Button>
        </Heading>
      </Container>

      <Stack spacing="large" p={2} maxW="100%">
        <Heading fontSize="sm">
          {t('components.forms.post_job.job_summary.keywords')}
        </Heading>

        <KeywordsSection
          keywordsData={jobKeywords}
          templateColumns="repeat(3, 3fr)"
        />

        {compensation && (
          <>
            <Heading fontSize="sm">
              {t('components.forms.post_job.job_summary.job_compensation')}
            </Heading>{' '}
            {min}-{max} {compensation}
          </>
        )}

        {equity ? (
          <>
            <Heading fontSize="sm">
              {t('components.forms.post_job.job_summary.job_equity')}
            </Heading>{' '}
            {equity}
          </>
        ) : null}

        {location ? (
          <>
            <Heading fontSize="sm">
              {t('components.forms.post_job.job_summary.job_location')}
            </Heading>{' '}
            {location}
          </>
        ) : null}
        <Box>
          <Heading fontSize="md">
            {t('components.forms.post_job.job_summary.contact_header')}
          </Heading>
          <Text fontSize="xs" textAlign="left" mb="1%">
            {t('components.forms.post_job.job_summary.contact_sub_text')}
          </Text>
          <Input
            borderColor={`${!wrongData ? '#e2e8f0' : 'red'}`}
            bgColor="white"
            color="black"
            _hover={{ borderColor: '#97c0e6' }}
            placeholder={t(
              'components.forms.post_job.job_summary.contact_placeholder'
            )}
            _placeholder={{ color: 'black' }}
            name="contact"
            value={contact}
            onChange={(e) => onChange(e)}
          />
          {wrongData ? (
            <Text fontSize="xs" textAlign="left" color="red" fontWeight="bold">
              {t('components.forms.post_job.job_summary.add_email_or_site')}
            </Text>
          ) : null}
        </Box>

        <Stack>
          <Button
            bg="primary.500"
            _hover={{ bg: 'primary.700' }}
            color="white"
            onClick={(e) => sendJobData(e)}
          >
            {t('components.forms.post_job.job_summary.post_job')}
          </Button>
          <Button
            bg="danger.600"
            _hover={{ bg: 'danger.800' }}
            color="white"
            onClick={goToDetails}
          >
            {t('components.forms.post_job.job_summary.back_button_text')}
          </Button>
        </Stack>
      </Stack>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { FormData },
  };
};
