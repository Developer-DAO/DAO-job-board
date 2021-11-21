import {
  Box,
  Container,
  Link,
  Flex,
  Spacer,
  Image,
  Heading,
  Text,
  HStack,
  Tag,
  TagLabel,
} from '@chakra-ui/react';

export default function JobItem() {
  return (
    <Box
      boxSizing="border-box"
      boxShadow="0px 1px 1px rgba(0, 0, 0, 0.25), 1px 0px 1px rgba(0, 0, 0, 0.25)"
      height={{ lg: 'fit-content', md: 'fit-content', sm: 'max-content' }}
      m="auto"
      mb="0.5%"
      mt="2.5%"
      w="100%"
      textAlign="left"
      bg="white"
    >
      <Box ml="0.5%" maxW="100%">
        <Link
          href="/jobs/job-post-name"
          _hover={{ textDecoration: 'none' }}
          _focus={{ textDecoration: 'none', border: 'none' }}
        >
          <Heading size="lg" mb="2.5%">
            Project 1
          </Heading>
        </Link>

        <Link
          href="/recruiter-name"
          _hover={{ textDecoration: 'none' }}
          _focus={{ textDecoration: 'none', border: 'none' }}
        >
          <Flex mt="1%" mb="2.5%" align="center">
            <Image
              w="45px"
              h="45px"
              borderRadius="180px"
              border="1px solid black"
              src="/DevDAO.png"
              alt="company"
            />
            <Spacer maxW="5px" />
            <Heading size="sm">Recruiter Username</Heading>
          </Flex>
        </Link>
      </Box>

      <Box ml="0.5%" pb="1%" maxW="100%">
        <HStack m="auto" mt="2%" columns={3} spacing={5}>
          <Text>Compensation</Text>
          <Text>Remote</Text>
          <Text>Full-Time</Text>
        </HStack>

        <HStack
          mt="15px"
          templateColumns={{ lg: 'repeat(10, 1fr)', sm: 'repeat(4, 2fr)' }}
          wordWrap="break-word"
          overflow="ellipsis"
          autoRows="fit-content"
          gap="0.5rem"
          spacing={1}
        >
          <Tag
            w="fit-content"
            size="md"
            p="10px"
            borderRadius="8px"
            bgColor="#E2E9F0"
            color="black"
          >
            <TagLabel m="auto">Solidity</TagLabel>
          </Tag>
          <Tag
            w="fit-content"
            size="md"
            p="10px"
            borderRadius="8px"
            bgColor="#E2E9F0"
            color="black"
          >
            <TagLabel m="auto">Hardhat</TagLabel>
          </Tag>
          <Tag
            w="fit-content"
            size="md"
            p="10px"
            borderRadius="8px"
            bgColor="#E2E9F0"
            color="black"
          >
            <TagLabel m="auto">Rust</TagLabel>
          </Tag>
          <Tag
            w="fit-content"
            size="md"
            p="10px"
            borderRadius="8px"
            bgColor="#E2E9F0"
            color="black"
          >
            <TagLabel m="auto">Javascript</TagLabel>
          </Tag>
          <Tag
            w="fit-content"
            size="md"
            p="10px"
            borderRadius="8px"
            bgColor="#E2E9F0"
            color="black"
          >
            <TagLabel m="auto">React</TagLabel>
          </Tag>
          <Tag
            w="fit-content"
            size="md"
            p="10px"
            borderRadius="8px"
            bgColor="#E2E9F0"
            color="black"
          >
            <TagLabel m="auto">ThreeJS</TagLabel>
          </Tag>
        </HStack>
      </Box>
    </Box>
  );
}
