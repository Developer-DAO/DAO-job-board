import React from 'react';
import { chakra, Link, Text, Flex, HStack, Image } from '@chakra-ui/react';
import { useEthers } from '@usedapp/core';

import { ButtonBlack } from '../../styles/ui-components/Chakra-Button';

function Navbar() {
  const { account } = useEthers();
  return (
    <chakra.nav borderBottom="1px solid" borderColor="gray.200">
      <Flex
        justify="space-between"
        maxW={{ lg: '70%', md: '100%' }}
        align="center"
        mx="auto"
        minW="xl"
        py={3}
        px={5}
      >
        <Link
          _hover={{ textDecoration: 'none' }}
          _focus={{ textDecoration: 'none', border: 'none' }}
          href="/"
        >
          <HStack as="a" display="flex" alignItems="center">
            <Image
              borderRadius="full"
              boxSize="30px"
              alt="Home"
              src="/DevDAO.png"
            />
            <chakra.span
              fontWeight="bold"
              fontSize="sm"
              color="gray.600"
              transition="color 300ms ease-in-out"
              _hover={{ color: 'black' }}
            >
              Job Board
            </chakra.span>
          </HStack>
        </Link>

        <HStack spacing={{ base: 2, sm: 7 }}>
          <Link
            color="black"
            p="0.45rem"
            m="0 0.25rem"
            cursor="pointer"
            textDecoration="none"
            _hover={{ textDecoration: 'none', bgColor: '#e2e8f0' }}
            _focus={{ textDecoration: 'none', border: 'none' }}
            borderRadius="18px"
            href="/gigs"
          >
            Gigs
          </Link>
          <Link
            color="black"
            p="0.45rem"
            m="0 0.25rem"
            cursor="pointer"
            textDecoration="none"
            borderRadius="18px"
            _hover={{ textDecoration: 'none', bgColor: '#e2e8f0' }}
            _focus={{ textDecoration: 'none', border: 'none' }}
            href="/jobs"
          >
            Jobs
          </Link>

          <Link
            color="black"
            p="0.45rem"
            m="0 0.25rem"
            cursor="pointer"
            textDecoration="none"
            _hover={{ textDecoration: 'none', bgColor: '#e2e8f0' }}
            _focus={{ textDecoration: 'none', border: 'none' }}
            borderRadius="18px"
            href="/developers"
          >
            Devs
          </Link>
          <Link
            color="black"
            p="0.45rem"
            m="0 0.25rem"
            cursor="pointer"
            textDecoration="none"
            _hover={{ textDecoration: 'none', bgColor: '#e2e8f0' }}
            _focus={{ textDecoration: 'none', border: 'none' }}
            borderRadius="18px"
            href="/companies"
          >
            Companies
          </Link>
          <Link
            color="black"
            p="0.45rem"
            m="0 0.25rem"
            cursor="pointer"
            textDecoration="none"
            _hover={{ textDecoration: 'none', bgColor: '#e2e8f0' }}
            _focus={{ textDecoration: 'none', border: 'none' }}
            borderRadius="18px"
            href="/about"
          >
            About
          </Link>
        </HStack>

        {account ? (
          <Text>{account}</Text>
        ) : (
          <Link textDecoration="none" href="/auth">
            <ButtonBlack>Sign Up</ButtonBlack>
          </Link>
        )}
      </Flex>
    </chakra.nav>
  );
}

export default Navbar;
