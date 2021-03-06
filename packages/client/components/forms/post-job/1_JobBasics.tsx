import React, { useState } from 'react';
import { GetStaticProps } from 'next';

import {
  Heading,
  Button,
  Input,
  Textarea,
  Select,
  Container,
  Text,
  Stack,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';

type JobBasicProps = {
  goToDetails: () => void;
  goBack: () => void;
  onChange: (e: React.FormEvent) => void;
  formData: {
    title: string;
    description: string;
    position: string;
    type: string;
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

  const { title, description, position, type } = formData;

  const nextPage = () => {
    if (title.length >= 7 && description.length >= 100) {
      goToDetails();
    } else if (!title && !description) {
      setWrongDescription(true);
      setWrongTitle(true);
    } else if (
      (title.length >= 10 && description.length < 100) ||
      !description
    ) {
      setWrongTitle(false);
      setWrongDescription(true);
    } else if ((description.length >= 100 && title.length < 10) || !title) {
      setWrongDescription(false);
      setWrongTitle(true);
    }
  };

  return (
    <>
      <Stack textAlign="center" mb="2.5%" spacing="xs">
        <Heading variant="header1">
          {t('components.forms.post_job.job_basics.header')}
        </Heading>
        <Text variant="body4" fontWeight="light" as="i">
          {t('components.forms.post_job.job_basics.sub_header')}
        </Text>
      </Stack>

      <Stack p={2} spacing="xs" maxW="100%">
        <Heading mb="5px" variant="header6" textAlign="left">
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
          name="title"
          value={title}
          onChange={(e) => onChange(e)}
        />

        {!wrongTitle ? (
          <Text variant="caption">
            {t('components.forms.post_job.job_basics.char_min_title', {
              count: 10,
            })}
          </Text>
        ) : (
          <Text
            variant="caption"
            color="red"
            fontWeight="bold"
            textAlign="left"
          >
            {t('components.forms.post_job.job_basics.char_min_title_error', {
              count: 10,
            })}
          </Text>
        )}

        <br />

        <Heading mb="5px" variant="header6" textAlign="left">
          {t('components.forms.post_job.job_basics.position_header')}
        </Heading>
        <Select
          bgColor="white"
          bg="white"
          borderColor="#e2e8f0"
          _hover={{ borderColor: '#97c0e6' }}
          name="position"
          value={position}
          onChange={(e) => onChange(e)}
        >
          <option value="" disabled hidden>
            {t('components.forms.post_job.job_basics.position_default')}
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

        <Heading mb="5px" variant="header6" textAlign="left">
          {t('components.forms.post_job.job_basics.type_header')}
        </Heading>
        <Select
          borderColor="#e2e8f0"
          _hover={{ borderColor: '#97c0e6' }}
          name="type"
          value={type}
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

        <Heading mb="5px" variant="header6" textAlign="left">
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
          name="description"
          value={description}
          onChange={(e) => onChange(e)}
        />

        {!wrongDescription ? (
          <Text variant="caption">
            {t('components.forms.post_job.job_basics.char_min_description', {
              count: 100,
            })}
          </Text>
        ) : (
          <Text
            variant="caption"
            color="red"
            fontWeight="bold"
            textAlign="left"
          >
            {t(
              'components.forms.post_job.job_basics.char_min_description_error',
              { count: 100 }
            )}
          </Text>
        )}
      </Stack>

      <Stack>
        <Button variant="neutral" onClick={nextPage}>
          {t('components.forms.post_job.continue_button_text')}
        </Button>
        <Button variant="danger" onClick={goBack}>
          {t('components.forms.post_job.cancel_button_text')}
        </Button>
      </Stack>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { FormData },
  };
};
