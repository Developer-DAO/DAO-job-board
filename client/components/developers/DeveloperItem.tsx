import NextLink from 'next/link';

//CSS and UI
import {
  Box,
  Heading,
  Container,
  Flex,
  Text,
  Link,
  Image,
  SimpleGrid,
  HStack,
  Tag,
  TagLabel,
} from '@chakra-ui/react';
import { ButtonGreen } from '../../styles/ui-components/Chakra-Button';

export default function DeveloperItem() {
  return (
    <Box
      bg="#ffffff"
      w="100%"
      margin="auto"
      textAlign="center"
      boxSizing="border-box"
      boxShadow="0px 0px 2px 4px #e2e8f0"
      p="2%"
      borderRadius="12px"
    >
      <NextLink href={'/developers/developer1'} passHref>
        <Link
          _hover={{ textDecoration: 'none' }}
          _focus={{ textDecoration: 'none' }}
        >
          <Box m="auto" w="fit-content">
            <Heading size="md" mb="5px">
              Developer #1
            </Heading>
            <Image
              m="auto"
              w="6rem"
              h="6rem"
              mb="2.5px"
              borderRadius="full"
              border="1px solid black"
              src="/DevDAO.png"
              alt="developer"
            />
            <Text as="i" mb="5px">
              Available
            </Text>
          </Box>
        </Link>
      </NextLink>

      <HStack m="auto" mt="5%" mb="5%" columns={5} spacing={1} w="fit-content">
        <Tag size="md" borderRadius="8px" bgColor="#E2E9F0" color="black">
          <TagLabel m="auto">Web3</TagLabel>
        </Tag>
        <Tag size="md" borderRadius="8px" bgColor="#E2E9F0" color="black">
          <TagLabel m="auto">Solidity</TagLabel>
        </Tag>
        <Tag size="md" borderRadius="8px" bgColor="#E2E9F0" color="black">
          <TagLabel m="auto">Rust</TagLabel>
        </Tag>
        <Tag size="md" borderRadius="8px" bgColor="#E2E9F0" color="black">
          <TagLabel m="auto">ThreeJS</TagLabel>
        </Tag>
      </HStack>

      <NextLink href={'/developers/developer1'} passHref>
        <ButtonGreen>See Profile</ButtonGreen>
      </NextLink>
    </Box>
  );
}
