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
        <Heading>Job Summary</Heading>
        <Text>Check that everything is correct (click edit if not)</Text>
      </Container>

      <Container m="auto" textAlign="center" maxW="100%">
        <Heading fontSize="lg">
          Job Basics <ButtonGray onClick={goToBasics}>Edit</ButtonGray>
        </Heading>
      </Container>

      <Stack spacing={3} p={2} maxW="100%">
        {jobtitle && (
          <>
            <Heading fontSize="sm">Job Name:</Heading> {jobtitle}
          </>
        )}

        {jobdescription && (
          <>
            <Heading fontSize="sm">Job Description:</Heading> {jobdescription}
          </>
        )}

        {jobposition && (
          <>
            <Heading fontSize="sm">Job Position:</Heading> {jobposition}
          </>
        )}

        {jobtype && (
          <>
            <Heading fontSize="sm">Job Type:</Heading> {jobtype}
          </>
        )}
      </Stack>

      <Container margin="auto" textAlign="center" maxW="100%">
        <Heading fontSize="lg">
          Job Details <ButtonGray onClick={goToDetails}>Edit</ButtonGray>
        </Heading>
      </Container>

      <Stack spacing={5} p={2} maxW="100%">
        <Heading fontSize="sm">Keywords:</Heading>

        <KeywordsSection
          keywordsData={jobKeywords}
          templateColumns="repeat(3, 3fr)"
        />

        {jobcompensation && (
          <>
            <Heading fontSize="sm">Job Compensation:</Heading> {jobmin}-{jobmax}{' '}
            {jobcompensation}
          </>
        )}

        {jobequity ? (
          <>
            <Heading fontSize="sm">Equity Offer:</Heading> {jobequity}
          </>
        ) : null}

        {joblocation ? (
          <>
            <Heading fontSize="sm">Job Location:</Heading> {joblocation}
          </>
        ) : null}
        <Box>
          <Heading fontSize="md">
            How should people contact you or your organization?
          </Heading>
          <Text fontSize="xs" textAlign="left" mb="1%">
            Write your website job post link or an email
          </Text>
          <Input
            borderColor={`${!wrongData ? '#e2e8f0' : 'red'}`}
            bgColor="white"
            color="black"
            _hover={{ borderColor: '#97c0e6' }}
            placeholder="e.g. www.company.com/job or company@email.com"
            _placeholder={{ color: 'black' }}
            name="jobcontact"
            value={jobcontact}
            onChange={(e) => onChange(e)}
          />
          {wrongData ? (
            <Text fontSize="xs" textAlign="left" color="red" fontWeight="bold">
              Add an email or website link
            </Text>
          ) : null}
        </Box>
      </Stack>

      <ButtonGroup display="flex" flexDirection="column" m="5px" padding="1px">
        <ButtonBlue onClick={(e) => sendJobData(e)}>Post Job</ButtonBlue>

        <ButtonOrange onClick={goToDetails}>Back</ButtonOrange>
      </ButtonGroup>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { FormData },
  };
};
