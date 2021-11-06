// UI & CSS
import styled from 'styled-components'
import Button from '../../styles/ui-components/Button'
import {BoxTop,
  GridList,
  Title,
  Title2,
  ItemBox,
  Input,
  Selector
} from '../../styles';

type GigSummaryProps = {
  goToDetails: () => void;
  goToBasics: () => void;
  formData: {
    gigname: string;
    gigdescription: string;
    gigcategory: string;
    gigwebsite: string;
    gigrepo: string;
    gigreward: string;
    gigamount: string;
    gigtimeframe: string;
  }[];
};

export default function GigSummary ({
  formData,
  goToDetails,
  createGig,
  goToBasics}:GigSummaryProps) {

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
      <h1>Gig Summary</h1>
      <p><em>Check that everything is correct (click edit if not)</em></p>
    </BoxTop>

      <FlexSection>
        <InputTitle>Gig Basics</InputTitle>
        <Button
          onClick={goToBasics}
          styling='normal'
        >Edit</Button>
      </FlexSection>

        <InputSection>
          <h4>Gig Name:</h4>{' '}{gigname}
          <h4>Gig Description:</h4>{' '}{gigdescription}

          {gigwebsite ? (<><h4>Gig Website:</h4>{' '}{gigwebsite}</>) : null}

          {gigrepo ? (<><h4>Gig Repo:</h4>{' '}{gigrepo}</>) : null}

      </InputSection>
      <br/>


      <FlexSection>
        <InputTitle>Gig Details</InputTitle>
        <Button
          onClick={goToDetails}
          styling='normal'
        >Edit</Button>
      </FlexSection>

      <InputSection>
        <h4>Category:</h4>
          <CategoryList>
            <Button styling='category'>
              {gigcategory}
            </Button>
          </CategoryList>


        {gigreward && gigamount ? (
        <>
          <h4>Gig Reward:</h4>{' '} {gigamount}{' '}{gigreward}
        </>) : null}

        <br/>

        {gigtimeframe ? (
          <>
        <h4>Gig Timeframe:</h4>{' '}{gigtimeframe}
        </>) : null}

      </InputSection>


      <ButtonSection>
        <Button
          styling='positive'
          onClick={createGig}
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

export async function getStaticProps():GetStaticProps {
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
`;

const CategoryList = styled(GridList)`
`;
