import { GetStaticProps } from 'next';
import { useState } from 'react';

import KeywordsSection from '../KeywordsSection';
import { Keyword } from '@/types';

// UI & CSS
import {
  ButtonBlue,
  ButtonGray,
  ButtonOrange,
} from '@/styles/ui-components/Chakra-Button';

import {
  Box,
  Heading,
  Stack,
  Input,
  Container,
  Text,
  ButtonGroup,
} from '@chakra-ui/react';

import { useTranslation } from 'next-i18next';

type JobSummaryProps = {
  goToBasics: () => void;
  goToDetails: () => void;
  onChange: (e: React.FormEvent) => void;
  formData: {
    jobtitle: string;
    jobdescription: string;
    jobtype: string;
    jobposition: string;
    jobcompensation: string;
    jobmin: string;
    jobmax: string;
    jobequity: string;
    joblocation: string;
    jobcontact: string;
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
    jobtitle,
    jobdescription,
    jobtype,
    jobposition,
    jobcompensation,
    jobmin,
    jobmax,
    jobequity,
    joblocation,
    jobcontact,
  } = formData;

  const sendJobData = (e: React.FormEvent) => {
    if (jobcontact) {
      createJob(e);
    } else {
      setWrongData(true);
    }
  };

  return (
    <>
      <Container textAlign="center" mt="2.5%" mb="2.5%">
        <Heading>{t('components.forms.post_job.job_summary.header')}</Heading>
        <Text>
          {t('components.forms.post_job.job_summary.header_sub_text')}
        </Text>
      </Container>

      <Container m="auto" textAlign="center" maxW="100%">
        <Heading fontSize="lg">
          {t('components.forms.post_job.job_summary.job_basics')}{' '}
          <ButtonGray onClick={goToBasics}>
            {t('components.forms.post_job.job_summary.edit_button_text')}
          </ButtonGray>
        </Heading>
      </Container>

      <Stack spacing={3} p={2} maxW="100%">
        {jobtitle && (
          <>
            <Heading fontSize="sm">
              {t('components.forms.post_job.job_summary.job_name')}
            </Heading>{' '}
            {jobtitle}
          </>
        )}

        {jobdescription && (
          <>
            <Heading fontSize="sm">
              {t('components.forms.post_job.job_summary.job_description')}
            </Heading>{' '}
            {jobdescription}
          </>
        )}

        {jobposition && (
          <>
            <Heading fontSize="sm">
              {t('components.forms.post_job.job_summary.job_position')}
            </Heading>{' '}
            {jobposition}
          </>
        )}

        {jobtype && (
          <>
            <Heading fontSize="sm">
              {t('components.forms.post_job.job_summary.job_type')}
            </Heading>{' '}
            {jobtype}
          </>
        )}
      </Stack>

      <Container margin="auto" textAlign="center" maxW="100%">
        <Heading fontSize="lg">
          {t('components.forms.post_job.job_summary.job_details')}{' '}
          <ButtonGray onClick={goToDetails}>
            {t('components.forms.post_job.job_summary.edit_button_text')}
          </ButtonGray>
        </Heading>
      </Container>

      <Stack spacing={5} p={2} maxW="100%">
        <Heading fontSize="sm">
          {t('components.forms.post_job.job_summary.keywords')}
        </Heading>

        <KeywordsSection
          keywordsData={jobKeywords}
          templateColumns="repeat(3, 3fr)"
        />

        {jobcompensation && (
          <>
            <Heading fontSize="sm">
              {t('components.forms.post_job.job_summary.job_compensation')}
            </Heading>{' '}
            {jobmin}-{jobmax} {jobcompensation}
          </>
        )}

        {jobequity ? (
          <>
            <Heading fontSize="sm">
              {t('components.forms.post_job.job_summary.job_equity')}
            </Heading>{' '}
            {jobequity}
          </>
        ) : null}

        {joblocation ? (
          <>
            <Heading fontSize="sm">
              {t('components.forms.post_job.job_summary.job_location')}
            </Heading>{' '}
            {joblocation}
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
            name="jobcontact"
            value={jobcontact}
            onChange={(e) => onChange(e)}
          />
          {wrongData ? (
            <Text fontSize="xs" textAlign="left" color="red" fontWeight="bold">
              {t('components.forms.post_job.job_summary.add_email_or_site')}
            </Text>
          ) : null}
        </Box>
      </Stack>

      <ButtonGroup display="flex" flexDirection="column" m="5px" padding="1px">
        <ButtonBlue onClick={(e) => sendJobData(e)}>
          {t('components.forms.post_job.job_summary.post_job')}
        </ButtonBlue>

        <ButtonOrange onClick={goToDetails}>
          {t('components.forms.post_job.job_summary.back_button_text')}
        </ButtonOrange>
      </ButtonGroup>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { FormData },
  };
};
