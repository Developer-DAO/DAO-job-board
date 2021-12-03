import React, { useState } from 'react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';

import { Keyword } from '@/types';

//Keywords Components
import KeywordSelect from '@/components/modals/SelectKeywords';
import KeywordsSection from '../KeywordsSection';

import {
  ButtonGreen,
  ButtonOrange,
  ButtonBlack,
} from '@/styles/ui-components/Chakra-Button';

import {
  Heading,
  Container,
  Input,
  Select,
  Text,
  ButtonGroup,
  Modal,
  ModalOverlay,
  ModalContent,
  Stack,
} from '@chakra-ui/react';

type JobDetailProps = {
  goToBasics: () => void;
  goToSummary: () => void;
  onChange: (e: React.FormEvent) => void;
  jobKeywords: Keyword[];
  setJobKeywords: (jobKeywords: Keyword[]) => void;
  formData: {
    jobcompensation: string;
    jobmin: string;
    jobmax: string;
    jobequity: string;
    joblocation: string;
  };
};

export default function GigDetails({
  goToBasics,
  goToSummary,
  formData,
  onChange,
  jobKeywords,
  setJobKeywords,
}: JobDetailProps) {
  const { t } = useTranslation('common');

  //Active state makes inputs red if data is not correct
  const [wrongData, setWrongData] = useState(false);

  //Breaks down the formData state
  const { jobcompensation, jobmin, jobmax, jobequity, joblocation } = formData;

  //Check if user has chosen keywords, otherwise send errors
  const nextPage = () => {
    if (jobKeywords != null && jobKeywords.length > 0) {
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
  const keywordsDataHandler = (keywordData: any) => {
    setJobKeywords(keywordData);
  };

  return (
    <>
      {changeJobKeywords && (
        <Modal
          isOpen={changeJobKeywords}
          onClose={closeKeywordModal}
          motionPreset="none"
        >
          <ModalOverlay onClick={closeKeywordModal} />
          <ModalContent>
            <KeywordSelect
              keywordsDataHandler={keywordsDataHandler}
              closeKeywordModal={closeKeywordModal}
              keywordsData={jobKeywords}
            />
          </ModalContent>
        </Modal>
      )}

      <Container textAlign="center" mt="2.5%" mb="2.5%">
        {' '}
        <Heading color="black">
          {t('components.forms.post_job.job_details.header')}
        </Heading>
        <Text color="black" as="i">
          {t('components.forms.post_job.job_details.sub_header')}
        </Text>
      </Container>

      <Stack p={2} spacing={2} maxW="100%">
        <Heading mb="5px" color="black" fontSize="md" textAlign="left">
          {t('components.forms.post_job.job_details.category_header')}
        </Heading>

        {!wrongData ? (
          <Text fontSize="xs" textAlign="left">
            {t('components.forms.post_job.job_details.category_sub_header')}
          </Text>
        ) : (
          <Text fontSize="xs" textAlign="left" color="red" fontWeight="bold">
            {t('components.forms.post_job.job_details.category_error')}
          </Text>
        )}

        <Container>
          <ButtonBlack onClick={openKeywordModal}>
            {t('components.forms.post_job.job_details.keyword_button_text')}
          </ButtonBlack>
        </Container>

        <KeywordsSection
          keywordsData={jobKeywords}
          templateColumns={{ '2xl': 'repeat(5, 3fr)', sm: 'repeat(2, 3fr)' }}
        />

        <Heading mb="5px" color="black" fontSize="md" textAlign="left">
          {t('components.forms.post_job.job_details.compensation_header')}
        </Heading>
        <Text fontSize="xs" textAlign="left" mb="2.5%">
          {t('components.forms.post_job.job_details.compensation_sub_header')}
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
            {t('components.forms.post_job.job_details.token_default')}
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
          placeholder={t('components.forms.post_job.job_details.min')}
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
          placeholder={t('components.forms.post_job.job_details.max')}
          name="jobmax"
          value={jobmax}
          onChange={(e) => onChange(e)}
          type="number"
        />

        <Heading mb="1%" mt="1%" color="black" fontSize="md" textAlign="left">
          {t('components.forms.post_job.job_details.equity_header')}
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
            {t('components.forms.post_job.job_details.equity_default')}
          </option>
          <option value="0.01-1%">0.01-1%</option>
          <option value="1%-2%">1%-2%</option>
          <option value="2%-5%">2%-5%</option>
          <option value="+5%">+5%</option>
        </Select>

        <Heading mb="5px" color="black" fontSize="md" textAlign="left">
          {t('components.forms.post_job.job_details.location_header')}
        </Heading>
        <Text fontSize="xs" textAlign="left" mb="1%">
          {t('components.forms.post_job.job_details.location_sub_header')}
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
          placeholder={t(
            'components.forms.post_job.job_details.location_placeholder'
          )}
        />
      </Stack>

      <ButtonGroup display="flex" flexDirection="column" m="5px" padding="1px">
        <ButtonGreen onClick={nextPage}>
          {t('components.forms.post_job.continue_button_text')}
        </ButtonGreen>
        <ButtonOrange onClick={goToBasics}>
          {t('components.forms.post_job.back_button_text')}
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
