import NextLink from 'next/link';

//CSS and UI
import {
  Box,
  Heading,
  Text,
  Link,
  Image,
  HStack,
  Tag,
  TagLabel,
} from '@chakra-ui/react';
import React from 'react';

export default function DeveloperItem() {
  const userdata = {
    skills: ['Solidity', 'EthersJS', 'React', 'Rust'],
    name: 'Developer',
    status: 'Available',
    avatar: '/DevDAO.png',
  };

  const DeveloperHeader = () => {
    return (
      <Box
        p="1rem"
        borderBottom="1px"
        borderColor="neutral.200"
        textAlign="center"
      >
        <NextLink href={'/developers/developer1'} passHref>
          <Link
            _hover={{ textDecoration: 'none' }}
            _focus={{ textDecoration: 'none' }}
          >
            <Box m="auto" w="fit-content">
              <Heading variant="header5" mb="5px">
                {userdata.name}
              </Heading>
              <Image
                m="auto"
                w="6rem"
                h="6rem"
                mb="2.5px"
                borderRadius="full"
                border="1px solid black"
                src={userdata.avatar}
                alt="developer"
              />
              <Text as="i" variant="body4" fontWeight="light" mb="5px">
                {userdata.status}
              </Text>
            </Box>
          </Link>
        </NextLink>
      </Box>
    );
  };

  return (
    <Box
      border="1px"
      borderColor="neutral.200"
      borderRadius="6px"
      boxSizing="border-box"
      transition="transform 0.3s ease-in-out, box-shadow 0.3s ease-out"
      _hover={{
        transform: 'translateY(6px)',
        boxShadow: '0px 16px 20px rgba(0, 0, 0, 0.1)',
      }}
      height={{ lg: 'fit-content', md: 'fit-content', sm: 'max-content' }}
      w="100%"
      textAlign="left"
      bg="white"
      minW="300px"
      maxW="320px"
    >
      <DeveloperHeader />

      <HStack
        m="auto"
        mt="5%"
        mb="5%"
        columns={5}
        spacing="micro"
        w="fit-content"
      >
        {userdata.skills.map((skill, index) => (
          <Tag
            key={index}
            w="fit-content"
            size="md"
            backgroundColor="transparent"
            border="1px"
            borderColor="neutral.200"
            borderRadius="8px"
            color="neutral.400"
            minWidth="max-content"
          >
            <TagLabel m="auto">{skill}</TagLabel>
          </Tag>
        ))}
      </HStack>
    </Box>
  );
}
