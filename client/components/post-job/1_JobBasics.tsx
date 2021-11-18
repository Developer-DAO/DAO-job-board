import { useState } from 'react';
import { GetStaticProps } from 'next';

// UI & CSS
import {
  ButtonGreen,
  ButtonOrange,
} from '../../styles/ui-components/Chakra-Button';

import {
  Heading,
  Input,
  Textarea,
  Select,
  Container,
  Text,
  ButtonGroup,
} from '@chakra-ui/react';

type JobBasicProps = {
  goToDetails: () => void;
  goBack: () => void;
  onChange: (e: React.FormEvent) => void;
  formData: any;
};

export default function JobBasics({
  goToDetails,
  goBack,
  formData,
  onChange,
}: JobBasicProps) {
  //Active state makes inputs red if data is not correct
  const [wrongTitle, setWrongTitle] = useState(false);
  const [wrongDescription, setWrongDescription] = useState(false);

  const { jobtitle, jobdescription, jobposition, jobtype } = formData;

  const nextPage = () => {
    if (jobtitle.length >= 10 && jobdescription.length >= 100) {
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
        <Heading color="black">Job Basics</Heading>
        <Text color="black" as="i">
          Let us know what type of professional you are looking for
        </Text>
      </Container>

      <Container maxW="100%">
        <Heading mb="5px" color="black" fontSize="md" textAlign="left">
          Write a clear title for your job post
        </Heading>
        <Input
          borderColor={`${!wrongTitle ? '#e2e8f0' : 'red'}`}
          bgColor="white"
          bg="white"
          color="black"
          _hover={{ borderColor: '#97c0e6' }}
          minLength={10}
          placeholder="e.g. Full-Stack Blockchain Engineer"
          name="jobtitle"
          value={jobtitle}
          onChange={(e) => onChange(e)}
        />

        {!wrongTitle ? (
          <Text fontSize="xs">At least 10 characters</Text>
        ) : (
          <Text fontSize="xs" color="red" fontWeight="bold" textAlign="left">
            Make sure title is at least 10 characters long
          </Text>
        )}

        <br />

        <Heading mb="5px" fontSize="md" textAlign="left">
          Pick a job position
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
            Select Job Positions
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
          What type of job is it?
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
            Select Type of Job
          </option>
          <option value="Full-Time">Full-Time</option>
          <option value="Part-Time">Part-Time</option>
          <option value="Contract">Contract</option>
          <option value="Paid Internship">Paid Internship</option>
        </Select>

        <br />

        <Heading mb="5px" fontSize="md" textAlign="left">
          Describe the job
        </Heading>
        <Textarea
          borderColor={`${!wrongDescription ? '#e2e8f0' : 'red'}`}
          bgColor="white"
          _hover={{ borderColor: '#97c0e6' }}
          minLength={100}
          placeholder="e.g. We are looking for an experienced full-stack blockhain engineer with at least 3 years..."
          name="jobdescription"
          value={jobdescription}
          onChange={(e) => onChange(e)}
        />

        {!wrongDescription ? (
          <Text fontSize="xs">At least 100 characters</Text>
        ) : (
          <Text fontSize="xs" color="red" fontWeight="bold" textAlign="left">
            Make sure description is at least 100 characters long{' '}
          </Text>
        )}

      </Box>

      <ButtonGroup display="flex" flexDirection="column" m="5px" padding="1px">
        <ButtonGreen onClick={nextPage}>Continue</ButtonGreen>
        <ButtonOrange onClick={goBack}>Cancel</ButtonOrange>
      </ButtonGroup>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { FormData },
  };
};
