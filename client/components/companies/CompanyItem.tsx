import { Box, Heading, Container, Flex, Text, Link, Image, SimpleGrid, Tag, TagLabel } from "@chakra-ui/react"

import {ButtonGray} from "../../styles/ui-components/Chakra-Button";

export default function CompanyItem() {
  return (
    <Container
    bg="#ffffff"
    w="100%"
    margin="auto"
    textAlign="center"
    boxSizing="border-box"
    boxShadow="0px 0px 2px 4px #e2e8f0"
    p="2%"
    borderRadius="12px"
    >
      <Link href="/">
        <Heading
          size="md"
          mb="5px"
        >Company Name</Heading>
      </Link>
      <Container
          m="auto"
          w="fit-content"
        >
          <Image
            w="6rem"
            h="6rem"
            mb="2.5px"
            borderRadius="full"
            border="1px solid black"
            src="/ETHEREUM.png"
            alt="company"  />
        </Container>
        <Text as="i">Open Jobs: 10</Text>
        <br />
        <ButtonGray>View More</ButtonGray>
    </Container>
      );
    }
