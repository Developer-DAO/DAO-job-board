import { useState } from 'react';
import { GetStaticProps } from 'next';

//Keywords Components
import KeywordSelect from '../../modals/SelectKeywords.tsx';
import KeywordsSection from '../KeywordsSection.tsx';

import {
  ButtonGreen,
  ButtonOrange,
  ButtonBlack,
} from '../../../styles/ui-components/Chakra-Button';

import {
  Heading,
  Stack,
  Container,
  Input,
  Textarea,
  Select,
  Text,
  ButtonGroup,
} from '@chakra-ui/react';

type JobDetailProps = {
  goToBasics: () => void;
  goToSummary: () => void;
  onChange: (e: React.FormEvent) => void;
  jobKeywords: Array<string>;
  setJobKeywords: any;
  formData: any;
  setFormData: any;
};

export default function GigDetails({
  goToBasics,
  goToSummary,
  formData,
  onChange,
  jobKeywords,
  setJobKeywords,
  setFormData,
}: JobDetailProps) {
  //Active state makes inputs red if data is not correct
  const [wrongData, setWrongData] = useState(false);

  //Breaks down the formData state
  const { jobcompensation, jobmin, jobmax, jobequity, joblocation } = formData;

  //Check if user has chosen keywords, otherwise send errors
  const nextPage = () => {
    if (jobKeywords.length > 0) {
      goToSummary();
    } else {
      setWrongData(true);
    }
  };

  //To Open and Close Keywords Modal
  const [changeJobKeywords, setChangeJobKeywords] = useState(false);

  const openKeywordModal = () => {
    setChangeJobKeywords(true);
  };

  const closeKeywordModal = () => {
    setChangeJobKeywords(false);
  };

  //Handles the job keywords sent from modal
  const keywordsDataHandler = async (keywordData) => {
    await setJobKeywords(keywordData);
    console.log(jobKeywords);
  };

  return (
    <>
      {changeJobKeywords && (
        <KeywordSelect
          keywordsDataHandler={keywordsDataHandler}
          closeKeywordModal={closeKeywordModal}
          keywordsData={jobKeywords}
        />
      )}

      <Container textAlign="center" mt="2.5%" mb="2.5%">
        {' '}
        <Heading color="black">Job Details</Heading>
        <Text color="black" as="i">
          Define the job category, compensation, and location
        </Text>
      </Container>

      <Stack p={2} spacing={2} maxW="100%">
        <Heading mb="5px" color="black" fontSize="md" textAlign="left">
          Pick a job keyword category
        </Heading>

        {!wrongData ? (
          <Text fontSize="xs" textAlign="left">
            Keywords help categorize your job post (pick at least 3)
          </Text>
        ) : (
          <Text fontSize="xs" textAlign="left" color="red" fontWeight="bold">
            Make sure to pick at least 3 keywords
          </Text>
        )}

        <Container>
          <ButtonBlack onClick={openKeywordModal}>Select Keywords</ButtonBlack>
        </Container>

        <KeywordsSection
          keywordsData={jobKeywords}
          templateColumns={{ '2xl': 'repeat(5, 3fr)', sm: 'repeat(2, 3fr)' }}
        />

        <Heading mb="5px" color="black" fontSize="md" textAlign="left">
          Explain compensation (optional)
        </Heading>
        <Text fontSize="xs" textAlign="left" mb="2.5%">
          Jobs with compensation info get more applications
        </Text>
        <Select
          position="static"
          bg="white"
          bgColor="white"
          borderColor="#e2e8f0"
          _hover={{ borderColor: '#97c0e6' }}
          name="jobcompensation"
          value={jobcompensation}
          onChange={(e) => onChange(e)}
        >
          <option value="" disabled hidden>
            Token / Currency
          </option>
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

        <Input
          position="static"
          borderColor="#e2e8f0"
          bgColor="white"
          _hover={{ borderColor: '#97c0e6' }}
          _placeholder={{ color: 'black' }}
          w="50%"
          placeholder="Min"
          name="jobmin"
          value={jobmin}
          onChange={(e) => onChange(e)}
          type="number"
        />

        <Input
          position="static"
          borderColor="#e2e8f0"
          bgColor="white"
          _hover={{ borderColor: '#97c0e6' }}
          _placeholder={{ color: 'black' }}
          w="50%"
          placeholder="Max"
          name="jobmax"
          value={jobmax}
          onChange={(e) => onChange(e)}
          type="number"
        />

        <Heading mb="1%" mt="1%" color="black" fontSize="md" textAlign="left">
          Do you offer equity? (optional)
        </Heading>

        <Select
          position="static"
          bg="white"
          bgColor="white"
          borderColor="#e2e8f0"
          _hover={{ borderColor: '#97c0e6' }}
          onChange={(e) => onChange(e)}
          value={jobequity}
          name="jobequity"
        >
          <option value="" disabled selected hidden>
            Equity Range
          </option>
          <option value="0.01-1%">0.01-1%</option>
          <option value="1%-2%">1%-2%</option>
          <option value="2%-5%">2%-5%</option>
          <option value="+5%">+5%</option>
        </Select>

        <Heading mb="5px" color="black" fontSize="md" textAlign="left">
          Location (optional)
        </Heading>
        <Text fontSize="xs" textAlign="left" mb="1%">
          Defaults to remote if empty
        </Text>
        <Input
          position="static"
          borderColor="#e2e8f0"
          bgColor="white"
          _hover={{ borderColor: '#97c0e6' }}
          _placeholder={{ color: 'black' }}
          type="string"
          onChange={(e) => onChange(e)}
          value={joblocation}
          name="joblocation"
          placeholder="e.g California, US"
        />
      </Stack>

      <ButtonGroup display="flex" flexDirection="column" m="5px" padding="1px">
        <ButtonGreen onClick={nextPage}>Continue</ButtonGreen>
        <ButtonOrange onClick={goToBasics}>Back</ButtonOrange>
      </ButtonGroup>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { FormData },
  };
};
