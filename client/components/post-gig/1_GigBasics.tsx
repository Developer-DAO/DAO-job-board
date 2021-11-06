import styled from 'styled-components'

// UI & CSS
import Button from '../../styles/ui-components/Button.js';

import {BoxTop,
  Title,
  Title2,
  ItemBox,
  Input,
  Textarea,
  Small
} from '../../styles';

type GigBasicProps = {
  goToDetails: () => void;
  goBack: () => void;
  onChange: (e: React.FormEvent) => void;
  formData: {
    gigname: string;
    gigdescription: string;
  }[];
};

export default function GigBasics ({
goToDetails,
goBack,
formData,
onChange,
history}): GigBasicProps {

  const {
    gigname,
    gigdescription,
    gigwebsite,
    gigrepo
  } = formData;

  const nextPage = () => {
    if (gigname && gigdescription) {
      goToDetails();
    } else {
      console.log('You need a name and description for the gig')
    }
  };

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
          <Small>At least 10 characters</Small>

        <br/>
          <InputTitle>Describe the gig clearly</InputTitle>
          <Textarea
            minlength='30'
            placeholder='e.g., I am building an NFT game and need smart contract developers with experience in Solidity for a few weeks...'
            name='gigdescription'
            value={gigdescription}
            onChange={e => onChange(e)}
          />
          <Small>At least 100 characters</Small>

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

export async function getStaticProps():GetStaticProps {
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
