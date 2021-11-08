import {useState} from 'react';
import styled from 'styled-components'
import { GetStaticProps } from 'next'

// UI & CSS
import { ButtonGreen, ButtonOrange } from "../../styles/ui-components/Chakra-Button.tsx"

import { Heading, Input, Textarea, Select, Container, Text } from "@chakra-ui/react";

type JobBasicProps = {
  goToDetails: () => void;
  goBack: () => void;
  onChange: (e: React.FormEvent) => void;
  formData: any;
};

export default function JobBasics ({
goToDetails,
goBack,
formData,
onChange}: JobBasicProps ){

  //Active state makes inputs red if data is not correct
  const [wrongTitle, setWrongTitle] = useState(false);
  const [wrongDescription, setWrongDescription] = useState(false);

  const {
    jobtitle,
    jobdescription,
    jobposition,
    jobtype
  } = formData;

  const nextPage = () => {
    if (jobtitle.trim().length >= 10 && jobdescription.trim().length >= 100) {
      goToDetails();
    } else if (!jobtitle && !jobdescription) {

      setWrongDescription(true);
      setWrongTitle(true)

    } else if (jobtitle.trim().length >= 10 &&  jobdescription.trim().length < 100 || !jobdescription) {
      setWrongTitle(false);
      setWrongDescription(true);

    } else if (jobdescription.trim().length >= 100 && jobtitle.trim().length < 10 || !jobtitle) {
      setWrongDescription(false);
      setWrongTitle(true)
    }
  }

  return (
    <>
      <Container textAlign="center">
        <Heading
          color="black"
        >Job Basics</Heading>
          <Text
          color="black"
          as="i">Let us know what type of professional you are looking for</Text>
      </Container>

        <Container>
        <Heading
        color="black"
        fontSize="md"
        textAlign="left">Write a clear title for your job post</Heading>
          <Input
            borderColor="black"
            textColor="black"
            minLength={10}
            placeholder='e.g. Full-Stack Blockchain Engineer'
            name='jobtitle'
            value={jobtitle}
            onChange={e => onChange(e)}
          />

          {!wrongTitle ?
             <Text
              fontSize="xs">At least 10 characters</Text> :

            <Text
             fontSize="xs"
             color="red"
             fontWeight="bold"
             textAlign="left">Make sure title is at least 10 characters long</Text>}

        <br/>
        <Heading
        fontSize="md"
        textAlign="left">Pick a job position</Heading>
        <Select
          name='jobposition'
          value={jobposition}
          onChange={e => onChange(e)}
          >
          <option value="" disabled selected hidden>Select Job Positions</option>
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

        <Heading
        fontSize="md"
        textAlign="left">What type of job is it?</Heading>
        <Select
          name='jobtype'
          value={jobtype}
          onChange={e => onChange(e)}
          >
          <option value="" disabled selected hidden>Select Type of Job</option>
          <option value="Full-Time">Full-Time</option>
          <option value="Part-Time">Part-Time</option>
          <option value="Contract">Contract</option>
          <option value="Paid Internship">Paid Internship</option>
        </Select>

        <Heading
        fontSize="md"
        textAlign="left">Describe the job</Heading>
        <Textarea
          minLength={100}
          placeholder='e.g. We are looking for an experienced full-stack blockhain engineer with at least 3 years...'
          name='jobdescription'
          value={jobdescription}
          onChange={e => onChange(e)}
        />

        {!wrongDescription ?
          <Text
          fontSize="xs"
          >At least 100 characters</Text>
         :
         <Text
          fontSize="xs"
          color="red"
          fontWeight="bold"
          textAlign="left"
         >Make sure description is at least 100 characters long </Text>}

      </Container>

      <Container>
        <ButtonGreen
          onClick={nextPage}
        >Continue</ButtonGreen>
        <ButtonOrange
          onClick={goBack}
        >Cancel</ButtonOrange>
    </Container>
  </>
  )
}

export const getStaticProps:GetStaticProps = async () => {
   return {
      props: { FormData }
   }
}

// const Small = styled.small`
//   text-align: left;
//   font-size: 0.785rem;
// `;
//
// const RedSmall = styled.small`
//   text-align: left;
//   font-size: 1rem;
//   color: red;
//   font-weight: bold;
// `;
//
//
// const InputTitle = styled(Title2)`
//   font-size: 1rem;
//   text-align: left;
// `;
//
// const InputSection = styled(ItemBox)`
//   box-shadow: 0 0 0 0;
//   background: none;
// `;
//
// const ButtonSection = styled(ItemBox)`
// box-shadow: 0 0 0 0;
// background: none;
// `;
