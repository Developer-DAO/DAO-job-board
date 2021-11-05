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
  nextPage,
  deleteCategory,
  addTimeframe,
  timeframeActive}) {

  const {
    gigcategory,
    gigreward,
    gigamount,
    gigtimeframe
  } = formData;

  return (
    <>
      <BoxTop>
        <h1>Gig Details</h1>
        <em>Define your project timeframe, category, and reward</em>
      </BoxTop>

        <InputSection>
          <InputTitle>Pick category</InputTitle>
          <SkillsSection>

          </SkillsSection>

          <InputTitle>Explain reward method {'(optional)'}</InputTitle>
          <select
            name='gigreward'
            value={gigreward}
            onChange={e => onChange(e)}
            >
            <option value="" disabled selected hidden>Token</option>
            <option value="ETH">ETH</option>
            <option value="SOL">SOL</option>
            <option value="BTC">BTC</option>
            <option value="USDT">USDT</option>
          </select>

          <Input
            placeholder='Amount'
            name='gigamount'
            value={gigamount}
            onChange={e => onChange(e)}
            type='number'
          />

          <div className='cp-input-checkbox'>
            <Input
            type='checkbox'
            onClick={addTimeframe}
            /> <label>Specific timeframe?</label>
          </div>
          {timeframeActive &&
            <Selector>
            <option value="" disabled selected hidden>Duration</option>
            <option value="0-30 Days">0-30 Days</option>
            <option value="1-3 Months">1-3 Months</option>
            <option value="3-6 Months">3-6 Months</option>
            <option value="6-12 Months">6-12 Months</option>
            <option value="+12 Months">+12 Months</option>
          </Selector>
          }

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

const InputTitle = styled(Title2)`
  font-size: 1rem;
  text-align: left;
`;

const InputSection = styled(ItemBox)`
  box-shadow: 0 0 0 0;
`;

const ButtonSection = styled(ItemBox)`
box-shadow: 0 0 0 0;
`;

const SkillsSection = styled(GridList)`

`;
