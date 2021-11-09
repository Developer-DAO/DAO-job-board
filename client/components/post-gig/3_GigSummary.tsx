import { GetStaticProps } from 'next';

// UI & CSS
import { ButtonBlue, ButtonGray, ButtonOrange } from '../../styles/ui-components/Chakra-Button'

import {
  Heading, Tag, Input, Container, Text, ButtonGroup, TagLabel, TagCloseButton, HStack
} from "@chakra-ui/react";

type GigSummaryProps = {
  goToDetails: () => void;
  goToBasics: () => void;
  formData: any;
  createGig: (e: React.FormEvent) => void;
};

export default function GigSummary({
  formData,
  goToDetails,
  createGig,
  goToBasics }: GigSummaryProps) {

  const {
    gigname,
    gigdescription,
    gigcategory,
    gigwebsite,
    gigrepo,
    gigreward,
    gigamount,
    gigtimeframe
  } = formData;

  return (
    <>
      <Container textAlign="center">
        <Heading>Gig Summary</Heading>
        <Text as="i">Check that everything is correct (click edit if not)</Text>
      </Container>
      <br/>
      <Container
        margin="auto"
        textAlign="center"
        maxW="100%"
      >
        <Heading
          fontSize="lg"
        >Gig Basics</Heading>
        <ButtonGray
          onClick={goToBasics}
          styling='normal'
        >Edit</ButtonGray>
      </Container>

      <Container
        margin="auto"
        textAlign="left"
        maxW="100%">
        <Heading
          fontSize="sm"
        >Gig Name:</Heading>{' '}{gigname}

        <br/>
        <br/>
        <Heading
          fontSize="sm"
        >Gig Description:</Heading>{' '}{gigdescription}

        {gigwebsite ? (<><Heading
          fontSize="sm"
        >Gig Website:</Heading>{' '}{gigwebsite}</>) : null}

        {gigrepo ? (<><Heading
          fontSize="sm"
        >Gig Repo:</Heading>{' '}{gigrepo}</>) : null}
      </Container>
      <br />

      <Container
        margin="auto"
        textAlign="center"
        maxW="100%"
      >
        <Heading fontSize="lg">
          Gig Details</Heading>
        <ButtonGray
          onClick={goToDetails}
          styling='normal'
        >Edit</ButtonGray>
      </Container>

      <Container
        margin="auto"
        textAlign="left"
        maxW="100%">
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


        {gigreward && gigamount ? (
          <>
            <Heading
              fontSize="sm">Gig Reward:</Heading>{' '} {gigamount}{' '}{gigreward}
          </>) : null}

        <br />
        <br />

        {gigtimeframe ? (
          <>
            <Heading
              fontSize="sm">Gig Timeframe:</Heading>{' '}{gigtimeframe}
          </>) : null}

      </Container>
      <br />
      <ButtonGroup
        display="flex"
        flexDirection="column"
        m="5px"
        padding="1px"
      >
        <ButtonBlue
          onClick={createGig}
        >Create Gig</ButtonBlue>

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
