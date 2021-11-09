import {useState} from 'react';
import { GetStaticProps } from 'next'

// UI & CSS
import { ButtonGreen, ButtonOrange } from "../../styles/ui-components/Chakra-Button"

import { Heading, Input, Textarea, Select, Container, Text, ButtonGroup } from "@chakra-ui/react";

type GigBasicProps = {
  goToDetails: () => void;
  goBack: () => void;
  onChange: (e: React.FormEvent) => void;
  formData: any;
};

export default function GigBasics ({
goToDetails,
goBack,
formData,
onChange}:GigBasicProps) {

  //Active state makes inputs red if data is not correct
  const [wrongData, setWrongData] = useState(false);

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
      <Container textAlign="center" p="0.5rem">
        <Heading fontSize="lg">Gig Basics</Heading>
        <Text as="i">Let devs know what you are working on</Text>
      </Container>
      <br/>

        <Container
        borderColor="#e2e8f0"
        >
          <Heading
          fontSize="md"
          textAlign="left"
          >Write a name for your gig</Heading>
          <Input
            _hover={{borderColor: '#97c0e6'}}
            bg="white"
            color="black"
            placeholder='e.g., Smart Contract Developer for an NFT Game'
            name='gigname'
            value={gigname}
            onChange={e => onChange(e)}
          />
          <Text
          fontSize="sm"
          textAlign="left"
          >At least 10 characters</Text>

        <br/>
           <Heading
            fontSize="md"
            textAlign="left">Describe the gig clearly</Heading>
          <Textarea
            _hover={{borderColor: '#97c0e6'}}
            bg="white"
            color="black"
            placeholder='e.g., I am building an NFT game and need smart contract developers with experience in Solidity for a few weeks...'
            name='gigdescription'
            value={gigdescription}
            onChange={e => onChange(e)}
          />
          <Text
          fontSize="sm"
          textAlign="left"
          >At least 100 characters</Text>

        <br/>
          <Heading
          mt="5px"
          mb="5px"
          fontSize="md"
          textAlign="left">Does the project have a website? {'(optional)'}</Heading>
          <Input
            _hover={{borderColor: '#97c0e6'}}
            bg="white"
            color="black"
            placeholder='e.g., gigwebsite.com'
            name='gigwebsite'
            value={gigwebsite}
            onChange={e => onChange(e)}
          />

          <br/>
          <br/>

          <Heading
          mt="5px"
          mb="5px"
          fontSize="md"
          textAlign="left">Does the project have a repo? {'(optional)'}</Heading>
          <Input
            _hover={{borderColor: '#97c0e6'}}
            bg="white"
            color="black"
            placeholder='e.g., github.com/gigname/gigrepo'
            name='gigrepo'
            value={gigrepo}
            onChange={e => onChange(e)}
          />
        </Container>

        <br/>

      <ButtonGroup
        display="flex"
        flexDirection="column"
        m="5px"
      >
        <ButtonGreen
          onClick={nextPage}
        >Continue</ButtonGreen>
        <ButtonOrange
          onClick={goBack}
        >Cancel
        </ButtonOrange>
    </ButtonGroup>
  </>
  )
}

export const getStaticProps:GetStaticProps = async () => {
   return {
      props: { FormData }
   }
}
