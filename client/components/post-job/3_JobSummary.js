// UI & CSS
import styled from 'styled-components'
import Button from '../../styles/UI-Components/Button'
import {BoxTop,
  GridList,
  Title,
  Title2,
  ItemBox,
  Input,
  Selector
} from '../../styles/styles';

export default function GigSummary ({
  formData,
  goToDetails,
  createJob,
  goToBasics}) {

const {
  jobtitle,
  jobdescription,
  jobtype,
  jobcategory,
  jobposition,
  jobcompensation,
  jobamount,
  jobequity,
  joblocation,
  } = formData;

  return (
    <>
    <BoxTop>
      <h1>Job Summary</h1>
      <p><em>Check that everything is correct (click edit if not)</em></p>
    </BoxTop>

      <FlexSection>
        <InputTitle>Job Basics</InputTitle>
        <Button
          onClick={goToBasics}
          styling='normal'
        >Edit</Button>
      </FlexSection>

        <InputSection>
          <h4>Job Name:</h4>{' '}{jobtitle}
          <h4>Job Description:</h4>{' '}{jobdescription}
          <h4>Job Position:</h4>{' '}{jobposition}
          <h4>Job Type:</h4>{' '}{jobtype}
      </InputSection>
      <br/>


      <FlexSection>
        <InputTitle>Job Details</InputTitle>
        <Button
          onClick={goToDetails}
          styling='normal'
        >Edit</Button>
      </FlexSection>

      <InputSection>
        <h4>Category:</h4>
          <CategoryList>
            <Button styling='category'>
              {jobcategory}
            </Button>
          </CategoryList>


        {jobcompensation && jobamount ? (
        <>
          <h4>Job Compensation:</h4>{' '} {jobamount}{' '}{jobcompensation}
        </>) : null}

        <br/>

        {joblocation ? (
          <>
        <h4>Job Location:</h4>{' '}{joblocation}
        </>) : null}

      </InputSection>


      <ButtonSection>
        <Button
          styling='positive'
          onClick={createJob}
        >Create Gig</Button>

        <Button
          type='button'
          onClick={goToDetails}
          styling='negative'
        >Back</Button>
      </ButtonSection>
    </>
  )
}

export async function getStaticProps() {
   return {
      props: { formData }
   }
}

const InputSection = styled(ItemBox)`
  box-shadow: 0 0 0 0;
  text-align: left;
  background: none;
`;

const InputTitle = styled(Title2)`
  margin: 0;
`;

const FlexSection = styled(ItemBox)`
  display: flex;
  box-shadow: 0 0 0 0;
  text-align: left;
  background: none;
`;

const ButtonSection = styled(ItemBox)`
  box-shadow: 0 0 0 0;
  background: none;
`;

const CategoryList = styled(GridList)`
`;
