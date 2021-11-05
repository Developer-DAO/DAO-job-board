import styled from 'styled-components'

// UI & CSS
import Button from '../../styles/UI-Components/Button';

import {BoxTop,
  Title,
  Title2,
  ItemBox,
  Input,
  Textarea
} from '../../styles/styles';

export default function GigBasics ({
goToDetails,
goBack,
formData,
onChange,
nextPage,
history}) {

  const {
    gigname,
    gigdescription,
    gigwebsite,
    gigrepo
  } = formData;

  return (
    <>
      <BoxTop>
        <Title>Gig Basics</Title>
        <p><em>Let devs know what you are working on</em></p>
      </BoxTop>

        <InputSection>
          <InputTitle>Write a name for your gig</InputTitle>
          <Input
            placeholder='e.g., Smart Contract Developer for an NFT Game'
            name='gigname'
            value={gigname}
            onChange={e => onChange(e)}
          />
        <br/>
          <InputTitle>Describe the gig clearly</InputTitle>
          <Textarea
            minlength='30'
            placeholder='e.g., I am building an NFT game and need smart contract developers with experience in Solidity for a few weeks...'
            name='gigdescription'
            value={gigdescription}
            onChange={e => onChange(e)}
          />
        <br/>
          <InputTitle>Does the project have a website? {'(optional)'}</InputTitle>
          <Input
            placeholder='e.g., gigwebsite.com'
            name='gigwebsite'
            value={gigwebsite}
            onChange={e => onChange(e)}
          />

          <InputTitle>Does the project have a repo? {'(optional)'}</InputTitle>
          <Input
            placeholder='e.g., github.com/gigname/gigrepo'
            name='gigrepo'
            value={gigrepo}
            onChange={e => onChange(e)}
          />
        </InputSection>

      <ButtonSection>
        <Button
          type='submit'
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
