import React, { useState } from 'react';
import { GetStaticProps } from 'next';

// UI & CSS
import {
  ButtonGreen,
  ButtonOrange,
} from '@/styles/ui-components/Chakra-Button';

import {
  Heading,
  Input,
  Textarea,
  Select,
  Container,
  Text,
  ButtonGroup,
  Stack,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';

type JobBasicProps = {
  goToDetails: () => void;
  goBack: () => void;
  onChange: (e: React.FormEvent) => void;
  formData: {
    jobtitle: string;
    jobdescription: string;
    jobposition: string;
    jobtype: string;
  };
};

export default function JobBasics({
  goToDetails,
  goBack,
  formData,
  onChange,
}: JobBasicProps) {
  const { t } = useTranslation('common');

  //Active state makes inputs red if data is not correct
  const [wrongTitle, setWrongTitle] = useState(false);
  const [wrongDescription, setWrongDescription] = useState(false);

  const { jobtitle, jobdescription, jobposition, jobtype } = formData;

  const nextPage = () => {
    if (jobtitle.length >= 7 && jobdescription.length >= 100) {
      goToDetails();
    } else if (!jobtitle && !jobdescription) {
      setWrongDescription(true);
      setWrongTitle(true);
    } else if (
      (jobtitle.length >= 10 && jobdescription.length < 100) ||
      !jobdescription
    ) {
      setWrongTitle(false);
      setWrongDescription(true);
    } else if (
      (jobdescription.length >= 100 && jobtitle.length < 10) ||
      !jobtitle
    ) {
      setWrongDescription(false);
      setWrongTitle(true);
    }
  };

  return (
    <>
      <Container textAlign="center" mt="2.5%" mb="2.5%">
        <Heading color="black">
          {t('components.forms.post_job.job_basics.header')}
        </Heading>
        <Text color="black" as="i">
          {t('components.forms.post_job.job_basics.sub_header')}
        </Text>
      </Container>

      <Stack p={2} spacing={2} maxW="100%">
        <Heading mb="5px" color="black" fontSize="md" textAlign="left">
          {t('components.forms.post_job.job_basics.title_header')}
        </Heading>
        <Input
          borderColor={`${!wrongTitle ? '#e2e8f0' : 'red'}`}
          bgColor="white"
          bg="white"
          color="black"
          _hover={{ borderColor: '#97c0e6' }}
          minLength={7}
          placeholder={t(
            'components.forms.post_job.job_basics.title_placeholder'
          )}
          name="jobtitle"
          value={jobtitle}
          onChange={(e) => onChange(e)}
        />

        {!wrongTitle ? (
          <Text fontSize="xs">
            {t('components.forms.post_job.job_basics.char_min_title', {
              count: 10,
            })}
          </Text>
        ) : (
          <Text fontSize="xs" color="red" fontWeight="bold" textAlign="left">
            {t('components.forms.post_job.job_basics.char_min_title_error', {
              count: 10,
            })}
          </Text>
        )}

        <br />

        <Heading mb="5px" fontSize="md" textAlign="left">
          {t('components.forms.post_job.job_basics.position_header')}
        </Heading>
        <Select
          bgColor="white"
          bg="white"
          borderColor="#e2e8f0"
          _hover={{ borderColor: '#97c0e6' }}
          name="jobposition"
          value={jobposition}
          onChange={(e) => onChange(e)}
        >
          <option value="" disabled hidden>
            {t('components.forms.post_job.job_basics.title_placeholder')}
          </option>
          <option value="Co-Founder">Co-Founder</option>
          <option value="Engineering">Engineering</option>
          <option value="Marketing">Marketing</option>
          <option value="Sales">Sales</option>
          <option value="Design">Design</option>
          <option value="Community">Community</option>
          <option value="Art">Art</option>
          <option value="Customer Support">Customer Support</option>
          <option value="Writing">Writing</option>
          <option value="Other">Other</option>
        </Select>

        <br />

        <Heading mb="5px" fontSize="md" textAlign="left">
          {t('components.forms.post_job.job_basics.type_header')}
        </Heading>
        <Select
          borderColor="#e2e8f0"
          _hover={{ borderColor: '#97c0e6' }}
          name="jobtype"
          value={jobtype}
          onChange={(e) => onChange(e)}
          bg="white"
        >
          <option value="" disabled hidden>
            {t('components.forms.post_job.job_basics.select_default')}
          </option>
          <option value="Full-Time">Full-Time</option>
          <option value="Part-Time">Part-Time</option>
          <option value="Contract">Contract</option>
          <option value="Paid Internship">Paid Internship</option>
        </Select>

        <br />

        <Heading mb="5px" fontSize="md" textAlign="left">
          {t('components.forms.post_job.job_basics.description_header')}
        </Heading>
        <Textarea
          borderColor={`${!wrongDescription ? '#e2e8f0' : 'red'}`}
          bgColor="white"
          _hover={{ borderColor: '#97c0e6' }}
          minLength={100}
          placeholder={t(
            'components.forms.post_job.job_basics.description_placeholder'
          )}
          name="jobdescription"
          value={jobdescription}
          onChange={(e) => onChange(e)}
        />

        {!wrongDescription ? (
          <Text fontSize="xs">
            {t('components.forms.post_job.job_basics.char_min_description', {
              count: 100,
            })}
          </Text>
        ) : (
          <Text fontSize="xs" color="red" fontWeight="bold" textAlign="left">
            {t(
              'components.forms.post_job.job_basics.char_min_description_error',
              { count: 100 }
            )}
          </Text>
        )}
      </Stack>

      <ButtonGroup display="flex" flexDirection="column" m="5px" padding="1px">
        <ButtonGreen onClick={nextPage}>
          {t('components.forms.post_job.continue_button_text')}
        </ButtonGreen>
        <ButtonOrange onClick={goBack}>
          {t('components.forms.post_job.cancel_button_text')}
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
