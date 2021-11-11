//CSS and UI
import {Box, Heading, Container, Flex, Text, Link, Image, SimpleGrid, Tag, TagLabel} from "@chakra-ui/react"

import {ButtonBlue} from "../../styles/ui-components/Chakra-Button";

export default function DeveloperItem() {
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
        <Link
        href="/developers/developer1"
        _hover={{textDecoration: "none"}}
        _focus={{textDecoration: "none", border:"none"}}
        >
            <Heading
              size="md"
              mb="5px"
            >Developer #1</Heading>
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
              src="/DevDAO.png" />
            </Container>
          <Text
          as="i"
          mb="5px"
          >Available</Text>
        </Link >

        <SimpleGrid
        m="auto"
        mt="5px"
        columns={3}
        spacing={1}
        w="100%">
          <Tag
          size="md"
          borderRadius="8px"
          bgColor="#E2E9F0"
          color="black"
          ><TagLabel m="auto">Web3</TagLabel></Tag>
          <Tag
          size="md"
          borderRadius="8px"
          bgColor="#E2E9F0"
          color="black"
          ><TagLabel m="auto">Solidity</TagLabel></Tag>
          <Tag
          size="md"
          borderRadius="8px"
          bgColor="#E2E9F0"
          color="black"
          ><TagLabel m="auto">Rust</TagLabel></Tag>
        </SimpleGrid>

        <Container
         mt="2.5%"
         mb="2.5%">
          <ButtonBlue>
            See Profile
          </ButtonBlue>
        </Container>
      </Container>
  );
}
