import React from 'react'

// UI & CSS
import Button from '../UI-Components/Button';

import {BoxTop,
  InputSection,
  Input,
  InputTitles,
  Textarea,
  ButtonSection
} from '../../styles/styles';

export default function PostJobBasics ({
goToDetails,
goBack,
formData,
onChange,
history}) {

  const {
    projectname,
    projectdescription,
    projectwebsite
  } = formData;

  const nextPage = async () => {
    goToDetails();
  };

  return (
    <>
      <BoxTop>
        <h1>Project Basics</h1>
        <p><em>Let devs know what you are working on</em></p>
      </BoxTop>

        <InputSection>
          <InputTitles>Write a name for your job post</InputTitles>
          <Input
            placeholder='e.g. Smart Contract Developer for an NFT Game'
            name='projectname'
            value={projectname}
            onChange={e => onChange(e)}
          />
        <br/>
          <InputTitles>Describe your project clearly</InputTitles>
          <Textarea
            minlength='30'
            placeholder='e.g. I am building an NFT game and need smart contract developers with experience in Solidity and Hardhat...'
            name='projectdescription'
            value={projectdescription}
            onChange={e => onChange(e)}
          />
        <br/>
          <InputTitles>Does the project have a website or repository? {'(optional)'}</InputTitles>
          <Input
            placeholder='e.g. www.projectsite.com'
            name='projectwebsite'
            value={projectwebsite}
            onChange={e => onChange(e)}
          />
        </InputSection>

      <ButtonSection>
        <Button
          onClick={goBack}
        >Cancel</Button>
        <Button
          onClick={nextPage}
        >Continue</Button>
    </ButtonSection>
  </>
  )
}
