import { GetStaticProps } from 'next';
import { useState } from 'react';

// UI & CSS
import styled from 'styled-components'
import { ButtonBlue, ButtonGray, ButtonOrange } from '../../styles/ui-components/Chakra-Button'
import {
  Heading, Tag, Input, Container, Text, ButtonGroup, TagLabel, TagCloseButton, HStack
} from "@chakra-ui/react";

type JobSummaryProps = {
  goToBasics: () => void;
  goToDetails: () => void;
  onChange: (e: React.FormEvent) => void;
  formData: any;
  createJob: (e: React.FormEvent) => void;
};

export default function GigSummary({
  formData,
  goToDetails,
  onChange,
  createJob,
  goToBasics }: JobSummaryProps) {

    //Active state makes inputs red if data is not correct
    const [wrongData, setWrongData] = useState(false);

  const {
    jobtitle,
    jobdescription,
    jobtype,
    jobcategory,
    jobposition,
    jobcompensation,
    jobmin,
    jobmax,
    jobequity,
    joblocation,
    jobcontact
  } = formData;

  const sendJobData = (e) => {
    if(jobcontact) {
      createJob(e)
    } else {
      setWrongData(true);
    }
  }

  return (
    <>
      <Container
        textAlign="center"
        mt="2.5%"
        mb="2.5%"
      >
        <Heading>Job Summary</Heading>
        <Text>Check that everything is correct (click edit if not)</Text>
      </Container>

      <Container
        margin="auto"
        textAlign="center"
        maxW="100%"
      >
        <Heading
          fontSize="lg"
        >Job Basics</Heading>
        <ButtonGray
          onClick={goToBasics}
        >Edit</ButtonGray>
      </Container>


      <Container
        maxW="100%"
      >
        <Heading
          fontSize="sm"
        >Job Name:</Heading>{' '}{jobtitle}

        <br />
        <br />

        <Heading
          fontSize="sm"
        >Job Description:</Heading>{' '}{jobdescription}

        <br />
        <br />

        {jobposition &&
          <><Heading
            fontSize="sm"
          >Job Position:</Heading>{' '}{jobposition}</>}

        <br />
        <br />

        {jobtype &&
          <>
            <Heading
              fontSize="sm"
            >Job Type:</Heading>{' '}{jobtype}</>}
      </Container>

      <br />

      <Container
        margin="auto"
        textAlign="center"
        maxW="100%"
      >
        <Heading
          fontSize="lg"
        >Job Details</Heading>
        <ButtonGray
          onClick={goToDetails}
        >Edit</ButtonGray>
      </Container>

      <Container
        maxW="100%"
      >
        <Heading
          fontSize="sm"
        >Category:</Heading>
        <HStack spacing={4} mt="2.5%" mb="2.5%">
          <Tag
            size="md"
            borderRadius="full"
            variant="solid"
            color="black"
          >
            <TagLabel>Keyword</TagLabel>
          </Tag>
        </HStack>

        {jobcompensation && jobmin && jobmax ? (
          <>
            <Heading
              fontSize="sm">Job Compensation:</Heading>{' '} {jobmin}-{jobmax}{' '}{jobcompensation}
          </>) : null}

        <br />
        <br />

        {jobequity ? (
          <>
            <Heading
              fontSize="sm">Equity Offer:</Heading>{' '}{jobequity}
          </>) : null}

        <br />
        <br />

        {joblocation ? (
          <>
            <Heading
              fontSize="sm">Job Location:</Heading>{' '}{joblocation}
          </>) : null}

        <br />
        <br />

        <Heading
          fontSize="md"
        >
          How should people contact you or your company?
        </Heading>
        <Text
          fontSize="xs"
          textAlign="left"
          mb="2.5%">Write your website job post link or an email</Text>
        <Input
          _placeholder={{ color: "black" }}
          borderColor={`${!wrongData ? "#e2e8f0" : "red"}`}
          bgColor="white"
          color="black"
          _hover={{ borderColor: '#97c0e6' }}
          placeholder="e.g. www.company.com/job or company@email.com"
          name="jobcontact"
          value={jobcontact}
          onChange={(e) => onChange(e)}
        />
      {wrongData ? <Text
          fontSize="xs"
          textAlign="left"
          color="red"
          fontWeight="bold"
        >Add an email or website link</Text> : null}

      </Container>

      <br />

      <ButtonGroup
        display="flex"
        flexDirection="column"
        m="5px"
        padding="1px"
      >
        <ButtonBlue
          onClick={e => sendJobData(e)}
        >Post Job</ButtonBlue>

        <ButtonOrange
          onClick={goToDetails}
        >Back</ButtonOrange>
      </ButtonGroup>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { FormData }
  }
}
