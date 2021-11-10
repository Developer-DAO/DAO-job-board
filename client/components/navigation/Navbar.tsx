
import React from 'react';
import { chakra, Link, Flex, HStack, Image } from '@chakra-ui/react';

import {ButtonBlack} from "../../styles/ui-components/Chakra-Button";

function Navbar() {

  return (
    <chakra.nav borderBottom="1px solid" borderColor="gray.200">
      <Flex
        justify="space-between"
        align="center"
        mx="auto"
        maxW="70%"
        minW="xl"
        py={3}
        px={5}
      >
        <Link href="/" passHref>
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
        </Link>
        <HStack spacing={{ base: 3, sm: 10 }}>
        <Link
          color="black"
          p="0.45rem"
          m="0 0.25rem"
          cursor="pointer"
          textDecoration="none"
          _hover={{textDecoration: "none", bgColor:"#e2e8f0"}}
          borderRadius="18px"
          href="/gigs">Gigs</Link>
        <Link
          color="black"
          p="0.45rem"
          m="0 0.25rem"
          cursor="pointer"
          textDecoration="none"
          borderRadius="18px"
          _hover={{textDecoration: "none", bgColor:"#e2e8f0"}}
          href="/jobs">Jobs</Link>

        <Link
          color="black"
          p="0.45rem"
          m="0 0.25rem"
          cursor="pointer"
          textDecoration="none"
          _hover={{textDecoration: "none", bgColor:"#e2e8f0"}}
          borderRadius="18px" href="/developers">Devs</Link>
        <Link
          color="black"
          p="0.45rem"
          m="0 0.25rem"
          cursor="pointer"
          textDecoration="none"
          _hover={{textDecoration: "none", bgColor:"#e2e8f0"}}
          borderRadius="18px"
          href="/companies">Companies</Link>
        <Link
          color="black"
          p="0.45rem"
          m="0 0.25rem"
          cursor="pointer"
          textDecoration="none"
          _hover={{textDecoration: "none", bgColor:"#e2e8f0"}}
          _focus={{}}
          borderRadius="18px"
          href="/about">About</Link>
        </HStack>

          <Link
            textDecoration="none"
            href="/auth">
              <ButtonBlack
            >Sign Up</ButtonBlack>
          </Link>

      </Flex>


    </chakra.nav>
  );
}

export default Navbar;
