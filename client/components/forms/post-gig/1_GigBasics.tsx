import { useState } from 'react';
import { GetStaticProps } from 'next';

// UI & CSS
import {
  ButtonGreen,
  ButtonOrange,
} from '../../styles/ui-components/Chakra-Button';

import {
  Heading,
  Input,
  Textarea,
  Select,
  Container,
  Text,
  ButtonGroup,
} from '@chakra-ui/react';

type GigBasicProps = {
  goToDetails: () => void;
  goBack: () => void;
  onChange: (e: React.FormEvent) => void;
  formData: any;
};

export default function GigBasics({
  goToDetails,
  goBack,
  formData,
  onChange,
}: GigBasicProps) {
  //Active state makes inputs red if data is not correct
  const [wrongData, setWrongData] = useState(false);

  const { gigname, gigdescription, gigwebsite, gigrepo } = formData;

  //Active state makes inputs red if data is not correct
  const [wrongTitle, setWrongTitle] = useState(false);
  const [wrongDescription, setWrongDescription] = useState(false);

  const nextPage = () => {
    if (gigname.length >= 10 && gigdescription.length >= 100) {
      goToDetails();
    } else if (!gigname && !gigdescription) {
      setWrongDescription(true);
      setWrongTitle(true);
    } else if (
      (gigname.length >= 10 && gigdescription.length < 100) ||
      !gigdescription
    ) {
      setWrongTitle(false);
      setWrongDescription(true);
    } else if (
      (gigdescription.length >= 100 && gigname.length < 10) ||
      !gigname
    ) {
      setWrongDescription(false);
      setWrongTitle(true);
    }
  };

  return (
    <>
      <Container textAlign="center" mt="2.5%" mb="2.5%">
        <Heading>Gig Basics</Heading>
        <Text as="i">Let devs know what you are working on</Text>
      </Container>
      <br />

      <Container maxW="100%">
        <Heading fontSize="md" textAlign="left">
          Write a name for your gig
        </Heading>
        <Input
          borderColor={`${!wrongTitle ? '#e2e8f0' : 'red'}`}
          bgColor="white"
          bg="white"
          _hover={{ borderColor: '#97c0e6' }}
          minLength={10}
          placeholder="e.g., Smart Contract Developer for an NFT Game"
          name="gigname"
          value={gigname}
          onChange={(e) => onChange(e)}
        />
        {!wrongTitle ? (
          <Text fontSize="xs" textAlign="left">
            At least 10 characters
          </Text>
        ) : (
          <Text fontSize="xs" textAlign="left" color="red" fontWeight="bold">
            Make sure the name is at least 10 characters long
          </Text>
        )}

        <br />
        <Heading fontSize="md" textAlign="left">
          Describe the gig
        </Heading>
        <Textarea
          borderColor={`${!wrongDescription ? '#e2e8f0' : 'red'}`}
          _hover={{ borderColor: '#97c0e6' }}
          bg="white"
          color="black"
          placeholder="e.g., I am building an NFT game and need smart contract developers with experience in Solidity for a few weeks..."
          name="gigdescription"
          value={gigdescription}
          onChange={(e) => onChange(e)}
        />
        {!wrongTitle ? (
          <Text fontSize="xs" textAlign="left">
            At least 100 characters
          </Text>
        ) : (
          <Text fontSize="xs" textAlign="left" color="red" fontWeight="bold">
            Make sure the description is at least 100 characters long
          </Text>
        )}

        <br />
        <Heading mt="5px" mb="5px" fontSize="md" textAlign="left">
          Does the project have a website? {'(optional)'}
        </Heading>
        <Input
          _hover={{ borderColor: '#97c0e6' }}
          bg="white"
          color="black"
          placeholder="e.g., gigwebsite.com"
          name="gigwebsite"
          value={gigwebsite}
          onChange={(e) => onChange(e)}
        />

        <br />
        <br />

        <Heading mt="5px" mb="5px" fontSize="md" textAlign="left">
          Does the project have a repo? {'(optional)'}
        </Heading>
        <Input
          _hover={{ borderColor: '#97c0e6' }}
          bg="white"
          color="black"
          placeholder="e.g., github.com/gigname/gigrepo"
          name="gigrepo"
          value={gigrepo}
          onChange={(e) => onChange(e)}
        />
      </Container>

      <br />

      <ButtonGroup display="flex" flexDirection="column" m="5px">
        <ButtonGreen onClick={nextPage}>Continue</ButtonGreen>
        <ButtonOrange onClick={goBack}>Cancel</ButtonOrange>
      </ButtonGroup>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { FormData },
  };
};
