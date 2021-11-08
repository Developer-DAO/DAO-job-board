import {useState} from 'react';
import { GetStaticProps } from 'next';

import styled from 'styled-components';
import Button from '../../styles/ui-components/Button';

import {BoxTop,
  GridList,
  Title,
  Title2,
  ItemBox,
  Input,
  Selector,
  Small
} from '../../styles';

type JobDetailProps = {
  goToBasics: () => void;
  goToSummary: () => void;
  onChange: (e: React.FormEvent) => void;
  formData: any;
  setFormData: any;
  addLocation: () => void;
  locationActive: boolean;
};

export default function GigDetails({
  goToBasics,
  goToSummary,
  formData,
  onChange,
  setFormData,
  addLocation,
  locationActive
}: JobDetailProps) {

  const {
    jobcategory,
    jobcompensation,
    jobamount,
    jobequity,
    joblocation
  } = formData;

  const nextPage = () => {

    if (jobcategory) {
      goToSummary();
    } else {
      console.log('You need to select at least 3 categories')
    }
  };

  const selectCategory = () => {
    setFormData({ ...formData, jobcategory: 'category' })
  }

  return (
    <>
      <BoxTop>
        <h1>Job Details</h1>
        <em>Define the job category, compensation, and location</em>
      </BoxTop>

        <InputSection>
          <InputTitle>Pick a job category</InputTitle>
          <Small>Click on a category</Small>

          <CategorySection>
            <Button styling='category'
              onClick={selectCategory}
            >
              Category 1
            </Button>

            <Button styling='category'
            onClick={selectCategory}
            >
              Category 2
            </Button>

            <Button styling='category'
            onClick={selectCategory}

            >
              Category 3
            </Button>
          </CategorySection>

          <InputTitle>Explain compensation (optional)</InputTitle>
          <Small>Recommended</Small>
          <br/>
          <Selector
            name='jobcompensation'
            value={jobcompensation}
            onChange={e => onChange(e)}
            >
            <option value="" disabled selected hidden>Token / Currency</option>
            <optgroup label="Crypto">
              <option value="ETH">ETH</option>
              <option value="SOL">SOL</option>
              <option value="BTC">BTC</option>
              <option value="USDT">USDT</option>
            </optgroup>
            <optgroup label="Fiat">
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="CAD">CAD</option>
              <option value="AUD">AUD</option>
            </optgroup>
          </Selector>

          </InputSection>
          <InputSection>

          <Input
            placeholder='Amount'
            name='jobamount'
            value={jobamount}
            onChange={e => onChange(e)}
            type='number'
          />

          </InputSection>
          <br/>
          <InputSection>

          <div>
          <InputTitle>Do you offer equity? (optional)</InputTitle>
          </div>

          <br/>

            <Selector
              onChange={e => onChange(e)}
              value={jobequity}
              name='jobequity'
            >
            <option value="" disabled selected hidden>Equity Range</option>
            <option value="0.01-1%">0.01-1%</option>
            <option value="1%-2%">1%-2%</option>
            <option value="2%-5%">2%-5%</option>
            <option value="+5%">+5%</option>
          </Selector>

          <br/>

        </InputSection>

        <InputSection>

        <InputTitle>Location (optional)</InputTitle>
        <Small>Will default to Remote if empty</Small>
        <br/>
        <Input
          style={{width: '50%'}}
          type='string'
          onChange={e => onChange(e)}
          value={joblocation}
          name='joblocation'
          placeholder='e.g California, US'
        />

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

export const getStaticProps:GetStaticProps = async () => {
   return {
      props: { FormData }
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
  background: none;
`;

const CategorySection = styled(GridList)`

`;
