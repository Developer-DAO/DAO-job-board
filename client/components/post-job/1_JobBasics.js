import styled from 'styled-components'

// UI & CSS
import Button from '../../styles/UI-Components/Button';

import {BoxTop,
  Title,
  Title2,
  ItemBox,
  Input,
  Textarea,
  Selector
} from '../../styles/styles';

export default function JobBasics ({
goToDetails,
goBack,
formData,
onChange,
history}) {

  const {
    jobtitle,
    jobdescription,
    jobposition,
    jobtype
  } = formData;

  const nextPage = () => {
    if (jobtitle && jobdescription) {
      goToDetails();
    } else {
      console.log('You need a name and description for the job')
    }
  };

  return (
    <>
      <BoxTop>
        <Title>Job Basics</Title>
        <p><em>Let us know what type of professional you are looking for</em></p>
      </BoxTop>

        <InputSection>
          <InputTitle>Write a clear title for your job post</InputTitle>
          <Input
            placeholder='e.g. Full-Stack Blockchain Engineer'
            name='jobtitle'
            value={jobtitle}
            onChange={e => onChange(e)}
          />
          <Small>At least 10 characters</Small>
        <br/>
        <InputTitle>Pick a job position</InputTitle>
        <Selector
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
        </Selector>

        <InputTitle>What type of job is it?</InputTitle>
        <Selector
          name='jobtype'
          value={jobtype}
          onChange={e => onChange(e)}
          >
          <option value="" disabled selected hidden>Select Type of Job</option>
          <option value="Full-Time">Full-Time</option>
          <option value="Part-Time">Part-Time</option>
          <option value="Contract">Contract</option>
          <option value="Paid Internship">Paid Internship</option>
        </Selector>

        <InputTitle>Describe the job</InputTitle>
        <Textarea
          minlength='30'
          placeholder='e.g. We are looking for an experienced full-stack blockhain engineer with at least 3 years...'
          name='jobdescription'
          value={jobdescription}
          onChange={e => onChange(e)}
        />
        <Small>At least 100 characters</Small>
      </InputSection>

      <ButtonSection>
        <Button
          type='button'
          onClick={nextPage}
          styling='positive'
        >Continue</Button>
        <Button
          onClick={goBack}
          styling='negative'
        >Cancel</Button>
    </ButtonSection>
  </>
  )
}

export async function getStaticProps() {
   return {
      props: { formData }
   }
}

const Small = styled.small`
  text-align: left;
  font-size: 0.785rem;
`;

const InputTitle = styled(Title2)`
  font-size: 1rem;
  text-align: left;
`;

const InputSection = styled(ItemBox)`
  box-shadow: 0 0 0 0;
  background: none;
`;

const ButtonSection = styled(ItemBox)`
box-shadow: 0 0 0 0;
background: none;
`;
