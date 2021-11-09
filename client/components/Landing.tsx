import { Image, Heading, Container, Text, Link } from "@chakra-ui/react";


import { ButtonRed, ButtonGreen, ButtonBlue } from "../styles/ui-components/Chakra-Button.tsx"

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
        <Link href="/developers">
          <ButtonGreen>
            Search  Devs
          </ButtonGreen>
        </Link>

        <Link href="/post-job">
          <ButtonBlue
          >
            Post a Job
          </ButtonBlue>
        </Link>

        <Link href="/post-gig">
          <ButtonRed
          >
            Post a Gig
          </ButtonRed>
        </Link>


        <Heading
        m="10px"
        fontSize='28px'
        >Looking for Web3 work?</Heading>
        <Link href="/jobs">
          <ButtonGreen>
            Search Gigs
          </ButtonGreen>
        </Link>

        <Link href="/gigs">
          <ButtonRed>
            Search Gigs
          </ButtonRed>
        </Link>
      </Container>
    </Container>
  );
}
