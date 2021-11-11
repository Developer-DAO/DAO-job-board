import {
  Box,
  Container,
  Link,
  Flex,
  Spacer,
  Image,
  Heading,
  Text,
  SimpleGrid,
  Tag,
  TagLabel
} from "@chakra-ui/react";

export default function JobItem() {
  return (
    <Box
      boxSizing="border-box"
      boxShadow="0px 1px 1px rgba(0, 0, 0, 0.25), 1px 0px 1px rgba(0, 0, 0, 0.25)"
      height={{ lg: "fit-content", md: "fit-content", sm: "max-content" }}
      bg={{ lg: "white", sm: "none" }}
      m="auto"
      mb="0.5%"
      w="100%"
      textAlign="left"
      bg="white"
    >

      <Container ml="2.5%" maxW="100%">
        <Link
          href="/"
          href="/developers/developer1"
          _hover={{ textDecoration: "none" }}
          _focus={{ textDecoration: "none", border: "none" }}
        >
          <Heading size="lg">Project 1</Heading>
        </Link>

        <Link
          href="/"
          href="/jobs/project-1"
          _hover={{ textDecoration: "none" }}
          _focus={{ textDecoration: "none", border: "none" }}
        >

          <Flex mt="1%" align="center">
            <Image w={50} h={50} borderRadius="180px" border="1px solid black" src="/ETHEREUM.png" />
            <Spacer maxW="5px" />
            <Heading size="sm">Company Name</Heading>
          </Flex>
        </Link>
      </Container>

      <Container ml="2.5%" mb="0px" maxW="100%">
        <SimpleGrid
          m="auto"
          mt="2%"
          columns={3}
          spacing={1}
        >
          <Text>Compensation</Text>
          <Text>Remote</Text>
          <Text>Full-Time</Text>
        </SimpleGrid>

        <SimpleGrid
          m="auto"
          mt="2%"
          columns={3}
          spacing={1}
        >
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
          ><TagLabel m="auto">Hardhat</TagLabel></Tag>
          <Tag
            size="md"
            borderRadius="8px"
            bgColor="#E2E9F0"
            color="black"
          ><TagLabel m="auto">Rust</TagLabel></Tag>
          <Tag
            size="md"
            borderRadius="8px"
            bgColor="#E2E9F0"
            color="black"
          ><TagLabel m="auto">Javascript</TagLabel></Tag>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
