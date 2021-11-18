import { useState } from 'react';
import { GetStaticProps } from 'next';

import { ButtonGreen, ButtonOrange, ButtonBlack } from "../../styles/ui-components/Chakra-Button"

import {
  Heading, Box, Container, Tag, Input, Textarea, Select, Text, ButtonGroup, TagLabel,
  TagCloseButton,
  HStack
} from "@chakra-ui/react";

type JobDetailProps = {
  goToBasics: () => void;
  goToSummary: () => void;
  onChange: (e: React.FormEvent) => void;
  formData: any;
  setFormData: any;
  addLocation: () => void;
  locationActive: boolean;
};

export default function GigDetails({
  goToBasics,
  goToSummary,
  formData,
  onChange,
  setFormData,
  addLocation,
  locationActive
}: JobDetailProps) {

  //Active state makes inputs red if data is not correct
  const [wrongData, setWrongData] = useState(false);

  const {
    jobcategory,
    jobcompensation,
    jobmin,
    jobmax,
    jobequity,
    joblocation
  } = formData;

  const nextPage = () => {

    if (jobcategory) {
      goToSummary();
    } else {
      setWrongData(true);
    }
  };

  const selectCategory = () => {
    setFormData({ ...formData, jobcategory: 'category' })
  }

  return (
    <>
      <Container
        textAlign="center"
        mt="2.5%"
        mb="2.5%"
      >   <Heading
        color="black">Job Details</Heading>

        <Text
          color="black"
          as="i">Define the job category, compensation, and location</Text>
      </Container>

      <Box
        maxW="100%"
      >
        <Heading
          mb='5px'
          color="black"
          fontSize="md"
          textAlign="left"
        >Pick a job keyword category</Heading>

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
          <ButtonBlack
          >
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
          textAlign="left"
        >Explain compensation (optional)</Heading>
        <Text
          fontSize="xs"
          textAlign="left"
          mb="2.5%"
        >Jobs with compensation info get more applications</Text>
        <Select
          bg="white"
          bgColor="white"
          borderColor="#e2e8f0"
          _hover={{ borderColor: '#97c0e6' }}
          name='jobcompensation'
          value={jobcompensation}
          onChange={e => onChange(e)}
        >
          <option value="" disabled hidden>Token / Currency</option>
          <optgroup label="Crypto">
            <option value="ETH">ETH</option>
            <option value="SOL">SOL</option>
            <option value="BTC">BTC</option>
            <option value="USDT">USDT</option>
          </optgroup>
          <optgroup label="Fiat">
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="CAD">CAD</option>
            <option value="AUD">AUD</option>
          </optgroup>
        </Select>
        <br />
        <Input
          borderColor="#e2e8f0"
          bgColor="white"
          _hover={{ borderColor: '#97c0e6' }}
          _placeholder={{ color: "black" }}
          w="50%"
          placeholder='Min'
          name='jobmin'
          value={jobmin}
          onChange={e => onChange(e)}
          type='number'
        />

        <Input
          borderColor="#e2e8f0"
          bgColor="white"
          _hover={{ borderColor: '#97c0e6' }}
          _placeholder={{ color: "black" }}
          w="50%"
          placeholder='Max'
          name='jobmax'
          value={jobmax}
          onChange={e => onChange(e)}
          type='number'
        />

        <br />

        <Heading
          mb='1%'
          mt='1%'
          color="black"
          fontSize="md"
          textAlign="left"
        >Do you offer equity? (optional)</Heading>

        <Select
          bg="white"
          bgColor="white"
          borderColor="#e2e8f0"
          _hover={{ borderColor: '#97c0e6' }}
          onChange={e => onChange(e)}
          value={jobequity}
          name='jobequity'
        >
          <option value="" disabled selected hidden>Equity Range</option>
          <option value="0.01-1%">0.01-1%</option>
          <option value="1%-2%">1%-2%</option>
          <option value="2%-5%">2%-5%</option>
          <option value="+5%">+5%</option>
        </Select>

        <br />

        <Heading
          mb='5px'
          color="black"
          fontSize="md"
          textAlign="left"
        >Location (optional)</Heading>
        <Text
          fontSize="xs"
          textAlign="left"
          mb="1%"
        >Defaults to remote if empty</Text>
        <Input
          borderColor="#e2e8f0"
          bgColor="white"
          _hover={{ borderColor: '#97c0e6' }}
          _placeholder={{ color: "black" }}
          type='string'
          onChange={e => onChange(e)}
          value={joblocation}
          name='joblocation'
          placeholder='e.g California, US'
        />

      </Box>
      <br />
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
