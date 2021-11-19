import React from 'react';

import NextLink from 'next/link';

import {
  chakra,
  Link,
  LinkOverlay,
  Flex,
  HStack,
  Image,
} from '@chakra-ui/react';

import { ButtonBlack } from '../../styles/ui-components/Chakra-Button';

function Navbar() {
  return (
    <chakra.nav borderBottom="1px solid" borderColor="gray.200">
      <Flex
        justify="space-between"
        maxW={{ lg: '70%', md: '100%' }}
        align="center"
        mx="auto"
        py={3}
        px={5}
      >
        <NextLink
         href={"/"} passHref>
          <HStack
          as="a"
          display="flex"
          alignItems="center">
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
        </NextLink>

        <HStack spacing={{ base: 2, sm: 7 }}>
        <NextLink href={'/jobs'} passHref>
          <Link
            color="black"
            p="0.45rem"
            borderRadius="18px"
            _hover={{textDecoration: "none", bgColor:"#e2e8f0"}}
            _focus={{textDecoration: "none", border:"none"}}
            >Jobs</Link>
        </NextLink>
        <NextLink href={'/developers'} passHref>
          <Link
            color="black"
            p="0.45rem"
            borderRadius="18px"
            _hover={{textDecoration: "none", bgColor:"#e2e8f0"}}
            _focus={{textDecoration: "none", border:"none"}}
          >Devs</Link>
        </NextLink>
        <NextLink href={'/about'} passHref>
          <Link
            color="black"
            p="0.45rem"
            borderRadius="18px"
            _hover={{textDecoration: "none", bgColor:"#e2e8f0"}}
            _focus={{textDecoration: "none", border:"none"}}
            >About</Link>
        </NextLink>
        </HStack>

          <NextLink href={"/auth"} passHref>
              <ButtonBlack
            as='a'>Sign Up</ButtonBlack>
          </NextLink>
      </Flex>
    </chakra.nav>
  );
}

export default Navbar;
