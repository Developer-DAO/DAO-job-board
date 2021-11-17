import { Image, Heading, Container, Text, Link } from "@chakra-ui/react";

import NextLink from 'next/link'

import { ButtonRed, ButtonGreen, ButtonBlue } from "../styles/ui-components/Chakra-Button"

export default function Landing() {
  return (
    <Container>
      <Container
        w='auto'
        h='auto'
        m='auto'
        mt="2.5%"
      >
        <Image
          borderRadius='180px'
          w="200"
          h="200"
          src="/DevDAO.png"
          alt="icon"
          m="auto"
        />
      </Container>

      <Container
        textAlign='center'
      >
        <Heading
          m="10px"
          fontSize='28px'
        >Looking for Web3 talent?</Heading>
        <NextLink href='/developers'>
          <ButtonGreen>
            Search  Devs
          </ButtonGreen>
        </NextLink>

        <NextLink href='/post-job'>
          <ButtonBlue
          >
            Post a Job
          </ButtonBlue>
        </NextLink>

        <NextLink href='/post-gig'>
          <ButtonRed
          >
            Post a Gig
          </ButtonRed>
        </NextLink>


        <Heading
          m="10px"
          fontSize='28px'
        >Looking for Web3 work?</Heading>
        <NextLink href='/jobs'>
          <ButtonGreen>
            Search Gigs
          </ButtonGreen>
        </NextLink>

        <NextLink href='/gigs'>
          <ButtonRed>
            Search Gigs
          </ButtonRed>
        </NextLink>
      </Container>
    </Container>
  );
}
