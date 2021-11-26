import {
  Box,
  Heading,
  Container,
  SimpleGrid,
  Link,
  Flex,
  Text,
  Tag,
  TagLabel,
} from '@chakra-ui/react';

export default function GigItem() {
  return (
    <Box
      borderRadius="0px"
      boxSizing="border-box"
      boxShadow="0px 0px 1px 1px #e2e8f0"
      bg="#ffffff"
    >
      <SimpleGrid
        m="auto"
        mt="1.5%"
        ml="2%"
        columns={3}
        spacing={0}
        gap={1}
        w="100%"
      >
        <Link _hover={{ textDecoration: 'none' }}>
          <Heading size="md">Gig Title</Heading>
        </Link>
        <Text>In Progress</Text>
      </SimpleGrid>

      <Link _hover={{ textDecoration: 'none' }}>
        <Heading size="sm" mb="2.5%" mt="2.5%" ml="2%">
          Gig Creator
        </Heading>
      </Link>

      <SimpleGrid
        m="auto"
        mt="5px"
        mb="1.5%"
        ml="2%"
        columns={3}
        spacing={1}
        w="100%"
      >
        <Text>1 ETH</Text>
        <Text>3 Days</Text>
        <Text># Applicants</Text>
      </SimpleGrid>
    </Box>
  );
}
