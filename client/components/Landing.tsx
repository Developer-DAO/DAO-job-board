import { Image, Heading, Box } from '@chakra-ui/react';

import NextLink from 'next/link';

import {
  ButtonRed,
  ButtonGreen,
  ButtonBlue,
} from '../styles/ui-components/Chakra-Button';

export default function Landing() {
  return (
    <Box>
      <Box w="auto" h="auto" m="auto" mt="2.5%">
        <Image
          borderRadius="180px"
          w="200"
          h="200"
          src="/DevDAO.png"
          alt="icon"
          m="auto"
        />
      </Box>

      <Box textAlign="center">
        <Heading m="10px" fontSize="28px">
          Looking for Web3 talent?
        </Heading>
        <NextLink href="/developers">
          <ButtonGreen as="a">Search Devs</ButtonGreen>
        </NextLink>

        <NextLink href="/post-job">
          <ButtonBlue as="a">Post a Job</ButtonBlue>
        </NextLink>

        <Heading m="10px" fontSize="28px">
          Looking for Web3 work?
        </Heading>
        <NextLink href="/jobs">
          <ButtonRed as="a">Search Jobs</ButtonRed>
        </NextLink>
      </Box>
    </Box>
  );
}
