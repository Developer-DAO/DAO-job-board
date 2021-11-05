import {useState} from 'react';

import styled from 'styled-components';
import Button from '../../styles/UI-Components/Button';

import {BoxTop,
  GridList,
  Title,
  Title2,
  ItemBox,
  Input,
  Selector
} from '../../styles/styles';

export default function GigDetails({
  goToBasics,
  goToSummary,
  formData,
  onChange,
  updateGigCategory,
  setFormData,
  deleteCategory,
  addTimeframe,
  timeframeActive}) {

  const {
    gigcategory,
    gigreward,
    gigamount,
    gigtimeframe
  } = formData;

  const nextPage = () => {

    if (gigcategory) {
      goToSummary();
    } else {
      console.log('You need to select at least 3 categories')
    }
  };

  const selectCategory = () => {
    setFormData({ ...formData, gigcategory: 'category' })
  }

  return (
    <>
      <BoxTop>
        <h1>Gig Details</h1>
        <em>Define your project timeframe, category, and reward</em>
      </BoxTop>

        <InputSection>
          <InputTitle>Pick category</InputTitle>

          <CategorySection>
            <Button styling='category'
              onClick={selectCategory}
            >
              Category 1
            </Button>

            <Button styling='category'
            >
              Category 2
            </Button>

            <Button styling='category'>
              Category 3
            </Button>
          </CategorySection>

          <InputTitle>Explain reward method (optional)</InputTitle>
          <Selector
            style={{width: "50%"}}
            name='gigreward'
            value={gigreward}
            onChange={e => onChange(e)}
            >
            <option value="" disabled selected hidden>Token</option>
            <option value="ETH">ETH</option>
            <option value="SOL">SOL</option>
            <option value="BTC">BTC</option>
            <option value="USDT">USDT</option>
          </Selector>

          </InputSection>
          <InputSection>

          <Input
            style={{width: "48%"}}
            placeholder='Amount'
            name='gigamount'
            value={gigamount}
            onChange={e => onChange(e)}
            type='number'
          />

          </InputSection>

          <InputSection>

          <div>
          <InputTitle>Have a timeframe? (optional)</InputTitle>
          </div>

          <br/>

            <Selector
              style={{width: "50%"}}
              onChange={e => onChange(e)}
              value={gigtimeframe}
              name='gigtimeframe'
            >
            <option value="" disabled selected hidden>Timeframe</option>
            <option value="0-30 Days">0-30 Days</option>
            <option value="1-3 Months">1-3 Months</option>
            <option value="3-6 Months">3-6 Months</option>
            <option value="6-12 Months">6-12 Months</option>
            <option value="+12 Months">+12 Months</option>
          </Selector>

          <br/>

        </InputSection>

      <ButtonSection>
        <Button
          styling='positive'
          onClick={nextPage}
        >Continue</Button>
        <Button
          styling='negative'
          onClick={goToBasics}
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
`;

const CategorySection = styled(GridList)`

`;
