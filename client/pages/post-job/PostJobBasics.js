import React from 'react'

// UI & CSS
import Button from '../UI-Components/Button';

import {Top,
  InputSection,
  Input,
  InputTitles,
  Textarea,
  ButtonSection
} from './styles';

export default function PostJobBasics ({
goToDetails,
goBack,
formData,
onChange,
history}) {

  const {
    jobname,
    jobdescription,
    jobwebsite
  } = formData;

  const nextPage = async () => {
    goToDetails();
  }

  return (
    <>
      <Top>
        <h1>Job Basics</h1>
        <p><em>What kind of dev help are you looking for?</em></p>
      </Top>

        <InputSection>
          <InputTitles>Write a name for your job post</InputTitles>
          <Input
            placeholder='e.g. Smart Contract Developer for an NFT Game'
            name='jobname'
            value={jobname}
            onChange={e => onChange(e)}
          />
        <br/>
          <small>Max 20 words</small>
          <InputTitles>Describe your project clearly</InputTitles>
          <Textarea
            minlength='30'
            placeholder='e.g. I am building an NFT game and need smart contract developers with experience in Solidity and Hardhat...'
            name='jobdescription'
            value={jobdescription}
            onChange={e => onChange(e)}
          />
        <br/>
          <small>Max 300 words</small>
          <InputTitles>Have a website or repo? {'(optional)'}</InputTitles>
          <Input
            placeholder='e.g. www.projectsite.com'
            name='jobwebsite'
            value={jobwebsite}
            onChange={e => onChange(e)}
          />
        </InputSection>

      <ButtonSection>
        <Button
          className="button bad"
          onClick={goBack}
        >Cancel</Button>
        <Button
          onClick={nextPage}
          className='button primary'
        >Continue</Button>
    </ButtonSection>
  </>
  )
}
