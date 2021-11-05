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
  createGig,
  goToBasics}) {

const {
    gigname,
    gigdescription,
    gigcategory,
    gigwebsite,
    gigrepo,
    gigreward,
    gigamount,
    gigtimeframe
  } = formData;

  return (
    <>
    <BoxTop>
      <h1>Job Summary</h1>
      <h2><em>Check that everything is correct {'(click edit if not)'}</em></h2>
    </BoxTop>

      <div>
        <h2>Gig Basics</h2>
        <Button
          onClick={goToBasics}
          styling='normal'
        >Edit</Button>
        </div>
        <Break/>
          <div className='cp-summary-sections'>
          <h4>Gig Name:</h4>{' '}<p>{gigname}</p>
        </div>

        <Break/>
        <div className='cp-summary-sections'>
          <h4>Gig Description:</h4>{' '}{gigdescription}
        </div>
        <Break/>
          <div className='cp-summary-sections'>
            <h4>Gig Website:</h4>{' '}{gigwebsite}
          </div>
        <Break/>

      <div className='cp-summary-sections'>
        <h2>Gig Details</h2>
        <Button
          onClick={goToDetails}
          styling='normal'
        >Edit</Button>
      </div>

        <h4>Skills:</h4>
        <SkillList>

        </SkillList>
      <Break/>
      {formData && gigreward && gigamount ? (
      <div>
        <h4>Gig Reward:</h4>{' '} <p>{gigamount}{' '}{gigreward}</p>
      </div>) : null}
      <Break/>
      {formData && gigtimeframe ? (
        <div>
      <h4>gigtimeframe:</h4>{' '}<p>{projectduration}</p>
      </div>) : null}


      <ButtonSection>
        <Button
          styling='positive'
          onClick={createProject}
        >Create Project</Button>

        <Button
          onClick={goToDetails}
          styling='negative'
        >Back</Button>
      </ButtonSection>
    </>
  )
}

const InputSection = styled(ItemBox)`
  box-shadow: 0 0 0 0;
`;

const ButtonSection = styled(ItemBox)`
  box-shadow: 0 0 0 0;
`;

const SkillList = styled(GridList)`
`;
