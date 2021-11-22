import { GetStaticProps } from 'next';
import { useState } from 'react';

import KeywordsSection from '../KeywordsSection';

// UI & CSS
import {
  ButtonBlue,
  ButtonGray,
  ButtonOrange,
} from '../../../styles/ui-components/Chakra-Button';
import {
  Heading,
  Stack,
  Input,
  Container,
  Text,
  ButtonGroup,
  TagLabel,
  TagCloseButton,
} from '@chakra-ui/react';

type JobSummaryProps = {
  goToBasics: () => void;
  goToDetails: () => void;
  onChange: (e: React.FormEvent) => void;
  formData: any;
  createJob: (e: React.FormEvent) => void;
  jobKeywords: Array<string>;
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

      <Stack spacing={2} p={2} maxW="100%">
        <Heading fontSize="sm">Job Name:</Heading>{' '}
        {jobtitle && <Text>{jobtitle}</Text>}
        <br />
        <br />
        <Heading fontSize="sm">Job Description:</Heading>{' '}
        {jobdescription && <Text>{jobdescription}</Text>}
        <br />
        <br />
        {jobposition && (
          <>
            <Heading fontSize="sm">Job Position:</Heading> {jobposition}
          </>
        )}
        <br />
        <br />
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

      <Stack spacing={2} p={2} maxW="100%">
        <Heading fontSize="sm">Keywords:</Heading>

        <KeywordsSection
          keywordsData={jobKeywords}
          templateColumns="repeat(3, 3fr)"
        />

        <br />
        <br />

        {jobcompensation && jobmin && jobmax ? (
          <>
            <Heading fontSize="sm">Job Compensation:</Heading> {jobmin}-{jobmax}{' '}
            {jobcompensation}
          </>
        ) : null}
        <br />
        <br />
        {jobequity ? (
          <>
            <Heading fontSize="sm">Equity Offer:</Heading> {jobequity}
          </>
        ) : null}
        <br />
        <br />
        {joblocation ? (
          <>
            <Heading fontSize="sm">Job Location:</Heading> {joblocation}
          </>
        ) : null}
        <br />
        <br />
        <Heading fontSize="md">
          How should people contact you or your organization?
        </Heading>
        <Text fontSize="xs" textAlign="left" mb="2.5%">
          Write your website job post link or an email
        </Text>
        <Input
          _placeholder={{ color: 'black' }}
          borderColor={`${!wrongData ? '#e2e8f0' : 'red'}`}
          bgColor="white"
          color="black"
          _hover={{ borderColor: '#97c0e6' }}
          placeholder="e.g. www.company.com/job or company@email.com"
          name="jobcontact"
          value={jobcontact}
          onChange={(e) => onChange(e)}
        />
        {wrongData ? (
          <Text fontSize="xs" textAlign="left" color="red" fontWeight="bold">
            Add an email or website link
          </Text>
        ) : null}
      </Stack>

      <br />

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
