import { useState } from 'react';
import { GetStaticProps } from 'next'

import { ButtonGreen, ButtonOrange, ButtonBlack } from "../../styles/ui-components/Chakra-Button"

import {
  Heading, Tag, Input, Textarea, Select, Container, Text, ButtonGroup, TagLabel,
  TagCloseButton,
  HStack
} from "@chakra-ui/react";

type GigDetailProps = {
  goToBasics: () => void;
  goToSummary: () => void;
  onChange: (e: React.FormEvent) => void;
  formData: any;
  setFormData: any;
  addTimeframe: () => void;
  timeframeActive: boolean;
};

export default function GigDetails({
  goToBasics,
  goToSummary,
  formData,
  onChange,
  setFormData,
  addTimeframe,
  timeframeActive }: GigDetailProps) {

  //Active state makes inputs red if data is not correct
  const [wrongData, setWrongData] = useState(false);

  const {
    gigcategory,
    gigreward,
    gigamount,
    gigtimeframe
  } = formData;

  const nextPage = () => {

    if (gigcategory) {
      goToSummary();
    } else {
      setWrongData(true);
    }
  };

  const selectCategory = () => {
    setFormData({ ...formData, gigcategory: 'category' })
  }

  return (
    <>
      <Container
        textAlign="center"
        mt="2.5%"
        mb="2.5%"
      >
        <Heading>Gig Details</Heading>
        <Text
          color="black"
          as="i"
        >Define your project timeframe, category, and reward</Text>
      </Container>

      <Container
        maxW="100%"
      >

        <Heading
          mb='5px'
          color="black"
          fontSize="md"
          textAlign="left"
        >Pick a gig keyword category</Heading>

        {!wrongData ? <Text
          fontSize="xs"
          textAlign="left"
        >Keywords help categorize your job post (pick at least 3)</Text> :
          <Text
            fontSize="xs"
            textAlign="left"
            color="red"
            fontWeight="bold"
          >Make sure to pick at least 3 keywords</Text>
        }

        <HStack spacing={4}
          mt="2.5%"
          mb="2.5%"
          border={!wrongData ? "none" : "1px solid red"}
        >
          <ButtonBlack>
            Select Keywords
            </ButtonBlack>
          <Tag
            onClick={selectCategory}
            size="md"
            borderRadius="full"
            variant="solid"
            colorScheme="red"
            color="black"
          >
            <TagLabel>Keyword</TagLabel>
            <TagCloseButton />
          </Tag>
        </HStack>

        <Heading
          mb='5px'
          color="black"
          fontSize="md"
          textAlign="left">Explain reward method (optional)</Heading>
        <Select
          name='gigreward'
          value={gigreward}
          onChange={e => onChange(e)}
        >
          <option value="" disabled selected hidden>Token</option>
          <option value="ETH">ETH</option>
          <option value="SOL">SOL</option>
          <option value="BTC">BTC</option>
          <option value="USDT">USDT</option>
        </Select>

        <br />

        <Input
          placeholder='Amount'
          name='gigamount'
          value={gigamount}
          onChange={e => onChange(e)}
          type='number'
        />

        <br />
        <br />

        <Heading
          mb='5px'
          color="black"
          fontSize="md"
          textAlign="left">Have a timeframe? (optional)</Heading>

        <Select
          onChange={e => onChange(e)}
          value={gigtimeframe}
          name='gigtimeframe'
        >
          <option value="" disabled selected hidden>Timeframe</option>
          <option value="0-30 Days">0-30 Days</option>
          <option value="1-3 Months">1-3 Months</option>
          <option value="3-6 Months">3-6 Months</option>
          <option value="6-12 Months">6-12 Months</option>
          <option value="+12 Months">+12 Months</option>
        </Select>

        <br />

      </Container>

      <ButtonGroup
        display="flex"
        flexDirection="column"
        m="5px"
        padding="1px"
      >
        <ButtonGreen
          onClick={nextPage}
        >Continue</ButtonGreen>
        <ButtonOrange
          onClick={goToBasics}
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
